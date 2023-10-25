import {CSSProperties, useCallback, useMemo, useRef} from 'react';
import Slider from 'react-slick/';
import {TCarouselProps, TIconButton} from '@/components';

const TCarousel = (props: TCarouselProps) => {

    // region [Hooks]

    const slickRef = useRef<Slider>(null);

    // endregion


    // region [Events]

    const onClickPrev = useCallback(() => {
        slickRef.current.slickPrev();
    }, []);

    const onClickNext = useCallback(() => {
        slickRef.current.slickNext();
    }, []);

    // endregion


    // region [Templates]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        return clazz.join(' ');
    }, [props.className]);

    const arrowClass = useMemo((): string => {

        return `t-carousel-arrow--show-${props.showArrow}`;

    }, [props.showArrow]);

    const rootStyle = useMemo((): CSSProperties => {

        let style: CSSProperties = {};
        if (props.style) style = {...props.style};

        style.height = props.height;

        return style;
    }, [props.height, props.style]);


    // endregion

    return (

        <div className={`t-carousel-wrapper ${rootClass}`} style={rootStyle} id={props.id}>
            {
                props.showArrow !== 'never' && (
                    <div className={`t-carousel-arrow t-carousel-prev ${arrowClass}`}>
                        <TIconButton large onClick={onClickPrev}>navigate_before</TIconButton>
                    </div>
                )
            }
            <Slider className={'t-carousel'}
                    dotsClass={'t-carousel-nav-points'}
                    adaptiveHeight={false}
                    arrows={false}
                    customPaging={() => <div className={'t-carousel-nav-points__point'}/>}
                    ref={slickRef}
                    dots={!props.noDots}
                    autoplay={props.autoplay}
                    autoplaySpeed={props.autoplaySpeed}
            >
                {props.children}
            </Slider>

            {
                props.showArrow !== 'never' && (
                    <div className={`t-carousel-arrow t-carousel-next ${arrowClass}`}>
                        <TIconButton large onClick={onClickNext}>navigate_next</TIconButton>
                    </div>
                )
            }
        </div>
    );
};

TCarousel.defaultProps = {
    height: '400px',
    noDots: false,
    autoplay: false,
    autoplaySpeed: 6000,
    showArrow: 'hover',
};

TCarousel.displayName = 'TCarousel';


export default TCarousel;

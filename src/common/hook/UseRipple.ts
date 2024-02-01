import {useState, useRef, KeyboardEvent, MouseEvent, MutableRefObject, CSSProperties} from 'react';
import lodashUtil from '@/common/util/lodashUtil';
import colorUtil from '../util/ColorUtil';

type RippleStatus = 'on' | 'off';

const rippleElementTag = 'span';

const useRipple = (ref: MutableRefObject<HTMLElement>) => {

    // region [Hooks]

    const [status, setStatus] = useState<RippleStatus>('off');
    const rippleTaskRef = useRef<Promise<string>>();

    // endregion


    const register = (event: MouseEvent | KeyboardEvent) => {

        setStatus('on');
        const uniqueRippleClass = lodashUtil.uniqueId('t-ripple-');

        rippleTaskRef.current = new Promise((resolve) => {
            const {x, y, width, height} = ref.current.getBoundingClientRect();

            const { // Default values for Keyboard event
                clientX = x + (width / 2),
                clientY = y + (height / 2),
            } = event as MouseEvent;
            const radius = Math.sqrt(width * width + height * height);

            const ripple = document.createElement(rippleElementTag);
            ripple.classList.add(uniqueRippleClass);

            const baseColor = window.getComputedStyle(ref.current)
                .getPropertyValue('background-color');

            const rippleStyle: CSSProperties = {
                position: 'absolute',
                top: `${((clientY - y - radius) / height) * 100}%`,
                left: `${((clientX - x - radius) / width) * 100}%`,
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                opacity: '0.1',
                background: colorUtil.shadeColor(baseColor, 100),
                borderRadius: '50%',
                animation: '0.35s ripple linear',
            };

            Object.keys(rippleStyle).forEach((cssProperty) => {
                ripple.style[cssProperty] = rippleStyle[cssProperty];
            });

            ref.current.append(ripple);

            setTimeout(() => {

                resolve(uniqueRippleClass);
            }, 350);
        });

    };

    const remove = () => {

        rippleTaskRef.current?.then((rippleClass) => {

            const rippleElement = ref.current?.getElementsByClassName(rippleClass);
            rippleElement[0]?.remove();
            setStatus('off');
        });
    };


    return {status, register, remove};
};
export default useRipple;

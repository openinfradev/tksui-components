import {CSSProperties, KeyboardEvent, MouseEvent, MutableRefObject, useRef} from 'react';
import colorUtil from '../util/ColorUtil';
import lodashUtil from '@/common/util/lodashUtil';

type RippleStatus = 'on' | 'off';

const rippleClass = 't-ripple';
const rippleElementTag = 'span';

const useRipple = (ref: MutableRefObject<HTMLElement>) => {

    // region [Hooks]

    const status = useRef<RippleStatus>('off');
    const lastRipplePromise = useRef<Promise<string>>();

    // endregion


    // region [Privates]

    const register = (event: MouseEvent | KeyboardEvent) => {

        if (event.type.includes('key')) {
            const keyboardEvent = event as KeyboardEvent;
            if (keyboardEvent.key !== 'Enter' && keyboardEvent.key !== ' ') { return; }

            const targetElement = event.target as HTMLElement;
            const rippleElements = targetElement.getElementsByClassName(rippleClass);

            if (status.current === 'on' || rippleElements?.length > 0) { return; }
        }

        status.current = 'on';
        const uniqueRippleClass = lodashUtil.uniqueId(`${rippleClass}-`);

        lastRipplePromise.current = new Promise((resolve) => {
            const {x, y, width, height} = ref.current.getBoundingClientRect();

            const { // Default values for Keyboard event
                clientX = x + (width / 2),
                clientY = y + (height / 2),
            } = event as MouseEvent;
            const radius = Math.sqrt(width * width + height * height);

            const ripple = document.createElement(rippleElementTag);
            ripple.classList.add(rippleClass);
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
                background: colorUtil.shadeColor(baseColor, 40),
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

        lastRipplePromise.current?.then((rippleTargetClass) => {
            const rippleElement = ref.current?.getElementsByClassName(rippleTargetClass);
            if (rippleElement) { rippleElement[0]?.remove(); }

            status.current = 'off';
        });
    };

    // endregion

    return {register, remove};
};
export default useRipple;

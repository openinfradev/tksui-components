import {KeyboardEvent, MouseEvent, MutableRefObject} from 'react';
import colorUtil from '../util/ColorUtil';


export default function useRipple(
    ref: MutableRefObject<HTMLElement>,
) {
    let ripplePromise: Promise<null> = null;
    
    function register(event: MouseEvent | KeyboardEvent) {
        
        ripplePromise = new Promise((resolve) => {
            const {x, y, width, height} = ref.current.getBoundingClientRect();
            
            const { // Default values for Keyboard event
                clientX = x + (width / 2),
                clientY = y + (height / 2),
            } = event as MouseEvent;
            const radius = Math.sqrt(width * width + height * height);
            
            const ripple = document.createElement('div');
            ripple.classList.add('t-ripple');
            
            ripple.style.position = 'absolute';
            ripple.style.top = `${((clientY - y - radius) / height) * 100}%`;
            ripple.style.left = `${((clientX - x - radius) / width) * 100}%`;
            ripple.style.width = `${radius * 2}px`;
            ripple.style.height = `${radius * 2}px`;
            ripple.style.opacity = '0.1';
            
            const baseColor = window.getComputedStyle(ref.current)
                .getPropertyValue('background-color');
            ripple.style.background = colorUtil.shadeColor(baseColor, 100);
            ripple.style.borderRadius = '50%';
            ripple.style.animation = '0.3s ripple linear';
            ref.current.append(ripple);
            
            setTimeout(() => {
                resolve(null);
            }, 300);
        });
    }
    
    function remove() {
        
        ripplePromise?.then(() => {
            const ripples = ref.current?.getElementsByClassName('t-ripple');
            if (ripples) ripples[0]?.parentNode.removeChild(ripples[0]);
        });
    }
    
    return {register, remove};
}

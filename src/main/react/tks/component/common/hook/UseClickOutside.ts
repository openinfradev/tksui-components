import {MutableRefObject, useEffect} from 'react';


export default function useClickOutside(
    ref: MutableRefObject<any>,
    callback: () => void,
) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }
        
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
}

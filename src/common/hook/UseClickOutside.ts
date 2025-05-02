'use client';

import type {MutableRefObject} from 'react';
import {useEffect} from 'react';

export default function useClickOutside(ref: MutableRefObject<HTMLElement>, callback: () => void) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [callback, ref]);
}

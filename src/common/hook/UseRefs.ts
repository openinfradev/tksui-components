'use client';

import type {MutableRefObject} from 'react';
import {useRef} from 'react';

export default function useRefs<T = any>(count: number) {
    const refs: MutableRefObject<T>[] = [];

    for (let i = 0; i < count; i++) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        refs.push(useRef(null));
    }

    return refs;
}

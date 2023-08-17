import {MutableRefObject, useRef} from 'react';


export default function useRefs<T = any>(count: number) {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const refs: MutableRefObject<T>[] = [];

    for (let i = 0; i < count; i++) {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        refs.push(useRef(null));
    }


    return refs;
}

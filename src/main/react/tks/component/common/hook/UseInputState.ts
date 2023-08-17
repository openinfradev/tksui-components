import {useState} from 'react';


export default function useInputState<T>(initialValue: T) {
    const [state, setState] = useState<T>(initialValue);

    function onChange(newValue: T) {
        setState(newValue);
    }

    return {value: state, onChange, setState};
}

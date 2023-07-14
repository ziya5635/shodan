import { useCallback, useState } from "react";

function useForm(initialState={}) {
    const [state, setState] = useState(initialState);
    const onChange = useCallback((evt) => {
        //const fieldName = evt.target.name;
        const target = evt.target.value;
        setState(oldState => ({ ...oldState, target }))
    }, [setState]);
    return [state, onChange];
}

export default useForm;
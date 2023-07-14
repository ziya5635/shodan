import { useCallback, useState } from "react";


function useToggle(initValue=false) {
    const [isActive, setActive] = useState(Boolean(initValue));
    const toggle = useCallback(() => setActive(val => !val), [setActive]);
    return [isActive, toggle];
}

export default useToggle;
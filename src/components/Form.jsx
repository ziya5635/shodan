import useForm from "../hooks/useForm";
import { memo } from "react";

const Form = memo(function Form({ updateTargets }) {
    const [data, onChange] = useForm();
    const onSubmit = (evt) => {
        evt.preventDefault();
        updateTargets(data);
    };
    return (
        <form onSubmit={onSubmit}>
            <label>Target:</label>
            <input type="text" onChange={onChange} />
            <button>scan</button>
        </form>
    )
});

export default Form;
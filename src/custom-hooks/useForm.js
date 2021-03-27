import { useState } from 'react';

const useForm = (inputText) => {
    const [customHook, setCustomHook] = useState(inputText);

    const setInput = (e) => {
        setCustomHook(e.target.value);
    };

    const resetInput = (e) => {
        setCustomHook('');
    };

    return [customHook, setInput, resetInput];
};

export default useForm;

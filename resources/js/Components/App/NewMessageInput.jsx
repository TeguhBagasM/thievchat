import React, { useEffect, useRef } from "react";

const NewMessageInput = ({ value, onChange, onSend }) => {
    const input = useRef;

    const onInputKeyDown = (ev) => {
        if (ev.key === "Enter" && !ev.shiftKey) {
            ev.preventDefault();
            onSend();
        }
    };
};

export default NewMessageInput;

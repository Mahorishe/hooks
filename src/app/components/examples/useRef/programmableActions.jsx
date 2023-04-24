import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.focus();
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email">Email</label>
            <input
                type="text"
                placeholder="Enter email..."
                id="email"
                ref={inputRef}
            />
            <button className="btn btn-primary" onClick={handleClick}>
                Фокус
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;

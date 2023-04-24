import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const RenderCountExample = () => {
    const [count, setCount] = useState(true);
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current += 1;
    });
    const handleClick = () => {
        setCount(!count);
    };
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <h2>Количество рендеров</h2>
            <p>Было рендеров: {renderCount.current}</p>
            <p>
                <button className="btn btn-primary" onClick={handleClick}>
                    Обновить состояние
                </button>
            </p>
        </CardWrapper>
    );
};

export default RenderCountExample;

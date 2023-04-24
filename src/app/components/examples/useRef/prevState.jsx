import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const PrevStateExample = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);

    useEffect(() => {
        countRef.current = count;
    });

    const handleClick = () => {
        setCount((prevState) => prevState + 1);
    };
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>Предыдущее состояние: {countRef.current}</p>
            <p>Новое состояние состояние: {count}</p>
            <button className="btn btn-primary" onClick={handleClick}>
                Изменить состояние
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;

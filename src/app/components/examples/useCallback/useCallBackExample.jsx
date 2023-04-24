import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const countRender = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validateWithOutCallback = () => {
        console.log(data);
    };

    useEffect(() => {
        countRender.current += 1;
    }, [validateWithOutCallback]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <label htmlFor="email">Email</label>
            <input
                type="text"
                placeholder="Enter email..."
                id="email"
                name="email"
                value={data.email || ""}
                onChange={handleChange}
            />
            <p>
                Количество инициализации функции validateWithOutCallback:
                {countRender.current}
            </p>
        </CardWrapper>
    );
};

export default UseCallBackExample;

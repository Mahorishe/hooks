import React, { useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

function myLoop(n) {
    console.time("Выполнялось: ");
    let i = 0;
    do {
        i++;
    } while (i !== n);
    console.timeEnd("Выполнялось: ");
    return i;
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(1_000_000_000);
    const [colorBtn, setColorBtn] = useState(false);

    const btnColor = colorBtn ? "primary" : "secondary";

    const computedResult = useMemo(() => {
        return myLoop(value);
    }, [value]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider />
                <p>Начальное число : {value}</p>
                <p>Результат вычислений : {computedResult}</p>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue((prevState) => prevState + 1000)}
                >
                    Увеличить
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue((prevState) => prevState - 1000)}
                >
                    Уменьшить
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={`btn btn-${btnColor} mx-2`}
                    onClick={() => setColorBtn(!colorBtn)}
                >
                    Сменить цвет
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;

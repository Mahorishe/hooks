import React from "react";
import CardWrapper from "../../common/Card";
import TextFiled from "../../common/form/textField";
import SmallTitle from "../../common/typografy/smallTitle";
const CloneElementExample = () => {
    const email = <TextFiled name="email" label="Email" />;
    const handleChange = ({ target }) => {
        console.log("Cloned", target);
    };
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {email}
            {React.cloneElement(email, {
                label: "Cloned Email",
                onChange: handleChange
            })}
        </CardWrapper>
    );
};

export default CloneElementExample;

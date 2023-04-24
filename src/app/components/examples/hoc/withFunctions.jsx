import React, { useState } from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("auth") !== null);
    const onLogin = () => {
        localStorage.setItem("auth", "token");
        setIsAuth(true);
    };
    const OnLogout = () => {
        localStorage.removeItem("auth");
        setIsAuth(false);
    };

    return () => (
        <CardWrapper>
            <Component onLogin={onLogin} onLogout={OnLogout} isAuth={isAuth} />
        </CardWrapper>
    );
};

export default withFunctions;

import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import Divider from "../../common/divider";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const LogoutButton = React.memo(({ onLogout }) => {
    useEffect(() => {
        console.log("rerender children");
    });
    return (
        <button className="btn btn-primary" onClick={onLogout}>
            Logout
        </button>
    );
});
LogoutButton.propTypes = {
    onLogout: PropTypes.func
};
const MemoWithUseCallbackExample = () => {
    const [state, setState] = useState(false);
    const handleLogout = useCallback(() => {
        console.log("remove");
        localStorage.removeItem("auth");
    }, []);
    return (
        <CardWrapper>
            <SmallTitle className="card-title">React.memo</SmallTitle>
            <Divider />
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                init rerender
            </button>
            <LogoutButton onLogout={handleLogout} />
        </CardWrapper>
    );
};

export default MemoWithUseCallbackExample;

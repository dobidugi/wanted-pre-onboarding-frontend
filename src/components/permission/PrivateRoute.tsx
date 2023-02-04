import React, { useMemo } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    RouteComponent: any;
}

/**
 * 토큰을 가지고 있는 사용자만 접근할 수 있는 컴포넌트
 * 토큰을 가지고 있지않으면 /signin으로 리다이렉트
 * @param props.RouteComponent - 컴포넌트
 * @returns 
 */
function PrivateRoute(props: PrivateRouteProps) {
    const { RouteComponent } = props;
    const isLogin = useMemo(() => localStorage.hasOwnProperty("access_token"), []);
    return (
        <React.Fragment>
            {isLogin ? <RouteComponent /> : <Navigate to={`/signin`} />}
        </React.Fragment>
    );
}

export default PrivateRoute;
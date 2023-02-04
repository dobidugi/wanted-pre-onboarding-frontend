import React, { useMemo } from 'react'
import { Navigate } from 'react-router-dom';

interface GuestRouteProps {
    RouteComponent: any;
}

/**
 * 토큰을 가지고 있지 않는 사용자만 접근할 수 있는 컴포넌트
 * 토큰을 가지고 있으면 /todo로 리다이렉트
 * @param props.RouteComponent - 컴포넌트
 * @returns 
 */
function GuestRoute(props: GuestRouteProps) {
    const { RouteComponent } = props;
    const isLogin = useMemo(() => localStorage.hasOwnProperty("access_token"), []);
    return (
        <React.Fragment>
            {!isLogin ? <RouteComponent /> : <Navigate to={`/todo`} />}
        </React.Fragment>
    );
}

export default GuestRoute
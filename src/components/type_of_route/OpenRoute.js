import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OpenRoute = ({ token, children }) => {
    const navigation = useNavigate();
    useEffect(() => {
        if (token) {
            navigation('/dashboard');
        }
    }, [token, navigation]);

    return !token ? <>{children}</> : null;
};

export default OpenRoute;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
    
const PrivateRoute = ({ token, children }) => {
    const navigation = useNavigate();

    useEffect(() => {
        if (!token) {
            navigation('/divertedlogin');
        }
    }, [token, navigation]);

    return token ? <>{children}</> : null;
};

export default PrivateRoute;

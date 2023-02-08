import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    const history = useNavigate();

    console.log(user);

    useEffect(() => {
        if(!user){ // user is not authenticated
            history("/");
        }
    }, []);

    return children;
};

export default ProtectedRoute;
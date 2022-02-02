import React, { useEffect } from "react";
import AxiosWithAuth from '../utils/AxiosWithAuth';
import { useNavigate } from "react-router-dom";

const Logout = ()=> {
    const navigate = useNavigate();
    useEffect(()=> {
        AxiosWithAuth()
            .get('/logout')
            .then(res=> {
                localStorage.removeItem("token");
                navigate("/");
            });

    }, []);

    return(<div></div>);
}

export default Logout;
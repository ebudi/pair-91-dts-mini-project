import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import useAuth from './hooks/useAuth'

const Private = ({ Item }) => {
    const {signed} = useAuth();
    
    return signed > 0 ? <Item/> : <Login/>;
};

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/Home" element = {<Private Item={Home}/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route exact path="/Register" element = {<Register/>}/>
                <Route path="*" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
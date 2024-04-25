import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../Fonts.css';
import "../index.css";
import CompartmentsLogo from "../assets/compartments-logo.png";

const NavigationBar = () => {
    return (
        <nav className="bg-slate-600 p-0">
            <div className="text-white container mx-0 min-w-max w-screen py-6 font-bold">
                <div className="flex space-x-8">
                    <img src={CompartmentsLogo} className="h-auto w-20 mt-3 pb-2 ml-10"></img>
                    <div className="container flex space-x-8 justify-end">
                        <Link to="">Home</Link>
                        <Link to="/Homepage">Edit</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;
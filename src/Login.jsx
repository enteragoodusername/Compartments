import { useState } from "react";
import './Signup.css';
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import CompartmentsLogo from "./assets/compartments-logo-color.png"

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/Homepage')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="min-h-screen flex justify-end bg-gradient-to-r from-purple-400 to-red-400">
            <img src={CompartmentsLogo} className="w-auto h-20 absolute top-5 left-5"></img>
            <div className="bg-slate-200 m-24 pt-10 pl-10 pr-10 pb-20 max-w-xl">
                <h1 className="font-noto font-bold text-4xl mb-3">Compartments Login</h1>

                <form onSubmit={handleSubmit}>

                    {/* Email Field */}
                    <div className="mb-3 p-4">
                        <label htmlFor="email" className="pr-12">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0 p-1"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-3 p-4">
                        <label htmlFor="password" className="pr-4">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0 p-1"
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>

                    <button type="submit" className="btn bg-purple-400 p-2 px-4 font-extrabold text-xl border rounded-sm text-white">
                        Login
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Login;

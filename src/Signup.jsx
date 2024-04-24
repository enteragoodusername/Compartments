import { useState } from "react";
import './Signup.css';
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import CompartmentsLogo from "./assets/compartments-logo-color.png"


function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/register', {name,email,password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err=> console.log(err))
    }

    return (
        <>
            <div className="min-h-screen flex justify-end bg-gradient-to-r from-purple-400 to-red-400">
                <img src={CompartmentsLogo} className="w-auto h-20 absolute top-5 left-5"></img>
                <div className="bg-slate-200 m-24 pt-10 pl-10 pr-10 pb-20 max-w-xl">
                    <h1 className="font-noto font-bold text-4xl mb-3">Your productivity starts here.</h1>
                    <p className="font-sans mb-4 italic text-slate-600">With Compartments, you're able to focus solely on tasks, and nothing else! We make it extra easy for you to manage your tasks on the web!</p>
                    <form onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="p-2">
                            <label htmlFor="name" className="signup-label pr-11">
                            Name
                            </label>
                            <input
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                name="name"
                                className="form-control rounded-0 italic p-1 rounded-sm"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        {/* Email Field */}
                        <div className="p-2">
                            <label htmlFor="email" className="signup-label pr-12">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder=""
                                autoComplete="off"
                                name="email"
                                className="form-control rounded-1 italic p-1 rounded-sm"
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </div>

                        {/* Password Field */}
                        <div className="p-2 mb-5">
                            <label htmlFor="password" className="signup-label pr-4">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder=""
                                name="password"
                                className="form-control rounded-1 italic p-1"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn bg-purple-400 p-2 px-4 font-extrabold text-xl border rounded-sm text-white">
                            REGISTER
                        </button>
                    </form>
                    <p className="italic text-slate-400 mt-16 mb-6">Already have an Account?</p>
                    <Link to="/login" className="btn bg-purple-400 p-2 px-4 font-extrabold text-xl border rounded-sm text-white">
                        LOGIN
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Signup;

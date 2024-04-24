import { useState } from "react";
import './Signup.css';
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/register', {name,email,password,comparts:[{name:"General", tasks:[]}]})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err=> console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center blue-background">
            <div className="bg-white p-3 rounded w-40 ">
                <h1>Compartments</h1>
                <h2>Register</h2>

                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>

                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>

                <p>Already have an Account</p>

                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-description-none">
                    Login
                </Link>
            </div>
            <div className="min-h-screen flex justify-end">
                <div className="bg-slate-200 m-24 pt-10 pl-10 pr-10 pb-20 max-w-xl">
                    <h1 className="font-noto font-bold text-4xl mb-3">Your productivity starts here.</h1>
                    <p className="font-sans mb-4 italic text-slate-600">With Compartments, you're able to focus solely on tasks, and nothing else! We make it extra easy for you to manage your tasks on the web!</p>
                    <form onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="">
                            <label htmlFor="name" className="signup-label">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                name="name"
                                className="form-control rounded-0 italic"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        {/* Email Field */}
                        <div className="">
                            <label htmlFor="email" className="signup-label">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder=""
                                autoComplete="off"
                                name="email"
                                className="form-control rounded-0 font-noto italic"
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-20">
                            <label htmlFor="password" className="signup-label">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder=""
                                name="password"
                                className="form-control rounded-0 italic"
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </div>

                        <button type="submit" className="btn btn-success button-register w-100 border rounded-0 border-color-blue-500">
                            Register
                        </button>
                    </form>

                    <p className="italic text-slate-400 mt-3">Already have an Account?</p>

                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-description-none">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;

import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import L1 from "../assets/l1.png"
import L2 from "../assets/l2.png"
import CompartmentsLogo from "../assets/compartments-logo.png";

const LandingPage = () => {
    return (
        <div class="bg-gradient-to-r from-purple-400 to-red-400">
            <NavigationBar />
            <div className=" min-h-screen">
                <div className="relative p-20">
                    <div className="absolute inset-0"></div>
                    <div className="relative z-10 bg-white p-8 mx-40 shadow-lg rounded-lg text-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Productivity Starts Here.</h1>
                        <div className="text-gray-600">
                            <p>With Compartments, you'll be organizing your tasks in no time,</p>
                            <p>thanks to our state of the art compartmentalizing system</p>
                            <p>designed to beautifully organize your tasks so that you</p>
                            <p>are able to more effectively utilize your time.</p>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen">
                    <div className="bg-white min-h-screen">
                        <div className="container flex space-x-3 justify-center p-20">
                            <div className="m-20">
                                <img src={L1} className="h-auto w-48 "></img>
                            </div>
                            <div className="m-20">
                                <h2 className="font-bold text-2xl">The compartments system</h2>
                                <hr className="border-black border-2"></hr>
                                <div className="mt-4 text-lg">
                                    <p>Our compartments system keeps your tasks</p>
                                    <p>Well-organized, so that you're able to</p>
                                    <p>Focus only on what matters most:</p>
                                    <p>Your productivity.</p>
                                </div>
                            </div>
                        </div>
                        <div className="container flex space-x-3 justify-center pt-10">
                            <div className="m-20">
                                <img src={L2} className="h-auto w-48 "></img>
                            </div>
                            <div className="mt-10 ml-20 mr-20 mb-20">
                                <h2 className="font-bold text-2xl">The timeline system</h2>
                                <hr className="border-black border-2"></hr>
                                <div className="mt-4 text-lg">
                                    <p>Our timeline system allows you to</p>
                                    <p>Set times and due dates for your tasks</p>
                                    <p>In order to get them complete on time.</p>
                                    <p>Simply select a task and interact with</p>
                                    <p>the timeline to decide on the due date.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-600 min-h-24">
                    <div className="flex justify-center pt-12 pl-8 pb-4">
                        <div className="container flex space-x-3 justify-center text-white">
                            <div>
                            <img src={CompartmentsLogo} className="h-auto w-48 mt-0 ml-10"></img>
                            </div>
                            <span className="text-lg font-bold">
                                |
                            </span>
                            <span className="text-lg font-sans font-bold">
                                Created by: 
                            </span>
                            <span>
                                <ul className="container flex space-x-3">
                                    <li>Patrick Keefe,</li>
                                    <li>Vincent Toledo,</li>
                                    <li>Emilio Avendano</li>
                                </ul>
                            </span>
                        </div>
                    </div>
                    <div className="container flex justify-center text-white pb-5 pt-2 pl-96">
                        Copyright© The Productive Team. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
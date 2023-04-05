import React from "react"
import { Route, Routes } from "react-router-dom"
import {LOGIN} from './LOGIN'

export default function Navbar() {
    return (<>
        <nav>
            <ul>
                <Routes>
                    {/* <Route path="/" element={}/> */}
                    <Route path="/signup" element={LOGIN}/>
                    {/* <Route path="/login" element={}/>
                    <Route path="/logout" element={}/> */}
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/signup">Signup</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
                <li>
                    <a href="/logout">Logout</a>
                </li>
                </Routes>
            </ul>
        </nav>
    </>
    )
}
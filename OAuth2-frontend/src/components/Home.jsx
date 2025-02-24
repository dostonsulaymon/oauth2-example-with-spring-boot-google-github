import React from "react";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";

export const Home = () => {

    const googleLogin = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/google'
    }

    const githubLogin = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/github'

    }

    const centerStyle = {
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh',
    }

    const buttonStyle = {margin: '10px', fontSize: '16px', padding: '10px'}

    return (<div style={centerStyle}>
            <h2>Login with preferred source: </h2>
            <button onClick={googleLogin} style={buttonStyle}><FcGoogle/> Login with Google</button>
            <button onClick={githubLogin} style={buttonStyle}><FaGithub/> Login with Github</button>

        </div>)
}

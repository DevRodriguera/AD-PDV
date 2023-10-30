import React, { useState } from 'react'
import FormLogin from "../../components/FormLogin/FormLogin.jsx"
import "../../styles/Global.css"
import "./styles.css"
import Header from '../../components/Header';


const Login = () => {

    // function loginUser(user) {

    //     user.cost = 0
        
    //     fetch("http://localhost:5000/user", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application:json'
    //         },
    //         body: JSON.stringify(user)
    //     }).then((resp) => resp.json())
    //         .then((data) => {
    //             console.log(data)
    //         }).catch(err => console.log(err))
    // }

    return (
        <div className={'app'}>
            <Header />
            {/* <FormLogin handleSubmit={loginUser}/> */}
            <FormLogin/>
        </div>
    )
}

export default Login
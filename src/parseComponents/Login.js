import React from 'react';
import Parse from 'parse'

function  Login() {

    function login() {
        Parse.User.logIn("example@gmail.com", "123456")
        .then(function (user) {
          console.log("Logged in successfully");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return (
        <div>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;

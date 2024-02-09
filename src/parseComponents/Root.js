import Parse from 'parse';
import React from 'react';
import Login from './Login'
import App from '../App';

function Root() {
	if (Parse.User.current() === null) {
		return (<Login />);
	} else {
        console.log(Parse.User.current());
		return (<App />);
	}
}
export default Root;

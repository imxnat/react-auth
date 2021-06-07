import React, { useState } from 'react';
import './Login.css';
import googleIcon from '../icons/google-brands.svg';
import githubIcon from '../icons/github-brands.svg';
import microsoftIcon from '../icons/microsoft-brands.svg';
import login from '../images/login.svg'
import Register from '../Register/Register'

import { BrowserRouter as Router, Switch,  Route, Link } from "react-router-dom";



const Login =  props => {
	const [form, setValues] = useState({
	  email: '',
	});
  
	const handleInput = event => {
	  setValues({
		...form,
		[event.target.name]: event.target.value
	  })
	}

    
 
    return (
        <Router>
        <section className="container">
            <div className="form-container">
                <form action="" className="signin-form">
                    <img className="login" src={login} alt="company logo" />
                    <div className="input-field">
                        <input type="email" placeholder="Email..." onChange={handleInput} />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password..." onChange={handleInput} />
                    </div>
                        <button className="btn-solid" type="submit"> Log in </button>

                        <div className="login_container--remember-me">
							<label>
								<input type="checkbox" id="cbox1" value="first_checkbox" /> Remember me
							</label>
							<a href="/">Forgot my password</a>
						</div>

                        <p className="social-text">Or Sign in with social plataforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon"> <img src={googleIcon} alt="login-with-google" /> </a>
                                <a href="#" className="social-icon">  <img src={githubIcon} alt="login-with-google" /> </a>
                                <a href="#" className="social-icon">  <img src={microsoftIcon} alt="login-with-google" /> </a>
                            </div>
                </form>
                
                <div className="panel-container">
                    <div className="content">
                        <h3> New here?</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, molestiae! Lorem ipsum dolor, sit amet consectetur adipisicing. </p>
                        <Link to = "/Register" className="btn-transparent" id="signup-btn">Sign Up</Link>      
                    </div>
                </div>
            </div>

            <Switch>
                 <Route exact path="/Register" component={Register} />
             </Switch>

        </section>
        </Router>
    )
}

export default Login;


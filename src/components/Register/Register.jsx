import {React, useState} from 'react';
import './Register.css';
import googleIcon from '../icons/google-brands.svg';
import githubIcon from '../icons/github-brands.svg';
import twitterIcon from '../icons/twitter-brands.svg';
import register from '../images/register.svg'
import Login from '../Login/Login';
import { BrowserRouter as Router, Switch,  Route, Link } from "react-router-dom";


const Register = props => {
    const [form, setValues] = useState({
      name: '',
      email: '',
      password: '',
    });
  
    const handleInput = event => {
      setValues({
        ...form,
        [event.target.name]: event.target.value
      })
    };
 
    return (
        <Router>
        <section className="container">
            <div className="form-container">
                <form action="" className="signup-form">
                    <img className="register" src={register} alt="company logo" />
                  
                    <div className="input-field">
                        <input name="name" type="text" placeholder="Enter your name..." onChange={handleInput} />
                    </div>
                    <div className="input-field">
                        <input name="email" type="email" placeholder="Email..." onChange={handleInput} />
                    </div>
                    <div className="input-field">
                        <input name="password" type="password" placeholder="Password..." onChange={handleInput} />
                    </div>
                        <button className="btn-solid" type="submit"> Sign Up </button>

                        <p className="social-text">Or Sign Up with social plataforms</p>
                            <div className="social-media">
                                <a href="" className="social-icon"> <img src={googleIcon} alt="signup-with-google" /> </a>
                                <a href="" className="social-icon">  <img src={githubIcon} alt="signup-with-github" /> </a>
                                <a href="" className="social-icon">  <img src={twitterIcon} alt="signup-with-twitter" /> </a>
                            </div>
                </form>

                <div className="panel-container">
                    <div className="content">
                        <h3> One of us?</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, molestiae! Lorem ipsum dolor, sit amet consectetur adipisicing. </p>
{/* Link funciona como una etiqueta <a> */}
                        <Link to="/" className="btn-transparent" id="signup-btn">Log in</Link>
                    </div>
                </div>
            </div>
{/* / Cambiar de ruta al presional el boton */}
            <Switch>
                 <Route exact path="/" component={Login} />
             </Switch>

        </section>
        </Router>
    )
}

export default Register;


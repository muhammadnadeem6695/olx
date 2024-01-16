import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../config/firebase";
import olxBlack from '../../assets/OLX-Symbol.png'


function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    async function loginfunction() {
        try {
            await login({ email, password })
            navigate('/')
        } catch (error) {
            alert(error.message)
        }
    }


    return <>
        <div className="authBody">

            <div className="mainAuthBox">


                <div class="wrapper">

                    <div class="inner-warpper text-center">

                        <div class="olxlogo text-center">
                            <img src={olxBlack} />
                        </div>

                        <div id="formvalidate">

                            <div class="input-group">
                                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Registered Email" />
                                <span class="lighting"></span>
                            </div>
                            <div class="input-group">
                                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                <span class="lighting"></span>
                            </div>
                            <button onClick={loginfunction}>Login</button>

                            <div class="clearfix supporter">
                                <div class="pull-left remember-me">
                                    <input id="rememberMe" type="checkbox" />
                                    <label for="rememberMe">Remember Me</label>
                                </div>
                                <a class="forgot pull-right" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <div class="signup-wrapper text-center">
                            <div>Don't have an accout?<span onClick={(e) => navigate('/register')} className="text-primary">Sign up</span>
                            </div>
                        </div>



                        {/* <a href="#"> <span class="text-primary">Create One</span></a> */}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login
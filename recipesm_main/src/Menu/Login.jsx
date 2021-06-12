import React, { useState } from 'react'
import { FaGooglePlusG, FaFacebookSquare } from 'react-icons/fa';

import './login.css'

function Login(props) {
    const [change, setChange] = useState((false));
    const [loginRegister, setloginRegister] = useState('Login')

    const loginForm= (e)=>{
        setloginRegister(e.target.name)
    }
    return (
        <div>
            <div className='outerLogin' onClick={() => { props.changeLogin() }}>        </div>

            <section class='LoginBorder'>
                <div className='radioOuter'><label class='radioLable'>
                    <input type="radio" name="Login" class='radioInput' checked={loginRegister==='Login' ?true:false} onClick={loginForm}/>
                    <div class="front-end radioBox"><span class='radioText'>Login</span></div>
                </label>
                    <label class='radioLable'>
                        <input type="radio" class='radioInput' name="Register" checked={loginRegister==='Register'?true:false}  onClick={loginForm} />
                        <div class="back-end radioBox"><span class='radioText'>Register</span></div>
                    </label>
                    </div>
               {loginRegister==='Login' &&
                <div class='LoginBorderInner'>
                    <div class='inputTogether '>
                        <div>Username/Email:</div><input type='text' placeholder='username' />
                    </div>
                    <div class='inputTogether '>
                        <div>Password:</div><input type='text' placeholder='Password' />
                    </div>
                    <div>
                        <div class='buttonBox'>
                            <input type='button' value='Login' />
                        </div>
                        <a href=''>Forget Password</a>
                    </div>
                    <div class='otherLoginOptions'>
                        or Login with
                        <div class='d-flex justify-content-evenly'>
                            <span><FaGooglePlusG size='30' /> </span>
                            <span><FaFacebookSquare size='30' /></span>
                        </div>
                    </div>
                </div>}
                {loginRegister==='Register' &&
               <div class='LoginBorderInner'>
               <div class='inputTogether '>
                 <div>Username/Email:</div><input type='text' placeholder='username'/></div>
                <div class='inputTogether '>
                  <div>Password:</div><input type='text' placeholder='Password'/></div>
                 <div class='inputTogether '>
                  <div>Repeat-Password:</div><input type='text' placeholder='Re-Password'/></div>
               <div>
                 <div class='buttonBox'><input type='button' value='Register'/></div>
                 </div>
                 </div>
            
                }
            </section>
        </div>
    )
}

export default Login

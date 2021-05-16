import React,{useState} from 'react'
import './login.css'

function Login() {
    const [change, setChange] = useState((false));
    // var showLogin = (e) => {
    //     let parent = e.target.parentNode.parentNode;
    //     console.log('parent',parent);
    //     Array.from(e.target.parentNode.parentNode.classList).find((element) => {
    //         if(element !== "slide-up") {
    //             parent.classList.add('slide-up')
    //         }else{
    //             // showSignup.parentNode.classList.add('slide-up')
    //             parent.classList.remove('slide-up')
    //         }
    //     });
    // }
    // var showSignup  =(e) => {
    //     let parent = e.target.parentNode;
    //     Array.from(e.target.parentNode.classList).find((element) => {
    //         if(element !== "slide-up") {
    //             parent.classList.add('slide-up')
    //         }else{
    //             // showLogin.parentNode.parentNode.classList.add('slide-up')
    //             parent.classList.remove('slide-up')
    //         }
    //     });
    // }
    console.log('change',change);
    return (
        <div>
            <div className='loginFormBox'>
            <div className="form-structor">
                    <div className={"signup" +( change?"slide-up":' ')}>
                        <h2 className="form-title"   onClick={()=>setChange(change=>!change)}><span>or</span>Sign up</h2>
                        <div className="form-holder">
                        <input type="text" className="input" placeholder="Name" />
                        <input type="email" className="input" placeholder="Email" />
                        <input type="password" className="input" placeholder="Password" />
                        </div>
                        <button className="submit-btn"     >Sign up</button>
                    </div>
                    <div className={"login" +(change?" ":"slide-up")}>
                        <div className="center">
                        <h2 className="form-title"   onClick={()=>setChange(change=>!change)} ><span>or</span>Log in</h2>
                        <div className="form-holder">
                            <input type="email" className="input" placeholder="Email" />
                            <input type="password" className="input" placeholder="Password" />
                        </div>
                        <button className="submit-btn"    >Log in</button>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default Login

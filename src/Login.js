import React from 'react'
import { useRef, useState, useEffect } from 'react'

export default function Login(props) {
    const emailRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmail('');
        setPwd('');
        console.log(email, pwd);
        setSuccess(true);
    }

    
  return (
    <>
        {success ? (
            <section>
                <h3>You are logged in!</h3>
                <br />
                
            </section>
        ) : (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <label htmlFor="password">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    autoComplete="off"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>
                Login
                </button>
            </form>
            <button 
                className="link-btn" 
                onClick={() => props.onFormSwitch('register')}
            >
                Don't have an account? Register here.
            </button>
        </section>
    )}
    </>
)
}


import React from 'react'
import { useRef, useState, useEffect } from 'react'

export default function Reset() {
    const emailRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmail('');
        console.log(email);
        setSuccess(true);
    }

return (
    <>
        {success ? (
            <section>
                <h3>You are successfully reset your password!</h3> 
            </section>
        ) : (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Reset Password</h1>
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
                
                <button>
                Reset Password
                </button>
            </form>
        </section>
    )}
    </>
)
}

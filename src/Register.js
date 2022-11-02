import React from 'react'
import { useRef, useState, useEffect } from 'react'
//import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//const FNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
//const EMAIL_Regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Register() {
    /*
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);


    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])


    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, email, pwd, matchPwd])

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);*/
  return (
    <section>
        <h1>Sign up</h1>
        <form>
            <label htmlFor="username">
                Full Name:
            </label>
            <input
                type="text"
                id="fullname"
                //ref={userRef}
                autoComplete="off"
                //onChange={(e) => setUser(e.target.value)}
                // value={user}
                required
                //aria-invalid={validName ? "false" : "true"}
                // aria-describedby="uidnote"
                // onFocus={() => setUserFocus(true)}
                //onBlur={() => setUserFocus(false)}
                        />

            <label htmlFor="username">
                            Email:
            </label>
            <input
                type="email"
                id="email"
                //ref={userRef}
                autoComplete="off"
                //onChange={(e) => setEmail(e.target.value)}
                // value={email}
                required
                //aria-invalid={validEmail ? "false" : "true"}
                // aria-describedby="emailnote"
                // onFocus={() => setEmailFocus(true)}
                //onBlur={() => setEmailFocus(false)}
                        />

<label htmlFor="password">
                Password:
            </label>
            <input
                type="password"
                id="password"
                autoComplete="off"
                //onChange={(e) => setPwd(e.target.value)}
                // value={pwd}
                required
                //aria-invalid={validPwd ? "false" : "true"}
                // aria-describedby="pwdnote"
                // onFocus={() => setPwdFocus(true)}
                //onBlur={() => setPwdFocus(false)}
                        />

<label htmlFor="confirm_pwd">
                Confirm Password:
            </label>
            <input
                type="password"
                id="confirm_pwd"
                autoComplete="off"
                //onChange={(e) => setMatchPwd(e.target.value)}
                // value={matchPwd}
                required
                //aria-invalid={validMatch ? "false" : "true"}
                // aria-describedby="confirmnote"
                // onFocus={() => setMatchFocus(true)}
                //onBlur={() => setMatchFocus(false)}
                        />
            <button 
                //disabled={!validName || !validPwd || !validMatch ? true : false}
            >
            Sign Up
            </button>
        </form>
    </section>
  )
}

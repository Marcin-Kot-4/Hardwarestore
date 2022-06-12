import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {Calendar} from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import AuthService from "../../services/auth.service";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};
const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};
const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};
const Register = () => {
    const [date, setDate] = useState(null);
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleRegister = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(username, email, password).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }
    };

    return (
        <div className="flex justify-center mt-16">
            <div className="w-3/12 flex">
                <div className="flex-1 w-3/12 text-left mr-8">
                    <h1 className="font-bold text-2xl">Jestem tu pierwszy raz</h1>
                    <Link to="/login">
                        <button
                            className="flex relative mt-12 w-full hover:bg-black hover:text-white border-2 border-black px-6 py-2 font-normal">
                            <div className="absolute flex h-6 pl-12 items-center text-primary">
                                <img className="h-6"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"
                                     alt=""/>
                            </div>
                            <h2 className="inline w-full">Google</h2>
                        </button>
                    </Link>
                    <Form onSubmit={handleRegister} ref={form}>
                        {!successful && (
                            <div>
                                <h2 className="mt-8 font-light mb-1 text-center">lub wypełnij:</h2>
                                <h2 className="mt-8 font-light mb-1">Nazwa użytkownika</h2>
                                <input className="w-full h-11 border-2 pl-2"
                                       type="text"
                                       name="username"
                                       value={username}
                                       onChange={onChangeUsername}
                                       validations={[required, vusername]}
                                />
                                <h2 className="font-light mt-4 mb-1">Hasło</h2>
                                <input className="w-full h-11 border-2 pl-2"
                                       type="password"
                                       name="password"
                                       value={password}
                                       onChange={onChangePassword}
                                       validations={[required, vpassword]}
                                />
                                <h2 className="mt-4 font-light mb-1">Adres e-mail</h2>
                                <input className="w-full h-11 border-2 pl-2"
                                       type="text"
                                       name="email"
                                       value={email}
                                       onChange={onChangeEmail}
                                       validations={[required, validEmail]}
                                />
                                {/* Calendar */}
                                {/*<div style={{display: 'flex', flexFlow: 'column nowrap'}}>*/}
                                {/*    <Calendar onChange={item => setDate(item)}*/}
                                {/*              locale={locales['pl']} date={date}/>*/}
                                {/*</div>*/}
                                {/*/!* Calendar *!/*/}
                                {/*<div className="mt-4 flex">*/}
                                {/*    <input className="accent-primary box-border h-6 w-6 inline" type="checkbox"/>*/}
                                {/*    <h2 className="font-light ml-2 inline">znam i akceptuję regulamin serwisu*/}
                                {/*        hardwarestore.com*/}
                                {/*    </h2>*/}
                                {/*</div>*/}
                                <button
                                    className="mt-8 mb-20 w-full bg-black hover:bg-white hover:text-black text-white border-2 border-transparent hover:border-black px-6 py-2 font-normal">ZAREJESTRUJ
                                    SIĘ
                                </button>
                            </div>
                        )}
                        {message && (
                            <div className="form-group text-center h-12 bg-m_gray my-8">
                                <div
                                    className={successful ? "pt-3 text-green-600" : "pt-3 text-red-600"}
                                    role="alert"
                                >
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton style={{display: "none"}} ref={checkBtn}/>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;

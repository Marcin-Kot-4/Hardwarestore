import React, {useState, useRef, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Form from 'react-validation/build/form';
import CheckButton from 'react-validation/build/button';
import AuthService from "../../services/auth.service";
import jwt_decode from "jwt-decode";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const Login = () => {
    let navigate = useNavigate();
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleLogin = (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(username, password).then(
                () => {
                    navigate("/mojekonto");
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }
    };

    const [user, setUser] = useState({});

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        let userObject = jwt_decode(response.credential);
        setUser(userObject);
        // login/register google secret:0rXjNJ0wm31u4zCNGqQnJlchgfbL17Uc
        AuthService.google(userObject.email, userObject.given_name, '0rXjNJ0wm31u4zCNGqQnJlchgfbL17Uc',  userObject.family_name).then(
            () => {
                navigate("/mojekonto");
                window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                setLoading(false);
                setMessage(resMessage);
            }
        );
    }

    function handleSignOut(event) {
        setUser({});
        localStorage.removeItem("user");
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "5911628702-kb9sd18tvhv0oisuklscs4efjhka7qra.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large"}
        )

        google.accounts.id.prompt();
    }, );


    return (
        <div className="flex justify-center mt-16">
            <div className="w-6/12 flex">
                <div className="flex-1 w-3/12 text-left mr-8">
                    <h1 className="font-bold text-2xl">Witaj ponownie</h1>
                    <Form onSubmit={handleLogin} ref={form}>
                        <h2 className="mt-8 font-light mb-1">Nazwa użytkownika</h2>
                        <input className="w-full h-11 border-2 pl-2"
                               type="text"
                               name="username"
                               value={username}
                               onChange={onChangeUsername}
                               validations={[required]}/>
                        <h2 className="font-light mt-4 mb-1">Hasło</h2>
                        <input className="w-full h-11 border-2 pl-2"
                               type="password"
                               name="password"
                               value={password}
                               onChange={onChangePassword}
                               validations={[required]}/>
                        <div className="mt-4 flex">
                            <input className="accent-primary box-border h-6 w-6 inline" type="checkbox"/>
                            <h2 className="font-light ml-2 inline">zapamiętaj mnie</h2>
                        </div>
                        <button
                            className="mt-12 w-full bg-black hover:bg-white hover:text-black text-white border-2 border-transparent hover:border-black px-6 py-2 font-normal"
                            disabled={loading}>{loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                            ZALOGUJ SIĘ
                        </button>
                        {message && (
                            <div className="form-group bg-m_gray text-center h-12">
                                <div className="text-red-600 pt-3" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{display: "none"}}
                            ref={checkBtn}
                        />
                    </Form>
                    {/*<Link to="/login">*/}
                    {/*    <button*/}
                    {/*        className="flex relative mt-12 w-full hover:bg-black hover:text-white border-2 border-black px-6 py-2 font-normal">*/}
                    {/*        <div className="absolute flex h-6 pl-12 items-center text-primary">*/}
                    {/*            <img className="h-6"*/}
                    {/*                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"*/}
                    {/*                 alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <h2 className="inline w-full">Google</h2>*/}
                    {/*    </button>*/}
                    {/*</Link>*/}

                    {/*Google login*/}
                    {/*{*/}
                    {/*    Object.keys(user).length === 0 &&*/}
                    {/*    <div id="signInDiv" className="mt-12 mx-auto table"></div>*/}
                    {/*}*/}

                    {
                        Object.keys(user).length !== 0 &&
                        <div className="mx-auto font-[Roboto] table mt-12 text-center">
                            <h1 className="mb-2 font-light">Zalogowano jako:</h1>
                            <img src={user.picture} alt="" className="w-12 inline-block"/>
                            <h3 className="ml-4 inline-block">{user.name}</h3>
                            <button className="mt-4 w-full bg-black hover:bg-white hover:text-black text-white border-2 border-transparent hover:border-black px-6 py-2 font-normal"
                                    onClick={(e) => handleSignOut(e)}>Wyloguj się</button>
                        </div>
                    }



                    <h2 className="font-light text-center mt-12">Nie pamiętasz hasła?</h2>
                </div>
                <div className="flex-1 w-3/12 text-left ml-8">
                    <h1 className="font-bold text-2xl text-left mb-1">Jestem tu pierwszy raz</h1>
                    <Link to="/rejestracja">
                        <button
                            className="mt-14 w-full hover:bg-black hover:text-white border-2 border-black px-6 py-2 font-normal">ZAREJESTRUJ
                            SIĘ
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;

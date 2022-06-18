import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import AuthService from "../../services/auth.service";
import TextField from '@mui/material/TextField';

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
const vname = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                Enter your name.
            </div>
        );
    }
};
const vlastname = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                Enter your lastname.
            </div>
        );
    }
};
//const vbirthdate = (value) => {
//    if (value.length < 3 || value.length > 20) {
//        return (
//           <div className="alert alert-danger" role="alert">
//               Enter your lastname.
//           </div>
//       );
//    }
//};
const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};
const vstreet = (value) => {
    if (value.length < 3 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The street must be enter.
            </div>
        );
    }
};
const vhouseNumber = (value) => {
    if (value.length < 1 || value.length > 8) {
        return (
            <div className="alert alert-danger" role="alert">
                The house/apartment number must be enter.
            </div>
        );
    }
};
const vzipCode = (value) => {
    if (value.length === 6) {
        return (
            <div className="alert alert-danger" role="alert">
                The zip code must be enter.
            </div>
        );
    }
};
const vcity = (value) => {
    if (value.length < 2 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The city must be enter.
            </div>
        );
    }
};

const Register = () => {
    //const [date, setDate] = useState(null);
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [street, setStreet] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };
    const onChangeLastname = (e) => {
        const lastname = e.target.value;
        setLastname(lastname);
    };
    const onChangeBirthdate = (e) => {
        const birthdate = e.target.value;
        setBirthdate(birthdate);
    };
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const onChangeStreet = (e) => {
        const street = e.target.value;
        setStreet(street);
    };
    const onChangeHouseNumber = (e) => {
        const houseNumber = e.target.value;
        setHouseNumber(houseNumber);
    };
    const onChangeZipCode = (e) => {
        const zipCode = e.target.value;
        setZipCode(zipCode);
    };
    const onChangeCity = (e) => {
        const city = e.target.value;
        setCity(city);
    };
    const handleRegister = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(username, name, lastname, email, password, street, city).then(
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

    //Do regulaminu
    const ref = useRef(null);

    const handleClick = () => {
        if (ref.current.checked) {
            console.log('Checkbox is checked');
        } else {
            console.log('Checkbox is NOT checked');
            return (
                <div className="alert alert-danger" role="alert">
                    Checkbox is NOT checked.
                </div>
            )
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
                                <h1 className="mt-8 font-bold text-xl">Dane osobiste</h1>

                                <div className="flex-row columns-2 mt-4">
                                    <h2 className="font-light mb-1">Nazwa użytkownika</h2>
                                    <input className="w-10/12 h-10 border-2 pl-2"
                                           type="text"
                                           name="username"
                                           value={username}
                                           onChange={onChangeUsername}
                                           validations={[required, vusername]}
                                    />
                                    <h2 className="mt-4 font-light mb-1">Imię</h2>
                                    <input className="w-10/12 h-10 border-2 pl-2"
                                           type="text"
                                           name="name"
                                           value={name}
                                           onChange={onChangeName}
                                           validations={[required, vname]}
                                    />
                                    <h2 className="mt-4 font-light mb-1">Data urodzenia</h2>
                                    <TextField
                                        className="w-10/12 border-2 pl-2 h-auto"
                                        type="date"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        size="small"
                                        name="birthdate"
                                        value={birthdate}
                                        onChange={onChangeBirthdate}
                                        defaultValue="0000-00-00"
                                        //validations={[required, vbirthdate]}
                                    />
                                    <h2 className="font-light mb-1">Hasło</h2>
                                    <input className="w-10/12 h-10 border-2 pl-2"
                                           type="password"
                                           name="password"
                                           value={password}
                                           onChange={onChangePassword}
                                           validations={[required, vpassword]}
                                    />
                                    <h2 className="font-light mb-1 mt-4">Nazwisko</h2>
                                    <input className="w-10/12 h-10 border-2 pl-2"
                                           type="text"
                                           name="lastname"
                                           value={lastname}
                                           onChange={onChangeLastname}
                                           validations={[required, vlastname]}
                                    />
                                    <h2 className="mt-4 font-light mb-1">Adres e-mail</h2>
                                    <input className="w-10/12 h-10 border-2 pl-2"
                                           type="text"
                                           name="email"
                                           value={email}
                                           onChange={onChangeEmail}
                                           validations={[required, validEmail]}
                                    />
                                </div>

                                <h1 className="mt-8 font-bold text-xl">Adres</h1>

                                <div className="flex-row columns-2 mt-4">
                                    <h2 className="font-light mb-1">Ulica</h2>
                                    <input className="w-10/12 h-10 border-2 pl-2"
                                           type="text"
                                           name="street"
                                           value={street}
                                           onChange={onChangeStreet}
                                           validations={[required, vstreet]}
                                    />
                                    <h2 className="mt-4 font-light mb-1">Kod pocztowy</h2>
                                    <input className="w-1/2 h-10 border-2 pl-2"
                                           type="text"
                                           name="zipCode"
                                           value={zipCode}
                                           onChange={onChangeZipCode}
                                           validations={[required, vzipCode]}
                                    />
                                    <h2 className="font-light mb-1">Nr domu/mieszkania</h2>
                                    <input className="w-1/2 h-10 border-2 pl-2"
                                           type="text"
                                           name="houseNumber"
                                           value={houseNumber}
                                           onChange={onChangeHouseNumber}
                                           validations={[required, vhouseNumber]}
                                    />
                                    <h2 className="mt-4 font-light mb-1">Miejscowość</h2>
                                    <input className="w-10/12 h-10 border-2 pl-2"
                                           type="text"
                                           name="city"
                                           value={city}
                                           onChange={onChangeCity}
                                           validations={[required, vcity]}
                                    />
                                </div>

                                <div className="mt-8 flex">
                                    <input className="accent-primary box-border h-6 w-6 inline"
                                           ref={ref} type="checkbox" id="subscribe" name="subscribe"/>
                                    <h2 className="font-light ml-2 inline">
                                        znam i akceptuję regulamin serwisu hardwarestore.com
                                    </h2>
                                </div>

                                <button
                                    className="mt-8 mb-20 w-full bg-black hover:bg-white hover:text-black text-white border-2 border-transparent hover:border-black px-6 py-2 font-normal"
                                    onClick={handleClick}>
                                    ZAREJESTRUJ SIĘ
                                </button>
                            </div>
                        )}
                        {message && (
                            <div className="form-group text-center h-12 bg-m_gray my-8">
                                <div
                                    className={successful ? "pt-3 text-green-600" : "pt-3 text-red-600"}
                                    role="alert"
                                >{message}
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

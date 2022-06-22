import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Form from "react-validation/build/form";
import TextField from '@mui/material/TextField';

const Register = () => {
    const initialValues = {username: "", name: "", lastname: "", birthdate: "", email: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);

    const initialAddressValues = {street: "", houseNumber: "", zipCode: "", city: ""};
    const [formAddressValues, setFormAddressValues] = useState(initialAddressValues);

    const [formErrors, setFormErrors] = useState({});
    const [formAddressErrors, setFormAddressErrors] = useState({});

    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        setFormAddressValues({...formAddressValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setFormAddressErrors(validate(formAddressValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        console.log(formAddressErrors);
        if (Object.keys(formErrors).length === 0 && Object.keys(formAddressErrors).length === 0 && isSubmit) {
            console.log(formValues);
            console.log(formAddressValues);
        }
    }, [formErrors, formAddressErrors]);
    const validate = (values) => {
        const errors = {};
        const regexCode = /^[0-9]{2}(?:-[0-9]{3})?$/i;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Nazwa użytkownika jest wymagana!";
        } else if (values.username.length < 3) {
            errors.username = "Nazwa użytkownika musi mieć min. 3 znaki.";
        }
        if (!values.name) {
            errors.name = "Imię jest wymagane!";
        } else if (values.name.length < 3) {
            errors.name = "Imię musi mieć min. 3 znaki.";
        }
        if (!values.lastname) {
            errors.lastname = "Nazwisko jest wymagane!";
        } else if (values.lastname.length < 3) {
            errors.lastname = "Nazwisko musi mieć min. 3 znaki.";
        }
        if (!values.birthdate) {
            errors.birthdate = "Data urodzenia jest wymagana!";
        }
        if (!values.email) {
            errors.email = "Email jest wymagany!";
        } else if (!regex.test(values.email)) {
            errors.email = "Zły format adresu e-mail!";
        }
        if (!values.password) {
            errors.password = "Hasło jest wymagane!";
        } else if (values.password.length < 6) {
            errors.password = "Hasło musi mieć min. 6 znaków.";
        } else if (values.password.length > 20) {
            errors.password = "Hasło nie może być dłuższe niż 20 znaków.";
        }
        if (!values.street) {
            errors.street = "Ulica jest wymagana!";
        }
        if (!values.houseNumber) {
            errors.houseNumber = "Numer domu/mieszkania jest wymagany!";
        }
        if (!values.city) {
            errors.city = "Miasto jest wymagane!";
        }
        if (!values.zipCode) {
            errors.zipCode = "Kod pocztowy jest wymagany!";
        } else if (!regexCode.test(values.zipCode)) {
            errors.zipCode = "Zły format kodu pocztowego!";
        }
        return errors;
    };

    return (
        <div className="flex justify-center mt-16">
            <div className="w-1/2 flex">
                <div className="flex-1 w-1/2 text-left">
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

                    <div>
                        <h2 className="mt-8 font-light mb-1 text-center">lub wypełnij:</h2>
                        <h1 className="mt-8 font-bold text-lg">Dane osobowe</h1>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        <div className="grid grid-container grid-cols-2 gap-2 mt-4">

                            <div className="col-span-1">
                                <h2 className="font-light mb-1">Nazwa użytkownika</h2>
                                <input className="w-full h-10 border-2 pl-2"
                                       type="text"
                                       name="username"
                                       placeholder="XYZ"
                                       value={formValues.username}
                                       onChange={handleChange}
                                />
                                <p className="font-medium text-red-600 text-sm">{formErrors.username}</p>

                                <h2 className="mt-4 font-light mb-1">Imię</h2>
                                <input className="w-full h-10 border-2 pl-2"
                                       type="text"
                                       name="name"
                                       placeholder="Jan"
                                       value={formValues.name}
                                       onChange={handleChange}
                                />
                                <p className="font-medium text-red-600 text-sm">{formErrors.name}</p>

                                <h2 className="mt-4 font-light mb-1">Data urodzenia</h2>
                                <TextField
                                    className="w-full border-2 pl-2 h-auto"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    size="small"
                                    name="birthdate"
                                    value={formValues.birthdate}
                                    onChange={handleChange}
                                    defaultValue="0000-00-00"
                                />
                                <p className="font-medium text-red-600 text-sm">{formErrors.birthdate}</p>
                            </div>
                            <div className="col-span-1">
                                <h2 className="font-light mb-1">Hasło</h2>
                                <input className="w-full h-10 border-2 pl-2"
                                       type="password"
                                       name="password"
                                       placeholder="******"
                                       value={formValues.password}
                                       onChange={handleChange}

                                /> <p className="font-medium text-red-600 text-sm">{formErrors.password}</p>

                                <h2 className="font-light mb-1 mt-4">Nazwisko</h2>
                                <input className="w-full h-10 border-2 pl-2"
                                       type="text"
                                       name="lastname"
                                       placeholder="Kowalski"
                                       value={formValues.lastname}
                                       onChange={handleChange}

                                />
                                <p className="font-medium text-red-600 text-sm">{formErrors.lastname}</p>

                                <h2 className="mt-4 font-light mb-1">Adres e-mail</h2>
                                <input className="w-full h-10 border-2 pl-2"
                                       type="text"
                                       name="email"
                                       placeholder="mail@example.pl"
                                       value={formValues.email}
                                       onChange={handleChange}

                                />
                                <p className="font-medium text-red-600 text-sm">{formErrors.email}</p>
                            </div>

                            <div className="col-span-2">
                                <h1 className="mt-8 font-bold text-lg">Adres zamieszkania</h1>
                            </div>

                            <div className="col-span-1">
                                <h2 className="font-light mb-1">Ulica</h2>
                                <input className="w-full h-10 border-2 pl-2"
                                       type="text"
                                       name="street"
                                       value={formAddressValues.street}
                                       onChange={handleChange}
                                />
                                <p className="font-medium text-red-600 text-sm">{formAddressErrors.street}</p>

                                <h2 className="mt-4 font-light mb-1">Kod pocztowy</h2>
                                <input className="w-1/2 h-10 border-2 pl-2"
                                       type="text"
                                       name="zipCode"
                                       value={formAddressValues.zipCode}
                                       onChange={handleChange}
                                />
                                <p className="font-medium text-red-600 text-sm">{formAddressErrors.zipCode}</p>
                            </div>

                            <div className="col-span-1">
                                <h2 className="font-light mb-1">Nr domu/mieszkania</h2>
                                <input className="w-1/2 h-10 border-2 pl-2"
                                       type="text"
                                       name="houseNumber"
                                       value={formAddressValues.houseNumber}
                                       onChange={handleChange}
                                />
                                <p className="font-medium text-red-600 text-sm">{formAddressErrors.houseNumber}</p>

                                <h2 className="mt-4 font-light mb-1">Miejscowość</h2>
                                <input className="w-full h-10 border-2 pl-2"
                                       type="text"
                                       name="city"
                                       value={formAddressValues.city}
                                       onChange={handleChange}
                                />
                                <p className="font-medium text-red-600 text-sm">{formAddressErrors.city}</p>
                            </div>
                        </div>
                        <div className="mt-8 flex">
                            <input className="accent-primary box-border h-6 w-6 inline"
                                   type="checkbox"
                                   required="required"
                            />
                            <h2 className="font-light ml-2">
                                znam i akceptuję regulamin serwisu hardwarestore.com
                            </h2>
                        </div>

                        <div className="flex justify-center">
                            <button
                                className="mt-8 mb-20 w-full bg-black hover:bg-white hover:text-black text-white border-2 border-transparent hover:border-black px-6 py-2 font-normal">
                                ZAREJESTRUJ SIĘ
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;

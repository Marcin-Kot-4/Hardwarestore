import React from 'react';
import {Link} from "react-router-dom";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {Calendar} from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import {useState} from 'react';

const Register = () => {

    // const [locale, setLocale] = React.useState('pl');
    const [date, setDate] = useState(null);

    console.log(date);

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
                    <h2 className="mt-8 font-light mb-1 text-center">lub wypełnij:</h2>
                    <h2 className="mt-8 font-light mb-1">Nazwa użytkownika</h2>
                    <input className="w-full h-11 border-2 pl-2" type="text"/>
                    <h2 className="font-light mt-4 mb-1">Hasło</h2>
                    <input className="w-full h-11 border-2 pl-2" type="password"/>
                    <h2 className="mt-4 font-light mb-1">Adres e-mail</h2>
                    <input className="w-full h-11 border-2 pl-2" type="text"/>
                    <h2 className="mt-4 font-light mb-1">Twoje urodziny</h2>
                    {/* Calendar */}
                    <div style={{display: 'flex', flexFlow: 'column nowrap'}}>
                        <Calendar onChange={item => setDate(item)}
                                  locale={locales['pl']} date={date}/>
                    </div>
                    {/* Calendar */}
                    <div className="mt-4 flex">
                        <input className="accent-primary box-border h-6 w-6 inline" type="checkbox"/>
                        <h2 className="font-light ml-2 inline">znam i akceptuję regulamin serwisu hardwarestore.com</h2>
                    </div>
                    <button
                        className="mt-8 mb-20 w-full bg-black hover:bg-white hover:text-black text-white border-2 border-transparent hover:border-black px-6 py-2 font-normal">ZAREJESTRUJ
                        SIĘ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;

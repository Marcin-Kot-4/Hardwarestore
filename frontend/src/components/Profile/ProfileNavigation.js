import React from 'react';
import {Link} from "react-router-dom";
import AuthService from "../../services/auth.service";

const ProfileNavigation = (props) => {
    const boldStyle = "font-light text-black hover:text-primary duration-300 text-sm cursor-pointer mb-1 font-semibold";
    const normalStyle = "font-light text-black hover:text-primary duration-300 text-sm cursor-pointer mb-1";

    const currentUser = AuthService.getCurrentUser();

    const logOut = () => {
        AuthService.logout();
    };

    return (
        <div>
            <h1 className="text-xl font-light">Witaj,</h1>
            {
                currentUser.roles.includes('ROLE_ADMIN') ?
                    <>
                        <h1 className="text-xl font-medium mb-4">{currentUser.name} (administrator)</h1>
                        <Link to="/mojekonto/listauzytkownikow">
                            <h1 className={props.styleBold === 'usersList' ? boldStyle : normalStyle }>Lista
                                użytkowników
                            </h1>
                        </Link>
                        <Link to="/mojekonto/produkty">
                            <h1 className={props.styleBold === 'allProducts' ? boldStyle : normalStyle }>Produkty
                            </h1>
                        </Link>
                        <Link to="/mojekonto/dodajprodukt">
                            <h1 className={props.styleBold === 'addProduct' ? boldStyle : normalStyle }>Dodaj produkt</h1>
                        </Link>
                    </>
                    :
                    <h1 className="text-xl font-medium mb-4">{currentUser.name}</h1>
            }
            <Link to="/mojekonto/zamowienia">
                <h1 className={props.styleBold === 'orders' ? boldStyle : normalStyle }>Zamówienia</h1>
            </Link>
            <Link to="/mojekonto/opinie">
                <h1 className={props.styleBold === 'reviews' ? boldStyle : normalStyle }>Opinie</h1>
            </Link>
            <Link to="/mojekonto/ustawieniakonta">
                <h1 className={props.styleBold === 'accountSettings' ? boldStyle : normalStyle }>Ustawienia konta</h1>
            </Link>
            <a href="/login" onClick={logOut}>
                <h1 className="font-light text-black hover:text-primary duration-300 text-sm cursor-pointer mb-1">Wyloguj</h1>
            </a>
        </div>
    );
};

export default ProfileNavigation;

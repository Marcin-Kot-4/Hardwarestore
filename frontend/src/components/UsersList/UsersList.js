import React from 'react';
import {Link} from "react-router-dom";
import More from "../More";
import ProfileNavigation from "../Profile/ProfileNavigation";

const UsersList = (props) => {
    const users = [
        {
            name: 'Adam',
            lastName: 'Kowalski',
            mail: 'adam-kow@network.com',
            options: ['Zablokuj', 'Usuń'],
        },
        {
            name: 'Aleksandra',
            lastName: 'Nowak',
            mail: 'ola_nowak@example.pl',
            options: ['Zablokuj', 'Usuń'],
        },
        {
            name: 'Jan',
            lastName: 'Walczyk',
            mail: 'jan.walczyk@mail.com',
            options: ['Zablokuj', 'Usuń'],
        },
        {
            name: 'Dagmara',
            lastName: 'Czerwiec',
            mail: 'dagmaraC@wp.pl',
            options: ['Zablokuj', 'Usuń'],
        },
        {
            name: 'Małgorzata',
            lastName: 'Radziwił',
            mail: 'm.radziwil@gmail.com',
            options: ['Zablokuj', 'Usuń'],
        }
    ]
    return (
        <div className="flex justify-center font-[Roboto] my-16">
            <div className="w-9/12">
                <div className="w-2/12 float-left mr-6">
                    <ProfileNavigation styleBold={props.styleBold}/>
                </div>
                <div className="w-3/5 float-left border-l-2 pl-12 border-gray-100">
                    <h1 className="text-2xl font-bold inline">Lista użytkowników</h1>
                    <div className="mt-6 gap-2 grid grid-cols-3" >
                        {
                            users.map((c) => (
                                    <div className="h-36 border-2 border-gray-100 mb-3">
                                        <More options={c.options}/>
                                        <div className="text-center pt-20">
                                            <h1 className="font-base text-base">{c.name} {c.lastName}</h1>
                                            <h1 className="font-light text-sm">{c.mail}</h1>
                                        </div>
                                    </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersList;

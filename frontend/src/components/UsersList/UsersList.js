import React, {useEffect, useState} from 'react';
import More from "../More";
import ProfileNavigation from "../Profile/ProfileNavigation";
import {Pagination} from "@mui/material";
import SearchBar from "../Header/SearchBar";

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
    let [page, setPage] = useState(1);
    const LIMIT_FOR_PAGE = 12;

    const [noOfPages, setNoOfPages] = React.useState(
        Math.ceil(users.length / LIMIT_FOR_PAGE)
    );

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        setNoOfPages(Math.ceil(users.length / LIMIT_FOR_PAGE));
        //setPage(1);
    },[users])

    return (
        <div className="flex justify-center font-[Roboto] my-16">
            <div className="w-9/12">
                <div className="w-2/12 float-left mr-6">
                    <ProfileNavigation styleBold={props.styleBold}/>
                </div>
                <div className="grid grid-container grid-cols-3 gap-2 w-3/5 float-left border-l-2 pl-12 border-gray-100">
                    <h1 className="col-span-3 text-2xl font-bold inline">Lista użytkowników</h1>
                    <div className="col-span-3 w-1/3">
                        <SearchBar/>
                    </div>
                        {
                            users.slice((page - 1) * LIMIT_FOR_PAGE, page * LIMIT_FOR_PAGE).map((c) => (
                                <div className="col-span-1 row-span-1 text-center h-36 w-full border-2 border-gray-100 mb-3 text-center">
                                    <More options={c.options}/>
                                    <div className="w-full text-center pt-20">
                                        <h1 className="font-base text-base">{c.name} {c.lastName}</h1>
                                        <h1 className="font-light text-sm">{c.mail}</h1>
                                    </div>
                                </div>
                            ))
                        }
                        <div className=" col-span-3">
                            <Pagination count={noOfPages} page={page} onChange={handleChange}
                                        disabled={noOfPages === 0 || noOfPages === 1 }
                                        defaultPage={1} siblingCount={1}
                                        variant="outlined" shape="rounded" className="float-right"/>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default UsersList;

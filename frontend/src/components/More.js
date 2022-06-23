import * as React from 'react';
import {useState} from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

const More = (props) => {
    const [icon, setIcon] = useState('ellipsis-vertical-outline');
    const [classToggle, setClassToggle] = useState('active');
    function dropDown() {
        if (props.options.length === 1) {
            return (
                <span className={classToggle}>
                    <h1 className="text-sm border-2 border-m_gray p-2">{props.options[0]}</h1>
                </span>
            );
        }
        if (props.options.length === 2) {
            return (
                <span className={classToggle}>
                    <h1 className="text-sm border-2 border-m_gray p-2">{props.options[0]}</h1>
                    <h1 className="text-sm border-x-2 border-b-2 border-m_gray p-2">{props.options[1]}</h1>
                </span>
            );
        }
        if (props.options.length === 3) {
            return (
                <span className={classToggle}>
                    <h1 className="text-sm border-2 border-m_gray p-2">{props.options[0]}</h1>
                    <h1 className="text-sm border-x-2 border-b-2 border-m_gray p-2">{props.options[1]}</h1>
                     <h1 className="text-sm border-x-2 border-b-2 border-m_gray p-2">{props.options[2]}</h1>
                </span>
            );
        }
    }

    return (
        <PopupState variant="popover">
            {(popupState) => (
                <div>
                    <Button className="float-right mt-1 mr-1 hover:cursor-pointer" {...bindTrigger(popupState)}>
                        <ion-icon size="large" color="dark"  name={icon}></ion-icon>
                    </Button>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        style={{boxShadow: "none"}}
                        elevation={2}
                    >
                        <Typography>{dropDown()}</Typography>
                    </Popover>
                </div>
            )}
        </PopupState>

    );
};

export default More;

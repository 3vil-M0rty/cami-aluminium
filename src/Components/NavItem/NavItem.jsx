import React, {useState} from "react";

function NavItem (props) {
    const [open, setOpen] = useState(false);
    return(
        <li className='nav-item' title={props.title} onClick={props.onClick}>
            <a href={props.path} target={props.target} className='icon-button' onClick={() => setOpen(!open)}>
                {props.icon} 
            </a>
            {open && props.children}
        </li>
    );
}

export default NavItem;
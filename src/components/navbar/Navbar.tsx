import React, { useContext, useEffect, FC } from "react";
import { LinkIcon } from "../UI/link/link-icon/LinkIcon";
import style from './Navbar.module.scss'
import iTasks from '../../source/icons/bx-calendar-star.svg'
import { ILink } from "../../types/types";


export const Navbar: FC = () => {

    // const history = useNavigate()

    const links: ILink[] = [
        { name: 'Trading', icon: iTasks, to: '/', type: 'st', disabled: false },
        { name: 'Archive', icon: iTasks, to: '/archive', type: 'st', disabled: false }
    ]


    // HANDLERS Button
    const loginHandler = async () => {

    }
    const logoutHandler = async () => {

    }



    return (
        <div className={style.container}>
            <div className={style.left}>
                <h2>Xostron</h2>
                {links.map((link, idx) => <LinkIcon
                    key={idx}
                    item={link}
                />
                )}
            </div>

        </div>
    )
}
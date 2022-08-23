import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

type HeaderProps = {

}

export const Header = (props: HeaderProps) => {
    return (
        <div className={s.headerWrapper}>
            <NavLink to={'test'}>Test Page</NavLink>
            <NavLink to={'/'}>Profile Page</NavLink>
            <NavLink to={'login'}>Login Page</NavLink>
            <NavLink to={'registration'}>Registration Page</NavLink>
            <NavLink to={'recovery'}>Password Recovery Page</NavLink>
            <NavLink to={'update'}>Password Update Page</NavLink>
        </div>
    )

}
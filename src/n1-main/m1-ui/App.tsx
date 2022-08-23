import React from 'react';
import logo from '../../logo.svg';
import {Header} from './header/Header';
import {Profile} from './profile/Profile';
import SuperInputText from './common/SuperInputText/SuperInputText';
import SuperButton from './common/SuperButton/SuperButton';
import SuperCheckbox from './common/SuperCheckbox/SuperCheckbox';
import {HashRouter, Route, Router, Routes} from 'react-router-dom';
import {Login} from '../../n2-features/f1-auth/a1-login/Login';
import {Registration} from '../../n2-features/f1-auth/a2-registration/Registration';
import {PasswordRecovery} from '../../n2-features/f1-auth/a3-recovery/PasswordRecovery';
import {NewPassword} from '../../n2-features/f1-auth/a5-newPassword/NewPassword';
import {NotFoundPage} from './common/NotFoundPage';
import {Test} from '../../n2-features/f0-test/Test';
import s from './App.module.css'

function App() {
    return (
        <HashRouter>
            <Header/>
            <div className={s.contentWrapper}>
                <Routes>
                    <Route path="/" element={<Profile/>}/>
                    <Route path="/test" element={<Test/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/recovery" element={<PasswordRecovery/>}/>
                    <Route path="/update" element={<NewPassword/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;

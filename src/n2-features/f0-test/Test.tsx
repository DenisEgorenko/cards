import React, {useEffect} from 'react'
import SuperButton from '../../n1-main/m1-ui/common/SuperButton/SuperButton';
import SuperInputText from '../../n1-main/m1-ui/common/SuperInputText/SuperInputText';
import SuperCheckbox from '../../n1-main/m1-ui/common/SuperCheckbox/SuperCheckbox';
import {useAppDispatch, useAppSelector} from '../../n1-main/m2-bll/store';
import {testAction} from '../../n1-main/m2-bll/appSlice';

type TestProps = {}

export const Test = (props: TestProps) => {


    // const dispatch = useAppDispatch()
    // const value = useAppSelector((state) => state.app.value)
    // useEffect(() => {
    //     dispatch(testAction(3))
    // })
    // console.log(value)


    return (
        <div>
            <div style={{marginBottom: '20px'}}><SuperButton>Button</SuperButton></div>
            <div style={{marginBottom: '20px'}}><SuperInputText placeholder={'some input text'}/></div>
            <div style={{marginBottom: '20px'}}><SuperCheckbox/></div>
        </div>
    )
}
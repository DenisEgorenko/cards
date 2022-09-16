import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

type CounterState = {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export type appActionType = ReturnType<typeof testAction>

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        testAction(state, action: PayloadAction<number>) {
            state.value += action.payload
        },
    },
})

export const {testAction} = slice.actions
export default slice.reducer
import reducer, {testAction} from './appSlice'
import {useAppDispatch, useAppSelector} from './store';

test('Slice test - value should increase by payload number', () => {

    const initialstate = {
        value: 3
    }

    const resultState = reducer(initialstate, testAction(4))

    expect(resultState.value).toBe(7)

})


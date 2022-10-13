import { Increment, Decrement } from '../variable'


export const createIncrementAction = (data: any) => ({ type: Increment, data })

export const createDecrementAction = (data: any) => ({ type: Decrement, data })



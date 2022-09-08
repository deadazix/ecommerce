import {AppDispatch} from '../store'
import { productActions } from '../slices/productSlice'
export const httpReqAction = (id:number)=>{
    return async (dispatch:AppDispatch)=>{
        const sendReq = async ()=>{
            const response = await fetch('https://reqres.in/api/users/2')
            const data = await response.json()
            return data
        }
        dispatch(productActions.changeName('new name'))
        

    }
}

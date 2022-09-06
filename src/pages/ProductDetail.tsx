import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { productActions } from '../redux/slices/productSlice'
import { RootState } from '../redux/store'
const ProductDetail:React.FC = (props) => {
  const product = useSelector((state:RootState)=>state.product)
  const dispatch = useDispatch()

  return (
    <div>{product.name}</div>
  )
}

export default ProductDetail
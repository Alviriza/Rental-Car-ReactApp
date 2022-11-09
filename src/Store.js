import { configureStore } from '@reduxjs/toolkit'
import carFormReducer from './components/CarsPage/Search/CarFormSlice'

export default configureStore({
    reducer: {
        carForm: carFormReducer
    }
})
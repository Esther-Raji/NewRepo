// // import {configureStore} from '@reduxjs/toolkit'
// // import { eCommerceReducer } from './slice'

// // export const store = configureStore({
// //     reducer: {
// //         eCommerceApp: eCommerceReducer,

// //     },
// // })

// import { configureStore } from "@reduxjs/toolkit";
// // import persistStore from "redux-persist/es/persistStore";
// export const store = configureStore({
//     reducer: {
//         shophub : ecommerceReducer
//         // middleware:(getDefaultMiddleware)
//     }
// })

// // export const persistor = persistStore(store)

import { configureStore } from "@reduxjs/toolkit";
import FoodDelivery from '../Redux-store/slice'
import { thunk } from "redux-thunk";
import {FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from 'redux-persist'
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";



const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig,FoodDelivery,)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER ]
        }
    }).concat(thunk),
})
export const persistor = persistStore(store)



// const FoodDelivery = createSlice({
//     name:'app',
//     initialState:{
//       users:{
//         vendors:[],
//         buyers:[]
//       }
//     },
//     reducers:{
//       signUp:(state,{payload})=>{
//         if(payload === 'vendor'){
//           state.users.vendors.push()
//         }else{
//           state.users.buyers.push()
//         } 
//     },
  
//     // vendorLogin:(state, {payload})={
//     //   const checkVendor = state.users.buers.findIndex((e)=>e.payload ===e.email)
      
//     // }
//   }
//   })
  
//   export const {signUp } = FoodDelivery.actions
//   export default FoodDelivery.reducer
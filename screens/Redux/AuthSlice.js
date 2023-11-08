import {createSlice} from '@reduxjs/toolkit'
const INIT_PROFILE = []
 
const authSlice = createSlice({
  name:'auths',
  initialState:INIT_PROFILE,
  reducers:{
    addProfile(state,action){
      // console.log(`addProfile is activated = ${action.payload.firstname}`)
      // console.log(`addProfile is activated = ${action.payload.lastname}`)
      // console.log(`addProfile is activated = ${action.payload.email}`)
      state.push({firstname: action.payload.firstname,
                  lastname: action.payload.lastname,
                  email: action.payload.email,})
      console.log(state)
    }
  }
})

const {actions, reducer} = authSlice
export const {addProfile} = actions
export default reducer
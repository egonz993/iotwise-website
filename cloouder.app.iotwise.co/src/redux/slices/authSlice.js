import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  
  name: 'auth',
  
  initialState: { 
    isAuth: true,
    user: 'no-user'
   },

  reducers: {
    setIsAuth: (state, value) => {
      state.isAuth = value
    },
    setUser: (state, user) => {
      state.user = user
    }
  }
})

export const { setIsAuth, setUser } = authSlice.actions
export default authSlice.reducer
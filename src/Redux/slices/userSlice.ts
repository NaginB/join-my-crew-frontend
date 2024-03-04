import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import * as interFace from '../../Config/interface.config';


const initialState: interFace.UserDetails = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, { payload }: PayloadAction<interFace.UserDetails>) {
      Object.assign(state, payload);
    }
  },
})

export const { updateUser } = userSlice.actions
export default userSlice.reducer
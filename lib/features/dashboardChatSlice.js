import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  profile: null,
};

export const dashboardMessageSlice = createSlice({
  name: "Dashboard_Slice",
  initialState,
  reducers: {
    openChat: (state, actions) => {
      state.messages = actions.payload?.messages;
      state.profile = actions.payload?.profile;
    },
  },
});

export const { openChat } = dashboardMessageSlice.actions;

export default dashboardMessageSlice.reducer;

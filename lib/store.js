import { configureStore } from "@reduxjs/toolkit";

import dashboardMessageReducer from "./features/dashboardChatSlice";

export const store = configureStore({
  reducer: {
    dashboardMessage: dashboardMessageReducer,
  },
});

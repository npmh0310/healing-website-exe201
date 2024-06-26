import { configureStore } from "@reduxjs/toolkit";

import authModalSlice from "./features/authModalSlice";
import globalLoadingSlice from "./features/globalLoadingSlice";
import workshopSlice from "./features/workshop/workshopSlice";
import authSlice from "./features/authSlice";


const store = configureStore({
  reducer: {
    auth: authSlice,
    authModal: authModalSlice,
    globalLoading: globalLoadingSlice,
    workshops: workshopSlice,
  },
});

export default store;

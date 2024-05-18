import { configureStore } from "@reduxjs/toolkit";

import authModalSlice from "./features/authModalSlice";
import globalLoadingSlice from "./features/globalLoadingSlice";


const store = configureStore({
  reducer: {
    authModal: authModalSlice,
    globalLoading: globalLoadingSlice,
  }
});

export default store;
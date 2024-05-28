import { configureStore } from "@reduxjs/toolkit";

import authModalSlice from "./features/authModalSlice";
import globalLoadingSlice from "./features/globalLoadingSlice";
import workshopSlice from "./features/workshop/workshopSlice";

const store = configureStore({
  reducer: {
    authModal: authModalSlice,
    globalLoading: globalLoadingSlice,
    workshops: workshopSlice,
  },
});

export default store;

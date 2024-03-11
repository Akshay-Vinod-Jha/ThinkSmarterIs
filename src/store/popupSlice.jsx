import { createSlice } from "@reduxjs/toolkit";
const popSlice = createSlice({
  name: "popup",
  initialState: {
    visible: false,
    style: {
      color: null,
      bgColor: null,
      title: null,
      description: null,
      icon: null,
    },
  },
  reducers: {
    showPopUp: (state, action) => {
      state.visible = true;
      state.style = action.payload;
    },
    hidePopUp: (state, action) => {
      state.visible = false;
      state.style = {
        color: null,
        bgColor: null,
        title: null,
        description: null,
        icon: null,
      };
    },
  },
  selectors: {
    isPopUpVisible: (state) => state.popup.visible,
    getPopUpState: (state) => state.popup,
  },
});

export const popSliceReducer = popSlice.reducer;
export const { isPopUpVisible, getPopUpState } = popSlice.getSelectors();
export const { showPopUp, hidePopUp } = popSlice.actions;

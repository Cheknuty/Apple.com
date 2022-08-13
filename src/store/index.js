import { configureStore } from "@reduxjs/toolkit";
import footerReducer from "../components/footerPrimary/footerPrimarySlice";
import sliderReducer from "../modules/slider/sliderSlice";

export default configureStore({
    reducer: {
        slider: sliderReducer,
        footer: footerReducer
    }
}) 
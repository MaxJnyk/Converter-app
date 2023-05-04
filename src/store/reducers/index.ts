import { combineReducers } from "redux";
import { converterReducer } from "./converter-reducer";


export const rootReducer = combineReducers({
    converter: converterReducer,

});

export type RootState = ReturnType<typeof rootReducer>;
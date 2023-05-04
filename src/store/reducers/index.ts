import { combineReducers } from "redux";
import { converterReducer } from "./converter-reducer";
import {availableCurrenciesReducer} from "./available-currencies-reducer";


export const rootReducer = combineReducers({
    converter: converterReducer,
    availableCurrencies: availableCurrenciesReducer,

});

export type RootState = ReturnType<typeof rootReducer>;
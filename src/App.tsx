import './App.css'
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout/layout";
import {NotFoundPage} from "./pages/not-found-page";
import {useAction} from "./hooks/use-action";
import {useTypedSelector} from "./hooks/use-typed-selector";
import {ConverterPage} from "./pages/converter-page";
import {useEffect} from "react";

function App() {
    const {getAvailableCurrencies} = useAction();
    const {loading_status} = useTypedSelector((state) => state.availableCurrencies);

    useEffect(() => {
        const requestInterval = 0;
        const interval = setInterval(() => {
            getAvailableCurrencies();
            clearInterval(interval);
        }, requestInterval);
    }, []);

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<ConverterPage loading={loading_status}/>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App

export enum LocalStoragePath {
    CONVERTER_DEFAULT_CURRENCY = "converter-default-currency",
    FAVORITE_RATES = "favorite-rates",
}
import './App.css'
import { Route, Routes } from "react-router-dom";
import {Layout} from "./components/layout/layout";
import {NotFoundPage} from "./pages/not-found-page";

function App() {


  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"*"} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

import React from "react";
import {BrowserRouter, Routers, Route} from "react-router-dom"; 

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path= '/' element ={<Home />}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App;
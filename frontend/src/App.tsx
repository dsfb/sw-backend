import React from 'react';
import './App.css';
import SearchConteiner from "./conteiners/search-conteiner/search-conteiner";
import ResultConteiner from "./conteiners/result-conteiner/result-conteiner";
import store from "./redux/store";
import {Provider} from "react-redux";


function App() {
    return (
        <>
                <div className={"row mainConteiner"}>
                    <div/>
                    <Provider store={store}>
                    <SearchConteiner/>
                    <ResultConteiner/>
                    </Provider>
                </div>
        </>
    );
}

export default App;

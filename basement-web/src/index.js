import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MagazinePage from "./component/Magazine/MagazinePage";
import * as themes from './theme/schema.json';
import {setToLS} from "./util/storage";
import MarketsPage from "./component/markets/MarketsPage";
import AssetClasses from "./component/markets/AssetClasses";
import TradingReflection from "./component/markets/TradingReflection";
import Takeaway from "./component/markets/Takeaway";
import TradingSimulation from "./component/markets/TradingSimulation";
import TradingStrategy from "./component/markets/TradingStrategy";
import TradingDiary from "./component/markets/TradingDiary";
import RegistrationPage from "./component/profile/RegistrationPage";

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root'),
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
const Index = () => {
    setToLS('all-themes', themes.default);
    return(
        root.render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/magazine" element={<MagazinePage />} />
                    <Route path="/register" element={<RegistrationPage/>}/>
                    <Route path="/markets" element={<MarketsPage />} />
                    <Route path="/asset-classes" element={<AssetClasses />} />
                    <Route path="/trading-reflection" element={<TradingReflection />} />
                    <Route path="/trading-strategy" element={<TradingStrategy />} />
                    <Route path="/takeaway" element={<Takeaway />} />
                    <Route path="/trading-diary" element={<TradingDiary />} />
                    <Route path="/trading/us-cpi" element={<TradingSimulation selectedTrading="us-cpi"/>} />
                </Routes>
            </BrowserRouter>,
        )
    )
}

root.render(
    <Index/>
    // <BrowserRouter>
    //     <Routes>
    //         <Route path="/" element={<App />} />
    //         <Route path="/magazine" element={<MagazinePage />} />
    //     </Routes>
    // </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

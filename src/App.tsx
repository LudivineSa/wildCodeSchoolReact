import './Styles/App.css';
import {Suspense} from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Wilder from "./components/Wilder/Wilder"
import AddWilder from "./components/Wilder/AddWilder"
import UpdateWilder from "./components/Wilder/UpdateWilder"
import SearchedWilder from "./components/Wilder/SearchedWilder"
import Erreur404 from "./components/Erreur404"
import { ToastContainer, toast } from 'react-toastify';
import ThemeContextProvider from './functions/context'

import {RecoilRoot} from 'recoil';

function App() {


  return (
    <div className="App bg-slate-100	h-screen">
          <RecoilRoot>
            <ThemeContextProvider>
            <Header /> 
              <div className="container">
              <Suspense fallback={<h1>Chargement...</h1>}>
                <Routes>
                  <Route path="/" element= {<Home />} />
                  <Route path="/wilders" element= {<Wilder />} />
                  <Route path="/addwilder" element= {<AddWilder />} />
                  <Route path="/updatewilder/:id" element= {<UpdateWilder />} />
                  <Route path="/searchedwilder/:field/:type" element= {<SearchedWilder />} />
                  <Route path="/*" element= {<Erreur404 />} />
                </Routes>
              </Suspense>
              </div>
              </ThemeContextProvider>
          </RecoilRoot>
          <ToastContainer
                position="bottom-right"
                autoClose={5000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />  
    </div>
  );
}

export default App;

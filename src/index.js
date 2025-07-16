import React from 'react';
import ReactDOM from 'react-dom/client';
import './AllRoute_Components/reset.css';
import './AllRoute_Components/cssena/cssena.css'
import 'react-toastify/dist/ReactToastify.css';
import './AllRoute_Components/main.css';
// import App from './Pages/App';
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);

// cd f/B-VSCode/project/CMS-RTL-app
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

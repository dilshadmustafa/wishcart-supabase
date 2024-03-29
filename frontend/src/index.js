import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SuccessScreen from './screens/SuccessScreen';
import store from './slice/store';
import { Provider } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={
      <Provider store={store}>
        <App />
      </Provider>
    } >
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route index={true} path="/login" element={<LoginScreen />} />
      <Route index={true} path="/success" element={<SuccessScreen />} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

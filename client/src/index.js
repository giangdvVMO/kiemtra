import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from './components/User/SignIn';
import SignUp from './components/User/SignUp';
import { UserProvider } from './components/User/UserProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <UserProvider>

<BrowserRouter>

  <Routes>
    <Route path='/signIn' element={<SignIn />} />
    <Route path='/register' element={<SignUp />} />
    <Route path="/" element={<App />} >
      {/* <Route path="profile" element={<Profile />} />
      <Route path="news" element={<News />} /> */}
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Routes>

</BrowserRouter>
</UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

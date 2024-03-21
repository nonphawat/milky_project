import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";

//root ของfile -> เอา page อื่นๆ มาใส่ในนี้  
import LoginEmployee from './employeeSide/login'
import Admin from './adminSide/index'
import AdminPanel from './adminSide/adminPanel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    
    <Routes>
      
        {/* ส่วนของ admin */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/panel" element={<AdminPanel />} />
        
        {/* ส่วนของ employee */}
        <Route index element={<LoginEmployee/>}/>
        
        {/*<Route path="/admin/adminpanel" element={<Adminpanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/member" element={<Member />} />
        <Route path="/doctor" element={<Doctor />} /> */}
        
        
      </Routes>
  </BrowserRouter>
);

reportWebVitals();

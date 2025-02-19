import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './VendorPage/Layout';
import { Dashboard } from './VendorPage/Dashboard';
import { Products } from './VendorPage/Products';
import { StoreSetup } from './VendorPage/StoreSetup';
import { useStore } from './contentStore/useStore';
import Signup from './Authentication/Signup';
import { LogOutIcon } from 'lucide-react';
import Login from './Authentication/Login';
import { useAuthstore } from './contentStore/authStore';

function App() {
  const {user}=useAuthstore()
  // console.log(user)
  const store = useStore((state) => state.store);
  console.log('store-->',store)
  return (
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="/signup" element={!user?<Signup/>:<Navigate to={"/"} />} />
        <Route path="/signin" element={!user?<Login />:<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;

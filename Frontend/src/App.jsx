import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './VendorPage/Layout';
import { Dashboard } from './VendorPage/Dashboard';
import { Products } from './VendorPage/Products';
import { StoreSetup } from './VendorPage/StoreSetup';
import { useStore } from './contentStore/useStore';
import Signup from './Authentication/Signup';
import { Loader, LogOutIcon } from 'lucide-react';
import Login from './Authentication/Login';
import { useAuthStore} from './contentStore/authStore.js';
import { useProductStore } from './contentStore/productStore.js';


function App() {
  const { user, isChekingAuth, authCheck } = useAuthStore();
useEffect(() => {
  authCheck();
  // console.log("authenticated user -->", user);
}, [authCheck]);
if (isChekingAuth) {
  // console.log("Heyyyy !!");
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center bg-black h-full">
        <Loader className="animate-spin text-red-600 size-10" />
      </div>
    </div>
  );
}
  // console.log(user)
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

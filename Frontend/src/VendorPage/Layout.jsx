import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { LayoutGrid, Package, Bell } from "lucide-react";
import { useStore } from "../contentStore/useStore";
import { useAuthStore } from "../contentStore/authStore";
import LandingPage from "../LandingPage/LandingPage";
import { useProductStore } from "../contentStore/productStore";

export function Layout() {
  const { lowStockProducts,checkProducts } = useProductStore();
  useEffect(() => {
       checkProducts();
    }, []);
  const { user } = useAuthStore();

  return !user ? (
    <LandingPage />
  ) : (
    <div className="min-h-screen bg-gradient-to-tr from-slate-600 to-slate-400">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">
                  {user?.name}
                </h1>
              </div>
              <div className="ml-6 flex space-x-8">
                <Link
                  to="/"
                  className="border-transparent text-gray-500 hover:text-blue-800 inline-flex items-center px-1 pt-1 border-b-2 text-xl font-semibold transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <LayoutGrid className="w-5 h-5 mr-2 " />
                  Dashboard
                </Link>
                <Link
                  to="/products"
                  className="border-transparent text-gray-500 hover:text-blue-800 inline-flex items-center px-1 pt-1 border-b-2 text-xl font-semibold transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <Package className="w-5 h-5 mr-2" />
                  Products
                </Link>
              </div>
            </div>
            <div className="ml-6 flex items-center">
              <button
                type="button"
                className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 relative"
              >
                <Bell className="h-6 w-6" />
                {lowStockProducts.length > 0 && (
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}

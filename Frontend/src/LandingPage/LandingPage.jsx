import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { FaBox, FaQrcode, FaMobileAlt, FaBell } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function LandingPage() {
  const websiteUrl = "https://v1v2pdjp-5174.inc1.devtunnels.ms/"; // Change to your URL
  return (
    <>
      <div className="min-h-screen bg-gray-200">
        {/* Hero Section */}
        <header className="bg-gradient-to-t from-blue-900 to-blue-600 text-white py-16 text-center">
          <h1 className="text-4xl font-bold">Smart Inventory System</h1>
          <p className="mt-4 text-lg">
            Effortless Inventory Tracking with QR Code Access
          </p>
          <a
            href="#features"
            className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Learn More
          </a>
        </header>

        {/* Problem Section */}
        <section className="py-16 px-8 bg-transparent shadow-blue-300 shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            🚀 The Challenge
          </h2>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto font-semibold text-xl">
            Small retail stores struggle with **manual inventory management**,
            leading to inefficiency and errors. Our smart system provides
            **QR-based inventory tracking** and **real-time stock alerts** to
            simplify store operations.
          </p>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-transparent px-8 ">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            🛠 Features & Benefits
          </h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6 text-center">
            <FeatureCard
              icon={<FaBox size={40} />}
              title="Product Management"
              description="Easily add, update, and remove products."
            />
            <FeatureCard
              icon={<FaQrcode size={40} />}
              title="Unique QR Codes"
              description="Quick store access with personalized QR codes."
            />
            <FeatureCard
              icon={<FaMobileAlt size={40} />}
              title="Mobile-Friendly"
              description="Easy-to-use mobile interface for quick management."
            />
            <FeatureCard
              icon={<FaBell size={40} />}
              title="Low-Stock Alerts"
              description="Get notified when stock is running low."
            />
          </div>
        </section>

        {/* QR Code Section */}
        {/* <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold text-gray-800">📌 Try It Out!</h2>
        <p className="mt-2 text-gray-600">Scan this QR Code to explore the system:</p>
        <div className="mt-6 flex justify-center">
          <QRCodeSVG value={websiteUrl} size={200} />
        </div>
      </section> */}

        {/* Call to Action */}
        <section className="py-16 px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            🌍 Make Inventory Management Effortless!
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Reduce manual errors, track inventory in real-time, and simplify
            store operations with our **Smart Inventory System**.
          </p>
          <NavLink
            to="/signup"
            className="mt-6 inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all transform ease-in-out duration-500 hover:scale-110"
          >
            Get Started Now
          </NavLink>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-8">
          <p>
            📩 Contact us at{" "}
            <a href="mailto:support@example.com" className="underline">
              support@example.com
            </a>
          </p>
          <p className="mt-2">
            © 2025 Smart Inventory System. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gradient-to-l from-blue-300 to-slate-400 hover:bg-cyan-600 p-6 rounded-lg transition-transform transform ease-in-out duration-500 hover:scale-110 shadow-blue-400 shadow-lg">
      <div className="text-blue-600">{icon}</div>
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default LandingPage;

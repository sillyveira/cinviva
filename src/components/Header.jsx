import React from "react";

export default function Header() {
  return (
    <header
      className="hidden md:block w-full"
      style={{ backgroundColor: "#134abf" }}>

      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-center">
        <img
          src="/logo-conecta.png"
          alt="Logo Conviva"
          className="h-15"
        />

      </div>
    </header>
  );
}

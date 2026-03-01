import React from "react";

export default function Header() {
  return (
    <header
      className="hidden md:block w-full"
      style={{ backgroundColor: "#134abf" }}>

      <div className="max-w-6xl mx-auto px-8 py-3 flex items-center justify-start gap-4">
        <img
          src="/logo-pcr.svg"
          alt="Logo PCR"
          className="h-20"
        />
        <img
          src="/logo-conecta.png"
          alt="Logo Conecta"
          className="h-15"
        />
      </div>
    </header>
  );
}

import React from "react";
import { AppProvider } from "../contexts/AppContext"; // Import the AppProvider
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "visionTuner",
  description: "Generated by visionTuner",
};

// ALWAYS server Compo
import Connection_db from "./api/db/config";

Connection_db();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  Connection_db();
  
  return (
    <AppProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AppProvider>
  );
}

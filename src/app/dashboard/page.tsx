// server comp
import "./page.css";
import Dashboard from "@/components/Pages/Dashboard";
import Connection_db from "../api/db/config";

Connection_db();

export default function Home() {
  return (
    <main className="main">
      <h1> Landing Page </h1>
    </main>
  );
}


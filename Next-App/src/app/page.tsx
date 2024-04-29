import Connection_db from "./api/db/config";
import LoginSignUp from '../components/loginSignup/LoginSignUp'

Connection_db();

export default function Home() {
  return <main className="main"> <LoginSignUp /> </main>;
}

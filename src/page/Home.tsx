import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
export const Home = () => {
    return(
        <main className="font-poppins">
            <Header />
            <Outlet />
        </main>
    )
}
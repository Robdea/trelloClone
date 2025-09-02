import { Outlet } from "react-router";
import HeaderBar from "../components/HeaderBar";

export default function MainLayout() {
  return (
    <div className="h-full">
        <HeaderBar/>
        <main className="h-full">
            <Outlet/>
        </main>
    </div>
  )
}

import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer.jsx";
import Header from "@/components/Header.jsx";

export default function RootView() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto flex grow flex-col px-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

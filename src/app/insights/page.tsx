import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orion Forge | Insights",
};

export default function Insights() {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen"></div>
      <Footer></Footer>
    </>
  );
}

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orion Forge | Our Team",
};

export default function OurTeam() {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen"></div>
      <Footer></Footer>
    </>
  );
}

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/section/Hero";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <main className="bg-white min-h-screen text-black">
        <Hero></Hero>
      </main>
      <Footer></Footer>
    </>
  );
}

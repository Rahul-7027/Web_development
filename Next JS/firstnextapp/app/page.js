import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      i am Home Page
      <h1 className="text-xl">Problem Solution By Next Js</h1>
      <ul>
        <li>Full Stack Solution</li>
        <li>File based Routing</li>
        <li>Additional features likes router from next/navigation</li>
        <li>Optimized Routing</li>
      </ul>
    </main>
  );
}

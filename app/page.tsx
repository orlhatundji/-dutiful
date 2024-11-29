import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
      </main>
      
    </div>
  );
}

import Appointments from "./components/Appointments";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RatingAndReviews from "./components/RatingAndReviews";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:pl-14 md:pr-12">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <RatingAndReviews />
        <Appointments />
      </main>
      
    </div>
  );
}

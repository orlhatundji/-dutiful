import Appointments from "@/app/components/Appointments";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Listings from "@/app/components/Listing";
import RatingAndReviews from "@/app/components/RatingAndReviews";

export default function Home() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-6 md:pl-14 md:pr-12">
        <Header />
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Hero />
          <RatingAndReviews />
          <Listings />
          <Appointments />
        </main>
      </div>
      <Footer />
    </>
  );
}

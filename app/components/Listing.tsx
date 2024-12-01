import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const Listings = () => {
  const listings = [
    {
      title: "Get Discovered",
      description: `Dutiful is more than just a business directory; it also enhances your web profile. 
          The platform makes use of SEO techniques to boost each listing’s performance in the SERPs, 
          providing any business the chance to rank, regardless of how strong their current online 
          presence is.`,
    },
    {
      title: "Instant Chat",
      description: `You’ll be able to chat and send voice recordings with potential and existing customers, 
          including managing your captured leads anytime, anywhere via the platform`,
    },
    {
      title: "Quotations",
      description: `In addition to providing customers with access to information, offering customer 
          quotations is very advantageous to the way you conduct your business. On Dutiful, 
          you’ll be able to send and receive quotation from customers - an important step 
          in lead management.`,
    },
  ];
  return (
    <div
      className={twMerge(
        "grid grid-cols-1 gap-6 w-full lg:grid-cols-2 justify-between xl:justify-start bg-accent",
        "px-4 lg:pr-0 lg:pl-14 pt-16 pb-20 rounded-3xl"
      )}
    >
      <div className="flex flex-col gap-6 lg:order-2 text-black-lite">
        {listings.map((listing, index) => (
          <div
            key={listing.title}
            className={twMerge(
              "rounded-3xl flex flex-col gap-2 bg-white border-stroke",
              "lg:max-w-[480px] p-5 shadow",
              index == 1 && "lg:-ml-16"
            )}
          >
            <Image
              src="/icons/get_discovered.svg"
              alt=""
              width={40}
              height={40}
            />
            <h3 className="font-circular-std-bold text-xl">{listing.title}</h3>
            <p className="">{listing.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-14 lg:mt-0 lg:order-1 flex items-center">
        <Image
          src="/listings_phone.svg"
          alt=""
          width={638}
          height={680}
          className="max-w-[70%] lg:max-w-[500px] xl:max-w-[638px] mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
};

export default Listings;

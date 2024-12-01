import Image from "next/image";
import React from "react";

const Socials = () => {
  return (
    <div className="mt-12 py-4 border-y border-stroke2 flex flex-col items-start md:flex-row gap-6 md:items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-white text-center font-circular-std-book text-lg">
          Follow us
        </span>
        <div className="flex items-center gap-4">
          <Image
            src="/icons/facebook.svg"
            width={36}
            height={36}
            alt="Facebook"
          />
          <Image
            src="/icons/instagram.svg"
            width={36}
            height={36}
            alt="Instagram"
          />
          <Image
            src="/icons/twitter.svg"
            width={36}
            height={36}
            alt="Twitter"
          />
          <Image
            src="/icons/linkedin.svg"
            width={36}
            height={36}
            alt="LinkedIn"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-white text-center font-circular-std-book text-lg">
          Download the app
        </span>
        <div className="flex items-center gap-4">
          <Image
            src="/icons/app_store.svg"
            width={36}
            height={36}
            alt="Facebook"
          />
          <Image
            src="/icons/play_store.svg"
            width={36}
            height={36}
            alt="Instagram"
          />
        </div>
      </div>
    </div>
  );
};

export default Socials;

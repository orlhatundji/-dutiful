import Image from "next/image";
import React from "react";

const Appointments = () => {
  return (
    <div className="grid grid-cols-1 gap-6 w-full lg:grid-cols-2 justify-start pb-20">
      <div className="max-w-[559px] lg:mt-20 xl:mt-36 lg:order-2">
        <h1 className="font-recoleta-alt-bold text-4xl text-secondary">
          Accept and sell appointments
        </h1>
        <p className="font-circular-std-book text-xl mt-4 text-tertiary">
          Let customers book their own appointment or consultation. Start
          accepting payments for appointments through your booking page.
        </p>
      </div>
      <div className="mt-14 lg:mt-0 lg:order-1">
        <Image
          src="/calendar.svg"
          alt=""
          width={592}
          height={579}
          className="max-w-[70%] lg:max-w-full mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
};

export default Appointments;

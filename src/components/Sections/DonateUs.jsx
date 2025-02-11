import { Progress } from "antd";
import Link from "next/link";
import React from "react";
import DonateUsButton from "../DonateUsButton";

const DonateUs = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/donation.webp")',
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative text-white px-5 md:px-10 lg:px-20 py-16 lg:py-24 flex w-full"
    >
      {/* Black overlay */}
      <div className="absolute inset-0 md:hidden bg-black opacity-35"></div>

      <div className="w-full md:w-[75%] lg:w-1/2 space-y-3 lg:space-y-5 relative z-10">
        <img src="/bismillah-white.webp" className="" alt="Bismillah" />
        <h2 className="text-4xl font-bold leading-none">
          <span className="text-aqua">SUPPORT US,</span>
          <br />
          WE NEED YOUR HELP.
        </h2>
        <div className="py-5">
          <Progress type="circle" strokeColor={"#00BDA5"} percent={65} />
        </div>
        <p className="text-[0.95rem] tracking-wide font-normal">
          May Allah bless you! Thank you. Those who (in charity) spend of their
          goods by night and by day, in secret and in public, have their reward
          with their Lord
        </p>
        <div className="">
          <DonateUsButton text={"Donate Us"} />
        </div>
      </div>
      <div className="hidden md:w-[25%] lg:w-1/2"></div>
    </div>
  );
};

export default DonateUs;

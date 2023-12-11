"use client";
import Navbar from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#1f1f1f]">
      <main className="h-full pb-40 ">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default MarketingLayout;

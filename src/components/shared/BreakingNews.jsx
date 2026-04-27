import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    _id: "1",
    title: "Match Highlights: Germany vs Spain - as it happened",
  },
  {
    _id: "2",
    title: "Match Highlights: Germany vs Spain as...",
  },
  {
    _id: "3",
    title: "Match Highlights: Germany vs Spain - as it happened",
  },
];

const BreakingNews = () => {
  return (
    <div className="container mx-auto max-w-[1140px] px-4">
      <div className="flex items-center gap-4 bg-[#f3f3f3] p-3 md:p-4">
      <button className="h-12 bg-[#d72050] px-7 text-[17px] font-semibold text-white">
        Latest
      </button>
      <Marquee pauseOnHover={true} speed={70} className="text-[#403f3f]">
        {news.map((n) => (
          <span key={n._id} className="mr-6 font-semibold">
            {n.title}
            <span className="ml-6">!</span>
          </span>
        ))}
      </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;

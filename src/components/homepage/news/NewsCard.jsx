import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const NewsCard = ({ news }) => {
  return (
    <article className="overflow-hidden rounded border border-[#e7e7e7] bg-white">
      <div className="flex items-center justify-between bg-[#f3f3f3] px-5 py-4">
          <div className="flex items-center gap-3">
            <Image
              src={news.author?.img}
              alt={news.author?.name}
              height={42}
              width={42}
              className="h-[42px] w-[42px] rounded-full object-cover"
            />
            <div>
            <h2 className="font-semibold text-[#403f3f]">
              {news.author?.name}
            </h2>
            <p className="text-sm text-[#706f6f]">{news.author?.published_date}</p>
            </div>
          </div>
        <div className="flex items-center gap-4 text-2xl text-[#706f6f]">
          <CiBookmark />
          <CiShare2 />
          </div>
        </div>

      <div className="px-5 py-5">
        <h2 className="text-[20px] font-bold leading-8 text-[#403f3f]">
          {news.title}
        </h2>

        <figure className="mt-5 overflow-hidden rounded">
          <Image
            src={news.image_url}
            alt={news.title}
            width={560}
            height={300}
            className="h-[255px] w-full object-cover"
          />
        </figure>

        <p className="mt-6 line-clamp-3 text-[15px] leading-7 text-[#706f6f]">
          {news.details}
        </p>
        <Link
          href={`/news/${news._id}`}
          className="text-[15px] font-semibold text-[#ff8c47]"
        >
          Read More
        </Link>

        <div className="mt-5 flex items-center justify-between border-t border-[#e7e7e7] pt-5 text-[#706f6f]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[22px] text-[#ff8c47]">
              {Array.from({ length: 5 }).map((_, index) => (
                <IoIosStar key={index} />
              ))}
            </span>
            <span className="font-medium">{news.rating?.number}</span>
          </div>
          <span className="flex items-center gap-3 font-medium">
            <FaEye className="text-xl" />
            {news.total_view}
          </span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;

import demoCard from "@/assets/demo-card-thumbnail.png";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

const sideStories = [
  demoCard,
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=600&auto=format&fit=crop",
];

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <aside>
      <h2 className="text-[20px] font-bold text-[#403f3f]">All Caterogy</h2>
      <ul className="mt-5 flex flex-col gap-2">
        {categories.news_category.map((category) => {
          return (
            <li
              key={category.category_id}
              className={`rounded px-4 py-4 text-center text-[18px] font-semibold ${
                activeId === category.category_id
                  ? "bg-[#e7e7e7] text-[#403f3f]"
                  : "text-[#9f9f9f]"
              }`}
            >
              <Link
                href={`/category/${category.category_id}`}
                className="block"
              >
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-7 space-y-7">
        {sideStories.map((image, index) => (
          <article key={index} className="space-y-4">
            <Image
              src={image}
              alt=""
              width={270}
              height={150}
              className="h-[150px] w-full rounded object-cover"
            />
            <h3 className="text-[18px] font-bold leading-8 text-[#403f3f]">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h3>
            <div className="flex items-center gap-5 text-[15px] font-medium text-[#9f9f9f]">
              <span className="text-[#403f3f]">Sports</span>
              <span className="flex items-center gap-2">
                <FaRegCalendarAlt />
                Jan 4, 2022
              </span>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
};

export default LeftSidebar;

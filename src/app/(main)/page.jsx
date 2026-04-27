import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";

const default_category_id = "01";

const Home = async () => {
  const categories = await getCategories();
  const news = await getNewsByCategoryId(default_category_id);

  return (
    <main className="container mx-auto my-[70px] grid max-w-[1140px] grid-cols-1 gap-6 px-4 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <LeftSidebar categories={categories} activeId={default_category_id} />
      </div>

      <div className="lg:col-span-6">
        <h2 className="mb-5 text-[20px] font-bold text-[#403f3f]">
          Dragon News Home
        </h2>
        <div className="space-y-7">
          {news.slice(0, 3).map((n) => (
            <NewsCard key={n._id} news={n} />
          ))}
        </div>
      </div>

      <div className="lg:col-span-3">
        <RightSidebar showAd />
      </div>
    </main>
  );
};

export default Home;

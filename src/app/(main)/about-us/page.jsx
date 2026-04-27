import RightSidebar from "@/components/homepage/news/RightSidebar";
import demoCard from "@/assets/demo-card-thumbnail.png";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

export const metadata = {
  title: "Dragon News - about us",
};

const AboutUsPage = () => {
  return (
    <main className="container mx-auto mt-6 grid max-w-[1140px] grid-cols-1 gap-6 px-4 lg:grid-cols-12">
      <section className="lg:col-span-9">
        <h1 className="mb-6 text-[20px] font-bold text-[#403f3f]">
          Dragon News
        </h1>
        <article className="rounded border border-[#e7e7e7] bg-white p-7">
          <Image
            src={demoCard}
            alt="News on mobile"
            width={790}
            height={410}
            className="h-auto w-full rounded object-cover"
            priority
          />
          <h2 className="mt-7 max-w-[720px] text-[28px] font-bold leading-[1.75] text-[#403f3f]">
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
            Aid Package Yet
          </h2>
          <p className="mt-4 text-[16px] leading-8 text-[#706f6f]">
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
            Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
            United States, Worthy News (Worthy News) - U.S. President Joe Biden
            has announced nearly $3 billion in new U.S. military aid for Kyiv as
            Ukraine marked its independence day six months after Russia invaded
            the country. The United States of America is committed to supporting
            the people of Ukraine as they continue the fight to defend their
            sovereignty. As part of that commitment, I am proud to announce our
            biggest tranche of security assistance to date: approximately $2.
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
            Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
            United States, Worthy News (Worthy News) - U.S. President Joe Biden
            has announced nearly $3 billion in new U.S. military aid for Kyiv as
            Ukraine marked its independence day six months after Russia invaded
            the country. The United States of America is committed to supporting
            the people of Ukraine as they continue the fight to defend their
            sovereignty. As part of that commitment, I am proud to announce our
            biggest tranche of security assistance to date: approximately $2.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex h-12 items-center gap-3 bg-[#d72050] px-7 text-[18px] font-semibold text-white"
          >
            <BsArrowLeft className="text-2xl" />
            All news in this category
          </Link>
        </article>
      </section>
      <div className="pt-4 lg:col-span-3">
        <RightSidebar />
      </div>
    </main>
  );
};

export default AboutUsPage;

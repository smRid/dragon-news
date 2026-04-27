"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { FaGithub, FaGoogle } from "react-icons/fa";
import fb from "@/assets/fb.png";
import twitter from "@/assets/twitter.png";
import instagram from "@/assets/instagram.png";
import swimming from "@/assets/swimming.png";
import classImg from "@/assets/class.png";
import playground from "@/assets/playground.png";
import bg from "@/assets/bg.png";

const qZoneItems = [
  { title: "Swimming", image: swimming },
  { title: "Class", image: classImg },
  { title: "Play Ground", image: playground },
];

const RightSidebar = ({ showAd = false }) => {
  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGithubSignin = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <aside className="space-y-8">
      <section>
        <h2 className="mb-4 text-[20px] font-bold text-[#403f3f]">
          Login With
        </h2>
        <div className="flex flex-col gap-2">
        <button
          className="flex h-8 items-center justify-center gap-2 rounded border border-[#58a7de] bg-white text-sm font-medium text-[#4088d6]"
          onClick={handleGoogleSignin}
        >
          <FaGoogle />
          Login with Google
        </button>
        <button
          className="flex h-8 items-center justify-center gap-2 rounded border border-[#403f3f] bg-white text-sm font-medium text-[#403f3f]"
          onClick={handleGithubSignin}
        >
          <FaGithub />
          Login with Github
        </button>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-[20px] font-bold text-[#403f3f]">
          Find Us On
        </h2>
        <div className="overflow-hidden rounded border border-[#e7e7e7] bg-white">
          {[
            { label: "Facebook", icon: fb },
            { label: "Twitter", icon: twitter },
            { label: "Twitter", icon: instagram },
          ].map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="flex h-[62px] items-center gap-3 border-b border-[#e7e7e7] px-5 last:border-b-0"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#f3f3f3]">
                <Image src={item.icon} alt="" width={16} height={16} />
              </span>
              <span className="font-medium text-[#706f6f]">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f3f3f3] px-4 py-5">
        <h2 className="mb-7 text-[20px] font-bold text-[#403f3f]">Q-Zone</h2>
        <div className="space-y-9">
          {qZoneItems.map((item, index) => (
            <div
              key={item.title}
              className="rounded bg-white p-3 text-center shadow-sm"
              style={{
                transform: `rotate(${index % 2 === 0 ? "-5deg" : "5deg"})`,
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={230}
                height={130}
                className="h-[120px] w-full rounded object-cover"
              />
              <h3 className="mt-3 text-[16px] font-semibold text-[#403f3f]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {showAd && (
        <Image
          src={bg}
          alt=""
          width={300}
          height={510}
          className="w-full object-cover"
        />
      )}
    </aside>
  );
};

export default RightSidebar;

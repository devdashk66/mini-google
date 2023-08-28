"use client";

import Image from "next/image";
import { TbGridDots } from "react-icons/tb";
import {
  BiSolidUserCircle,
  BiSearch,
  BiSolidMicrophone,
  BiSolidCamera,
} from "react-icons/bi";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");

  const searchResult = (e) => {
    setSearch(e.target.value);
  };
  return (
    <main className="flex h-screen justify-between flex-col">
      <header className="p-8">
        <div className="flex justify-end">
          <ul className="flex flex-row items-center gap-5">
            <li>
              <a href="https://gmail.com">Gmail</a>
            </li>
            <li>
              <a href="https://www.google.com/imghp?hl=en&authuser=0&ogbl">
                Images
              </a>
            </li>
            <li>
              <TbGridDots className="text-xl cursor-pointer" />
            </li>
            <li>
              <BiSolidUserCircle className="text-3xl cursor-pointer" />
            </li>
          </ul>
        </div>
      </header>

      <section className="p-8">
        <div className="flex flex-col gap-6 justify-center items-center">
          <Image
            src="https://i.ibb.co/y0cyNxm/googlelogo-light-color-272x92dp.png"
            alt="Google Logo"
            className=""
            width={272}
            height={92}
            priority
          />
          <div className=" border-[#292b2e] border-2 border-solid py-3 px-4 rounded-full flex items-center gap-4 hover:bg-[#292b2e] hover:drop-shadow-md">
            <BiSearch />
            <input
              onChange={searchResult}
              value={search}
              type="text"
              className="bg-transparent md:w-[400px] sm:w-[400px] lg:w-[400px] xl:w-[500px] w-[350px]  outline-none"
            />
            <BiSolidMicrophone />
            <BiSolidCamera />
          </div>
          <div className="flex gap-3">
            <button
              className="bg-[#292b2e] px-5 py-3 rounded-lg hover:border-[#363a3d] hover:border-2 hover:border-solid border-2 border-transparent"
              href={`https://www.google.com/search?q=${search}`}
              disabled={search === ""}
              onClick={() => {
                if (search !== "") {
                  window.location.href = `https://www.google.com/search?q=${search}`;
                }
              }}
            >
              Google Search
            </button>
            <a
              className="bg-[#292b2e] px-5 py-3 rounded-lg hover:border-[#363a3d] hover:border-2 hover:border-solid border-2 border-transparent"
              href="https://www.google.com/doodles"
            >
              I'm Feeling Lucky
            </a>
          </div>
        </div>
      </section>

      <footer className="flex flex-col p-8 gap-3 bg-[#171717] text-[#9aa0a6] ">
        <div>
          <p>Bangladesh</p>
        </div>
        <hr />
        <div className="flex justify-between flex-col items-center md:flex-row ">
          <ul className="flex gap-2">
            <li>
              <a href="https://about.google/?utm_source=google-BD&utm_medium=referral&utm_campaign=hp-footer&fg=1">
                About
              </a>
            </li>

            <li>
              <a href="https://www.google.com/intl/en_bd/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
                Advertising
              </a>
            </li>

            <li>
              <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">
                Business
              </a>
            </li>
            <li>
              <a href="https://google.com/search/howsearchworks/?fg=1">
                How Search Works
              </a>
            </li>
          </ul>
          <ul className="flex gap-2">
            <li>
              <a href="https://policies.google.com/privacy?hl=en-BD&fg=1">
                Privacy
              </a>
            </li>

            <li>
              <a href="https://policies.google.com/terms?hl=en-BD&fg=1">
                Terms
              </a>
            </li>

            <li>
              <a href="https://www.google.com/preferences?hl=en-BD&fg=1">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
};

export default Home;

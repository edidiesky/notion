"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaFlagCheckered, FaCheckCircle } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

const MovementRating = [
  {
    text: "community members",
    values: "1M+",
  },
  {
    values: "150+",
    text: "community groups",
  },
  {
    values: "50+",
    text: "countries represented",
  },
];

const templateList = [
  {
    text: "Product roadmap",
    icons: <FaFlagCheckered color="#0A85D1" />,
  },
  {
    text: "OKR",
    icons: <FaCheckCircle color="#0A85D1" />,
  },

  {
    text: "Meeting Notes",
    icons: <FaFlagCheckered color="#0A85D1" />,
  },
  {
    text: "Vacation Planner",
    icons: <FaFlagCheckered color="#0A85D1" />,
  },
  {
    text: "Editorial Calendar",
    icons: <FaFlagCheckered color="#0A85D1" />,
  },
  {
    text: "Habit Tracker",
    icons: <FaFlagCheckered color="#0A85D1" />,
  },
];

export const Movement = () => {
  return (
    <div className="py-12 flex w-full flex-col items-start gap-y-20">
      {/* top part */}
      <div className="max-w-custom px-8 m-auto flex flex-col gap-y-4 items-center justify-center">
        <h2 className="text-4xl text-center font-bold sm:text-6xl">
          Join a global movement.{" "}
          <span className="block">Unleash your creativity.</span>
        </h2>
        <span className="text-md w-7/12 m-auto text-center text-normal">
          Our vibrant community produces content, teaches courses, and leads
          events all over the world.
        </span>
        <div className="flex gap-x-4 items-center justify-center">
          <span className="flex hover:underline cursor-pointer item-center gap-x-4 text-text_blue_1">
            Request a demo
          </span>
        </div>
        <picture className="w-full m-auto">
          <Image
            style={{ width: "1050px" }}
            className="sm:w-9/12"
            alt="Cotion"
            width={0}
            sizes="100vw"
            height={0}
            loading="lazy"
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/avatars.png"
          />
        </picture>
        <div className="w-full py-4 gap-x-8 gap-y-8 flex flex-col items-center justify-center sm:flex-row sm:gap-y-4">
          {MovementRating.map((x?: any) => {
            return (
              <div className="flex w-full sm:flex-1 cursor-pointer rounded-2xl bg-gray-50 flex-col p-8 gap-y-3 hover:bg-slate-100">
                <h2 className="text-6xl font-extrabold text-text_blue_1">
                  {x.values}
                  <span className="block text-sm font-normal text-text_dark_1">
                    {x.text}
                  </span>
                </h2>
              </div>
            );
          })}
        </div>
        {/* second part */}
        <div className="w-full px-8 mt-16 m-auto flex flex-col gap-y-4 items-center justify-center">
          <h2 className="text-4xl text-center font-bold sm:text-5xl">
            Endless ways to use it
          </h2>
          <span className="flex hover:underline cursor-pointer item-center gap-x-4 text-text_blue_1">
            Browse all templates
          </span>
          <div className="w-full flex flex-col gap-x-4 md:gap-x-8 md:flex-row gap-y-8">
            <div className="flex flex-1 cursor-pointer rounded-2xl bg-gray-50 flex-col p-8 gap-y-3 hover:bg-slate-100">
              <div className="flex gap-y-8 flex-col gap-x-12">
                <span>
                  <IoHomeSharp fontSize={"26px"} color={"#EA4E43"} />
                </span>
                <h4 className="font-bold text-dark">Company wiki</h4>
                <span className="flex hover:underline cursor-pointer item-center gap-x-4 text-text_blue_1">
                  Request a demo
                </span>
              </div>
              <div className="flex w-full mt-12">
                <picture className="w-full">
                  <Image
                    style={{ width: "1050px" }}
                    className="sm:w-9/12"
                    alt="Cotion"
                    width={0}
                    sizes="100vw"
                    height={0}
                    loading="lazy"
                    src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/company-wiki-template.png"
                  />
                </picture>
              </div>
            </div>
            <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-4">
              {templateList?.map((x?: any) => {
                return (
                  <div className="flex flex-1 cursor-pointer rounded-2xl bg-gray-50 flex-col p-8 gap-y-3 hover:bg-slate-100">
                    <div className="flex gap-y-4 flex-col gap-x-12">
                      <span>{x.icons}</span>
                      <h4 className="font-bold text-dark">{x.text}</h4>
                      <span className="flex hover:underline cursor-pointer item-center gap-x-4 text-text_blue_1">
                        Request a demo
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* second part */}
    </div>
  );
};

"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

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

export const Movement = () => {
  return (
    <div className="py-12 flex w-full flex-col gap-y-20">
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
        <div className="w-full py-4 gap-x-8 flex flex-column items-center justify-center md:flex-row">
          {MovementRating.map((x?: any) => {
            return (
              <div className="flex flex-1 cursor-pointer rounded-2xl bg-gray-50 flex-col p-8 gap-y-3 hover:bg-slate-100">
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
      </div>

      {/* second part */}

      <div className="max-w-custom px-8 m-auto flex flex-col gap-y-4 items-center justify-center">
        <h2 className="text-4xl text-center font-bold sm:text-5xl">
          Endless ways to use it
        </h2>
        <span className="flex hover:underline cursor-pointer item-center gap-x-4 text-text_blue_1">
          Browse all templates
        </span>
        <div className="w-full flex flex-col gap-x-8 md:flex-row">
          <div className="flex flex-1 cursor-pointer rounded-2xl bg-gray-50 flex-col p-8 gap-y-3 hover:bg-slate-100"></div>
          <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-1 cursor-pointer rounded-2xl bg-gray-50 flex-col p-8 gap-y-3 hover:bg-slate-100"></div>
            <div className="flex flex-1 cursor-pointer rounded-2xl bg-gray-50 flex-col p-8 gap-y-3 hover:bg-slate-100"></div>
            <div className="flex flex-1 cursor-pointer rounded-2xl bg-gray-50 flex-col p-8 gap-y-3 hover:bg-slate-100"></div>
            <div className="flex flex-1 cursor-pointer rounded-2xl bg-gray-50 flex-col p-8 gap-y-3 hover:bg-slate-100"></div>
            <div className="flex flex-1 cursor-pointer rounded-2xl bg-gray-50 flex-col p-8 gap-y-3 hover:bg-slate-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

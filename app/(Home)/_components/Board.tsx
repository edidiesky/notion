"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GiBookshelf } from "react-icons/gi";
import { SiGoogledocs } from "react-icons/si";
import { GiDart } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
type BoardType = {
  type?: string;
};

const accordionList = [
  {
    icon: <BsStars fontSize={"24px"} color={"#9D34DA"} />,
    background: "#F0E1F9",
    title: "AI",
    description: "Ask literally anything Cotion will answer",
  },
  {
    icon: <GiBookshelf fontSize={"24px"} color={"#EA4E43"} />,
    title: "Wikis",
    background: "#FCE9E8",
    description: "Centralize your knowledge no more hunting for answers",
  },
  {
    icon: <GiDart fontSize={"24px"} color={"#0A85D1"} />,
    background: "#E2ECF3",
    title: "Projects",
    description: "Manageg complex projects without the chaos ",
  },
  {
    icon: <SiGoogledocs fontSize={"24px"} color={"#FAA700"} />,
    background: "#FFF6D6",
    title: "Docs",
    description: "simple, powerful, beautiful. Next-gen notes and docs",
  },
];

export const BoardCarousel: React.FC<BoardType> = ({ type }) => {
  return (
    <div className="py-6 max-w-custom w-full m-auto px-20">
      <div className="w-full px-8 m-auto flex flex-col gap-y-8 items-center justify-center">
        {/* top */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-16">
          {accordionList.map((x?: any) => {
            return (
              <div className="px-4 rounded-md py-4 shadow-inner bg-gray-200 hover:bg-white w-full flex flex-col gap-y-4">
                <div className="flex flex-row gap-x-4 items-center">
                  <h3 className="text-xl text-text_dark_1 font-extrabold">
                    {x.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* bottom */}
      </div>
    </div>
  );
};

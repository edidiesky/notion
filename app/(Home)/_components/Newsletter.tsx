"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Newsletter = () => {
  return (
    <div className="py-12">
      <div className="max-w-custom px-8 m-auto flex flex-col gap-y-4 items-center justify-center">
        <h2 className="text-5xl text-center font-bold">Get started for free</h2>
        <span className="text-md text-normal">
          Cotion is the connected workspace where better, faster work happens.
        </span>
        <div className="flex gap-x-4 items-center justify-center">
          <Button className="text-sm text-white">Try Notion for Free</Button>
          <span className="flex hover:underline cursor-pointer item-center gap-x-4 text-text_blue_1">
            Request a demo
          </span>
        </div>
        <picture className="w-100 m-auto">
          <Image
            style={{ width: "650px" }}
            alt="Cotion"
            width={0}
            sizes="100vw"
            height={0}
            loading="lazy"
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=750/front-static/pages/home/notion-parade.png"
          />
        </picture>
      </div>
    </div>
  );
};

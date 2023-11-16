"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="min-h-full py-6">
      <div className="max-w-custom px-8 m-auto flex flex-col gap-y-8 items-center justify-center">
        <h2 className="text-7xl text-center font-bold">
          Write, plan, share.
          <span className="block">With AI at your side.</span>
        </h2>
        <span className="text-2xl text-semibold">
          Notion is the connected workspace where better, faster work happens.
        </span>
        <picture style={{ maxWidth: "650px"}} className="w-100 m-auto px-">
          <Image
            style={{ width: "100%",objectFit:"contain" }}
            alt="Cotion"
            width={100}
            height={100}
            loading="lazy"
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=2048/https://images.ctfassets.net/spoqsaf9291f/3csRrNi1u82ymVlwjfo2E6/02516e52af15501acd822d3e7a03baf9/home-hero.png"
          />
        </picture>
      </div>
    </div>
  );
};

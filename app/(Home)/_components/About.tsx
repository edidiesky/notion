"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
const icons = [
  "https://images.ctfassets.net/spoqsaf9291f/6dIueLe6mDK6HhNObFq2On/a6cd5c6aa443fe0fc69386522acf7b70/amazon.png",
  "https://images.ctfassets.net/spoqsaf9291f/6WgTu82608DIXfxu9KliYL/326d36bbde762fd9c1800872db81244c/pinterest.png",
  "https://images.ctfassets.net/spoqsaf9291f/2VtWKmfmToo8n3X7BY0WwA/ccdcd719ee3bc3fa76148eae11d97c51/nike.png",
  "https://images.ctfassets.net/spoqsaf9291f/3o80U1VqLr5X1nE4kWlZM5/7d1493bad9ba1bd0adf0cf21b6751dd2/uber.png",
  "https://images.ctfassets.net/spoqsaf9291f/18DMuU2Os0OAYiJxqU3aE7/3f2d9ce2c5761513c4f34f41cf85b028/Screen_Shot_2022-09-27_at_11.11_3.png",
  "https://images.ctfassets.net/spoqsaf9291f/346udUCJm76OzP8M0yI78w/81099c4f771df9286782581fe18d0efc/snowflake.png",
  "https://images.ctfassets.net/spoqsaf9291f/xDZNk5XtOxMEiqsiJ6paq/c9958ceead0fb85872449d26186d62b1/headspace__1_.png",
  "https://images.ctfassets.net/spoqsaf9291f/4r1tX1hoz2RZigBJYbFbBJ/37e1dc9aa41342497d3e35a31649b2ae/angel-list.png",
  "https://images.ctfassets.net/spoqsaf9291f/4AmP2cmuZ2kUwbeSw3ukj9/91ee33f40debced0e8188a0847cb65af/robinhood_logo.png",
  "https://images.ctfassets.net/spoqsaf9291f/1jlyWNfa8mnYxJtmzu5lpV/4072e10330206f9057fe77ab19ce1bca/doordash.png",
  "https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/c70d8752079a40241d08ec85dac5f93d/figma-logo.png",
];
export const About = () => {
  return (
    <div className="w-100 py-20 flex flex-col gap-y-16">
      <div className="max-w-custom px-8 m-auto flex flex-col gap-y-4 items-center justify-center">
        <h2 className="text-5xl text-center font-bold">
          Millions run on Cotion every day
        </h2>
        <span className="text-lg w-7/12 m-auto text-center text-text_dark_2 text-bold">
          Powering the world’s best teams, from next-generation startups to
          established enterprises.
        </span>
        <span className="flex cursor-pointer item-center gap-x-4 text-text_blue_1">
          Read Customer Support
        </span>
        <div className="flex m-auto justify-center py-8 item-center flex-wrap gap-x-6 gap-y-12 w-full md:w-1/2 sm:w-full">
          {icons?.map((x: string) => {
            return (
              <Image
                src={x}
                alt={"image_icons"}
                width={100}
                loading="lazy"
                height={100}
              />
            );
          })}
        </div>
      </div>
      <div className="max-w-custom px-8 m-auto flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center justify-center gap-x-8">
          <h2 className="text-5xl text-center font-bold">
            Consolidate <span className="block"> Cut costs.</span>
          </h2>
          <picture className="w-full">
            <Image
              alt={"image_icons"}
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=256/front-static/pages/home/giant-pencil-illustration.png"
              style={{ width: "200px" }}
              width={0}
              sizes="100vw"
              height={0}
              loading="lazy"
            />
          </picture>
        </div>

        <div className="flex w-full justify-center py-8 flex-col gap-y-10">
          <picture className="w-full flex items-center justify-center">
            <Image
              className="w-full"
              alt={"image_icons"}
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/tools-before-notion-V2.png"
              style={{ width: "650px" }}
              width={0}
              sizes="100vw"
              height={0}
              loading="lazy"
            />
          </picture>
          <p className="text-2xl w-9/12 m-auto text-text_dark_2 text-center text-bold">
            We got rid of nearly a dozen different tools because of what Notion
            does for us.
          </p>
          <div className="flex items-center justify-center gap-x-6">
            <picture className="">
              <Image
                alt={"image_icons"}
                src="https://www.notion.so/cdn-cgi/image/format=webp,width=128/front-static/shared/logos/color/metalab.png"
                style={{ width: "120px" }}
                width={0}
                sizes="100vw"
                height={0}
                loading="lazy"
              />
            </picture>
            <h4 className="text-sm text-grey">
              Justin Watt
              <span className="block text-md font-bold">
                Director of Ops & Marketing, MetaLab
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

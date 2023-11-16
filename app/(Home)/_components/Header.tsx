"use client";

import Logo from "@/assets/svg/logo";
import { Button } from "@/components/ui/button";

const headerlist = ["Product", "Download", "Solutions", "Resources", 'Pricing'];
export const Header = () => {
  return (
    <div className="py-6 sticky top-0 bg-white backdrop-filter backdrop-blur-md">
      <div className="w-full px-8 m-auto flex items-center">
        <div className="flex items-center gap-x-4">
          <Logo />
          <ul className="hidden items-center gap-x-4 lg:flex">
            {headerlist.map((x?: any, index?: any) => {
              return (
                <li
                  key={index}
                  className="text-sm cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-md font-medium"
                >
                  {x}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-1 flex item-center justify-end">
          <ul className="flex items-center justify-between gap-x-3 sm:gap-x-4">
            <li className="text-sm cursor-pointer hover:bg-gray-100 py-1 px-3 rounded-md font-medium">
              Request a demo
            </li>
            <li className="text-sm cursor-pointer hover:bg-gray-100 py-1 px-3 rounded-md font-medium">
              Log in
            </li>
            <Button size="sm">Get Cotion free</Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

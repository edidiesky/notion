"use client";

import Logo from "@/assets/svg/logo";
import { Button } from "@/components/ui/button";

const headerlist = ["Product", "Download", "Solutions", "Resources", 'Pricing'];
export const Header = () => {
  return (
    <div className="w-100 py-6 sticky top-0">
      <div className="w-full px-8 m-auto flex items-center">
        <div className="flex-1">
          <ul className="flex items-center gap-x-4">
            <Logo/>
            {
              headerlist.map((x?:any, index?:any)=> {
                return (
                  <li key={index} className="text-sm hover:bg-gray-100 py-2 px-3 rounded-md font-medium">
                    {x}
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div className="flex-1 flex item-center justify-end">
          <ul className="flex items-center justify-between gap-x-6">
            <li className="text-sm hover:bg-gray-100 py-1 px-3 rounded-md font-medium">
              Request a demo
            </li>
            <li className="text-sm hover:bg-gray-100 py-1 px-3 rounded-md font-medium">
              Log in
            </li>
            <Button size="sm">Get Cotion free</Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Header } from './_components/Header';

export default function Home() {
  return (
    <div className="w-100 min-h-full">
       <div className="flex flex-col gap-y-8 ">
        <Header/>
       </div>
    </div>
  );
}

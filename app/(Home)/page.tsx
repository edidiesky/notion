import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Header } from './_components/Header';
import { Hero } from './_components/Hero';
import { About } from './_components/About';

export default function Home() {
  return (
    <div className="w-full min-h-full">
      <div className="flex flex-col gap-y-8 ">
        <Header />
        <Hero />
        <About />
      </div>
    </div>
  );
}

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Header } from '../_common/Header';
import { Hero } from './_components/Hero';
import { About } from './_components/About';
import { Newsletter } from './_components/Newsletter';
import { Movement } from './_components/Movement';

export default function Home() {
  return (
    <div className="w-full min-h-full">
      <div className="flex flex-col gap-y-8 ">
        <Header />
        <Hero />
        <About />
        <Movement/>
        <Newsletter/>
      </div>
    </div>
  );
}

import Head from 'next/head'
import Typography from '@/Atoms/Typography'
import DarkLightSwitch from '@/Atoms/DarkLightSwitch'
import Table from '@/Atoms/me'
import Container from '@/Containers/PageContainer'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Stacks from '@/Molecules/Stacks'
import FullPortfolio from 'components/Organism/FullPortfolio'
import Bio from 'components/Organism/Bio'

declare global {
  interface Window {
    BugController: any; // You can also specify the specific type for the BugController constructor function here
    SpiderController: any;
  }
}

let counter = 0;

export default function Home({toggleTheme, theme}:any) {
  const [bugController,setBugController] = useState<any>(null);
  const [showCursor, setShowCursor] = useState(true);


  useEffect(() => {
    if(counter<1&&theme=='light') {
      const flyBug = new window.BugController({'minBugs':4, 'maxBugs':8})
      const spiderBug = new window.SpiderController({'minBugs':1, 'maxBugs':3})
      setBugController({fly: flyBug, spider: spiderBug});
      counter++;
      console.log("init")
    }else{
      if(bugController){
        bugController.fly.end();
        bugController.spider.end();
      }
      counter = 0;
    }
  },[theme]);


  return (
    <Container>
      <div className='flex justify-between'>
        <div className='flex cursor-pointer'>
          <Image src="/logo.svg" alt="" width={30} height={30} />
          <span className='ml-2 leading-10'>Orly Ph</span>
        </div>
        {/* <Typography>Hello World!</Typography> */}
        <div className='flex gap-x-2'>
            {/* <a className='group transition duration-300' href='/resume/index.html'>
              <div className=''>resume</div>
              
              <span className="block max-w-full group-hover:bg-slate-500 transition-all duration-500 h-0.5 bg-slate-600"></span>
            </a> */}
           <DarkLightSwitch toggleTheme={toggleTheme} />
        </div>
      </div>
      <div>
        <div className='max'>
          <FullPortfolio />
        </div>
      </div>
      <div className='text-center m-5'>
      © 2023 Orly Ph. All Rights Reserved.
      </div>
    </Container>
  )
}

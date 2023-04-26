import Head from 'next/head'
import Typography from '@/Atoms/Typography'
import DarkLightSwitch from '@/Atoms/DarkLightSwitch'
import Table from '@/Atoms/me'
import Container from '@/Containers/PageContainer'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Stacks from '@/Molecules/Stacks'
import Experience from 'components/Organism/Experience'
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
            <a className='group transition duration-300' href='/resume/index.html'>
              <div className=''>resume</div>
              
              <span className="block max-w-full group-hover:bg-slate-500 transition-all duration-500 h-0.5 bg-slate-600"></span>
            </a>
           <DarkLightSwitch toggleTheme={toggleTheme} />
        </div>
      </div>
      <div>
        <div className='relative'>
          <Image className='m-auto' src="/me2.png" alt="" width={400} height={400} />
          {
            theme === 'light' &&
            <div className="flex items-end mb-4 absolute" style={{top: '130px', right: 0}}>
              <div className="px-4 py-2 rounded-lg bg-gray-300 text-gray-800 border-r-8 border-gray-300">
                <p className="text-sm">Light attracts bug!</p>
              </div>
            </div>
          }

        </div>

        <div className='max-w-md m-auto' style={{minHeight: "91px"}}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
              .changeDelay(50)
              .typeString('Orly is an Electronics Engineer and a full-stack cucumber')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(100)
                .deleteChars(8)
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .typeString(' developer from philippines. He constantly learn new technologies and specially using it to solve real-life problems. Outside of work he loves playing music and hanging out with his family and friends.')
                .callFunction(() => {
                  setShowCursor(false);
                })
                .start();
            }}
          />
          {/* {`Orly is an Electronics Engineer and a full-stack developer from philippines. He constantly learn new technologies and
          specially using it to solve real-life problems. Outside of work he loves playing music and hanging
          out with his family and friends.
          `} */}
        </div>
        <div className='max'>
          <Stacks theme={theme} />
          <Experience />
          <Bio />

        </div>
      </div>
      <div className='text-center m-5'>
      © 2023 Orly Ph. All Rights Reserved.
      </div>
    </Container>
  )
}

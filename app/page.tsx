import Image from 'next/image';
import dress from 'public/images/home/dress-2.jpg';
import ucla from 'public/images/home/ucla.jpg';
import basketball from 'public/images/home/basketball.png';
import car from 'public/images/home/IMG_8143.jpg';


import { Suspense } from 'react';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}


async function BlogLink({ link, name }) {
  return (
    <a
      href={link}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex flex-col">
        <p className="font-semibold text-neutral-900 dark:text-neutral-100">
          {name}
        </p>
      </div>
      <div className="text-neutral-700 dark:text-neutral-300">
        <ArrowIcon />
      </div>
    </a>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
      👋 Hi, I'm Ashley Cheng
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm passionate about full-stack development and natural language processing, driven by the goal of making technology accessible and impactful. 
        Currently studying computer science at UCLA. `}
      </p>

      <div className="columns-3 gap-4 my-8">
       
        <div className="relative h-80 mb-4 ">
          <Image
            alt=""
            src={dress}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
          
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt=""
            src={car}
            fill
            sizes="(max-width: 768px) 283px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 ">
          <Image
            alt=""
            src={basketball}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
       
      </div>
      <div className="prose prose-neutral dark:prose-invert">
  <h1 className="font-semibold text-2xl tracking-tighter">
    Currently:
  </h1>

  <h2 className="font-semibold text-2xl ml-4 tracking-tighter underline-text">
    Software Developer @ Finterview
  </h2>
  <p className="ml-4">
    Working on bringing accessible Finance interview prep to undergraduate students with UCLA's DevX.
  </p>

  <h2 className="font-semibold text-2xl ml-4 tracking-tighter underline-text">
    Advocacy Officer @ Upsilon Pi Epsilon
  </h2>
  <p className="ml-4">
    Organizing equity, diversity, and inclusion initiatives for the UCLA computer science community.
  </p>

  <h1 className="font-semibold text-2xl tracking-tighter">
    Previously:
  </h1>

  <h2 className="font-semibold text-2xl ml-4 tracking-tighter underline-text">
    Software Developer @ Foresight Automation
  </h2>
  <p className="mb-6 ml-4">
    Created a chatbot for quick and easy customer service.
  </p>

  <h2 className="font-semibold text-2xl ml-4 tracking-tighte underline-text">
    Data Analytics @ Taco Bell
  </h2>
  <p className="mb-6 ml-4">
    Analyzed sales trends to inform decisions on marketing campaigns.
  </p>
</div>

      <div className="my-8 flex flex-col space-y-4 w-full">
        <Suspense>
          <BlogLink
            name="Warrior Unified"
            
            link="https://www.warriorunified.com/"
          />
        </Suspense>
        <Suspense>
          <BlogLink
            name="Resume"
            link="https://drive.google.com/file/d/1yVUYK9hEy1alrKfbawWwxuqonopYoVmq/view?usp=sharing"
          />
        </Suspense>
      </div>
      
      
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/ashleykcheng/"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">connect with me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ashleykcheng"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">github</p>
          </a>
        </li>
      </ul>
     
    </section>

  );
}

import React, { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SocialLink from '@/components/SocialLink';
import SkilCard from '@/components/SkilCard';


const About = () => {


  const [profileData, setProfileData] = useState(null);
  const [followers, setFollowers] = useState([]);


  useEffect(() => {
    const token = "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";
    const headers = {
      Authorization: `token ${token}`,
    };

    fetch('https://api.github.com/users/dev-aditya-lab', { headers })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setProfileData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const token = "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";
    const headers = {
      Authorization: `token ${token}`,
    };

    fetch('https://api.github.com/users/dev-aditya-lab/followers', { headers })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setFollowers(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  // console.log(followers);
  // console.log(profileData);


  return (
    <>
      <div>
        <div className='bg-black h-fit text-white md:px-5 pb-10'>
          <div className={`bg-slate-800 border border-slate-600 min-h-56 rounded-md lg:flex items-center px-5 py-5 gap-10`}>
            <div className={``}>
              <div className='h-44 w-44'>
                <img className={`rounded-full h-fit w-fit mx-auto border-2 `} src={profileData?.avatar_url} alt="Aditya profile image" />
              </div>
            </div>
            <div className={``}>
              <h1 className={`md:text-6xl text-4xl font-semibold py-2 flex items-baseline`}>{profileData?.name} <img className='md:h-10 h-5 px-2 animate-pulse' src="/vite.svg" alt="" /></h1>

              <p className={`text-md text-zinc-500`}>{profileData?.bio}</p>

              <div className='mt-5'>
                <SocialLink />
              </div>
            </div>
          </div>
          <div>
            <div className='py-3 flex items-center gap-3'>
              <div className="h-2 w-2 bg-violet-700 rounded-full border border-gray-400 shadow-[0px_0px_150px_10px_#f56565] animate-ping"></div>
              <h1 className='text-blue-300 font-bold text-xl'>About</h1>
            </div>
            <Accordion className='border border-gray-700 rounded-md px-3' type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className='text-blue-300 font-bold '>About My self...</AccordionTrigger>
                <AccordionContent>
                  <p className='text-justify font-thin md:px-5 px-2'>Hi, I'm Aditya Kr. Gupta, a passionate BTech student at Government Engineering College, Ramgarh. With a solid foundation in coding and a deep interest in software development, I thrive on solving complex problems and creating innovative digital solutions. I have hands-on experience with various technologies, including HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, and MongoDB, which I actively use to build modern web applications.
                    <br /><br />
                    I’ve also worked with tools like Figma, Android Studio, and VS Code to design and develop user-centric applications. My technical journey began during my diploma in Electrical and Electronics Engineering from Birla Institute of Technology, Mesra, where I discovered my passion for coding.
                    <br /><br />
                    For me, coding isn’t just a skill—it’s a creative outlet that pushes me to continuously learn and grow. I’m always looking to collaborate with other like-minded individuals, contribute to exciting projects, and make a meaningful impact in the tech world.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className='py-3 flex items-center gap-3'>
            <div className="h-2 w-2 bg-violet-700 rounded-full border border-gray-400 shadow-[0px_0px_150px_10px_#f56565]"></div>
            <h1 className='text-blue-300 font-bold text-xl'>GitHub</h1>
          </div>
          <div className='px-5'>
            <h1> <span className='font-bold text-2xl'>{profileData?.login}</span></h1>
            <div className='py-5 lg:flex lg:items-center '>
              <div className='flex justify-evenly lg:w-3/4'>
                <div className='h-24 w-20 bg-slate-800 rounded-md border border-slate-500 flex flex-col gap-2 items-center justify-center'>
                  <h1 className='font-bold text-3xl text-zinc-500'>{profileData?.public_repos}</h1>
                  <p className='font-thin text-sm text-zinc-400'>Repos</p>
                </div>
                <div className='h-24 w-20 bg-slate-800 rounded-md border border-slate-500 flex flex-col gap-2 items-center justify-center'>
                  <h1 className='font-bold text-3xl text-zinc-500'>{profileData?.followers}</h1>
                  <p className='font-thin text-sm text-zinc-400'>followers</p>
                </div>
                <div className='h-24 w-20 bg-slate-800 rounded-md border border-slate-500 flex flex-col gap-2 items-center justify-center'>
                  <h1 className='font-bold text-3xl text-zinc-500'>{profileData?.following}</h1>
                  <p className='font-thin text-sm text-zinc-400'>following</p>
                </div>
              </div>
              <div className='flex flex-col gap-2 my-3 lg:my-0'>
                <a className='bg-slate-800 py-1 px-5 rounded-md border text-center border-slate-400' href="https://github.com/dev-aditya-lab" target='_blank'>Follow on GitHub</a>
                <a className='bg-slate-800 py-1 px-5 rounded-md border border-slate-400 text-center' href="https://github.com/dev-aditya-lab?tab=repositories" target='_blank'>View Repositories</a>
              </div>
            </div>
          </div>

          <div className='px-5'>
            <h1>My followers</h1>
            <div className='flex flex-wrap py-3'>
              {
                followers.map((user, i) => {
                  return (<Avatar key={i}>
                    <AvatarImage src={user.avatar_url} />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>)
                })
              }
            </div>
          </div>

          <div>
            <div className='py-3 flex items-center gap-3'>
              <div className="h-2 w-2 bg-violet-700 rounded-full border border-gray-400 shadow-[0px_0px_150px_10px_#f56565]"></div>
              <h1 className='text-blue-300 font-bold text-xl'>Technologies and Tools</h1>
            </div>
            <div className='px-5'>
            <p>Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.</p>
            <div className='flex flex-wrap md:justify-evenly justify-around md:gap-5 gap-2 py-5'>
              <SkilCard/>
            </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About
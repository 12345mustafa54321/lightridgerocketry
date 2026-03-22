/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Rocket, Users, Image as ImageIcon, Calendar, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const TEAM_MEMBERS = [
  {
    name: "Atul Vikram",
    role: "President",
    bio: "I’m the president of the Light Ridge High School Rocketry Club, leading our team in designing, building, and launching rockets while securing funding and growing our program.",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SQe4cqQ0utFV8QX8Z8jXRZ8H5JO-KeVf9Dua9ees0OEb5a9xfBxMeghSeHlfaOKscRjob6u516YV1xvGnLnQRxIre0ez7TCT-ZOgWFPS1Tue_0A130xIW1WD0FIC0F3UebS-sEE7EJYZEQoR2qeJNm8UN4MEPiW_rijKrnfZDSFsb1sonw9a7w5KxzPOoP3GjbeOueFV1XctdulkPPOWCftbfxRAwQToILZmoc=w1280"
  },
  {
    name: "Prabh Deol",
    role: "Outreach Coordinator",
    bio: "I’m Prabh Deol and I am one of the officers of Lightridge Rocketry. I’m always willing to contribute to our club and help us succeed. In my free time I like to hang out with my friends and go fishing.",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SRx1tHBfFE3ak8IWR2O3jhNOX1V0FA1dMTGVAk7zGIv_QlnfFuPqubmTQetyNpZ-hMlytJbe72EGIk_Ru3ICAYStOKNPNSEzhDVWLIsE9ca1dx30PFUMGUFXBDCvJXRvaKcoer0SBp7Y_e93TPJ7SFPHy2B4jJzG-eDX8Ib-j1f88iH9UVg9TWhEMsCgAN5BxVQXRq5iBUVVjx-QJmMe-SXMrq_GdPvKF2b=w1280"
  },
  {
    name: "Ishnoor Chandi",
    role: "Technology Coordinator",
    bio: "My name is Ishnoor and I am deeply interested in aerospace. In my free time, I like to learn about aerospace history and research future missions that are currently under development.",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSUK7lvyJ_WzFiAfb8-wtvrbbPtGT4kE0PSp7uGo-AmC4sknHOjvjT--iHO8RDbzg6XerXqqHgCGhd_BDN51QxBRZ5T5GDNYPnmgHAepHH_UR5l7p3SQ8VbnELn1aAoWZeXAmlnf38hK75smz6BEGz8jpONGXWGJzVWmw_WXUj90_IJhqAVe5KXCASoGgcYzmaiob4YVOx7Fetryvhvssngi5goHsk7FFcj=w1280"
  },
  {
    name: "Mihir Joshi",
    role: "Treasurer",
    bio: "I’m currently a sophomore who began this club with my friends in order to inspire future rocketeers, share my love of model rocketry, and channel one of my favorite hobbies into my academics.",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSRJlEE0LgClkz7v429xUmvMywSXehJuQRgY0M8KFYjFnAQwKA45vQtV5YfMCV-ATPj5NhgTabO5bvz8wF9-4yFbpZff4mOUzTzL3U9jkR9gNmhmRbIKgy4bAAv1ZKbmwnk2rPLVqBDOzKWkLvl63vmJjO6XMlCrCPECBy4zOL9UzF-z3Z5GRi3eAn33E8YUoMgHJyJWY9Z4VaC03kfX5sWJgwB95rjFWdXZCM=w1280"
  },
  {
    name: "Rithivk Annam",
    role: "Meeting Coordinator",
    bio: "I work as a leader within the group to establish and maintain meetings, to allow for the club to meet and discuss further success.",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSSppZR3xo4u2Ky0j8OgaX1iVUVY0EY1b3uwZo4SQZsoL6CDn8R_Srlyg5sZtwjV4KilmHjX1z7qvX-g76yrB6vMykFZVmbuO-208NpgKJ5796bEs4UvKzTmvcSo-d71ptlBL06L0uHdCUMXhad5w184-TkP8plhPoh0U3k-xRIw3YkipOWeFgCHFTgaYRxRbLQJMeyk4qqFeKihzOpaZXQGBdcGYXMxbf2ptM=w1280"
  },
  {
    name: "Mekyle Alam",
    role: "Business Specialist",
    bio: "I'm Mekyle Alam, I focus on securing sponsorships, managing partnerships, and supporting the clubs success with whatever needed.",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SRRwYGR9Dkq13BBU5ntn68PcRvmQLz0Dn-iw-5G6pNMwibOfEr-fh3nRnorrMOmikK3kgNV4tqBbkEevSLeCHu0mpPVJjgey-_DglHdeInskDW5UY89uCmXnJ_6jwa7dkjjvReUbM5hC6U11NOekk-TSDnc5F0An9EvWwWiMxK72Hw6S9IH8WQOqtRpz6RPyCnp_UoKtRhkptmvSqorThMFS0rmPxy45og5G5A=w1280"
  }
];

export default function App() {
  const scrollDistRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const skyRef = useRef<SVGImageElement>(null);
  const cloud1Ref = useRef<SVGImageElement>(null);
  const cloud2Ref = useRef<SVGImageElement>(null);
  const cloud3Ref = useRef<SVGImageElement>(null);
  const mountBgRef = useRef<SVGImageElement>(null);
  const mountMgRef = useRef<SVGImageElement>(null);
  const mountFgRef = useRef<SVGImageElement>(null);
  const arrowRef = useRef<SVGPolylineElement>(null);
  const arrowBtnRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    // Parallax Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollDistRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    });

    tl.fromTo(skyRef.current, { y: 0 }, { y: -200 }, 0)
      .fromTo('.cloud1', { y: 100 }, { y: -800 }, 0)
      .fromTo(cloud2Ref.current, { y: -150 }, { y: -500 }, 0)
      .fromTo(cloud3Ref.current, { y: -50 }, { y: -650 }, 0)
      .fromTo(mountBgRef.current, { y: -10 }, { y: -100 }, 0)
      .fromTo(mountMgRef.current, { y: 0 }, { y: -250 }, 0)
      .fromTo(mountFgRef.current, { y: 10 }, { y: -600 }, 0);

    // Fade out the fixed parallax section when reaching the content
    gsap.to(mainRef.current, {
      scrollTrigger: {
        trigger: '#content-start',
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      },
      opacity: 0,
      pointerEvents: 'none',
      display: 'none'
    });

    // Arrow Button Interactions
    const arrowBtn = arrowBtnRef.current;
    if (arrowBtn) {
      const onEnter = () => {
        gsap.to(arrowRef.current, { y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto' });
      };
      const onLeave = () => {
        gsap.to(arrowRef.current, { y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
      };
      const onClick = () => {
        gsap.to(window, { scrollTo: window.innerHeight, duration: 1.5, ease: 'power1.inOut' });
      };

      arrowBtn.addEventListener('mouseenter', onEnter);
      arrowBtn.addEventListener('mouseleave', onLeave);
      arrowBtn.addEventListener('click', onClick);

      return () => {
        arrowBtn.removeEventListener('mouseenter', onEnter);
        arrowBtn.removeEventListener('mouseleave', onLeave);
        arrowBtn.removeEventListener('click', onClick);
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0f18]">
      <div className="grid-overlay"></div>

      {/* Floating Pill Navigation Bar */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-4">
            <img 
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRBJUlPlFH10cBeaqXVrSxRryrlPoJ13ssIaAoCBuFzoo87hnm1UQNaT53mJT_uJUjhI1uHkc0v6Ul_p3fveYrIHtWPNK1n8gbyVNs8gRn39gbtw9xH5o96aoGYDaRnnLmyn2-dnIBLmYnzJkWMp2bOqetQZj2UGjPNuc2U5f3m1huestouNiTh=w1280" 
              alt="Logo" 
              className="h-10 w-10 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-black text-sm tracking-tighter uppercase hidden sm:block">Lightridge Rocketry</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#leaders" className="mono text-[10px] hover:text-blue-400 transition-colors">Leaders</a>
            <a href="#calendar" className="mono text-[10px] hover:text-blue-400 transition-colors">Calendar</a>
            <a href="#signup" className="bg-white text-black px-5 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all">Join Team</a>
          </div>
        </div>
      </nav>

      {/* Parallax Hero Section */}
      <div ref={scrollDistRef} className="scrollDist"></div>
      <main ref={mainRef} className="parallax-main">
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" className="parallax-svg" preserveAspectRatio="xMidYMid slice">
          <mask id="m">
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800" />
            </g>
          </mask>
          
          <image ref={skyRef} className="sky" xlinkHref="https://lightridgerocketry.vercel.app/bg.webp" width="1422" height="800" />
          <image ref={mountBgRef} className="mountBg" xlinkHref="https://assets.codepen.io/721952/mountBg.png" width="1200" height="800" />    
          <image ref={mountMgRef} className="mountMg" xlinkHref="https://assets.codepen.io/721952/mountMg.png" width="1200" height="800" />    
          <image ref={cloud2Ref} className="cloud2" xlinkHref="https://assets.codepen.io/721952/cloud2.png" width="1200" height="800" />    
          <image ref={mountFgRef} className="mountFg" xlinkHref="https://assets.codepen.io/721952/mountFg.png" width="1200" height="800" />
          <image ref={cloud1Ref} className="cloud1" xlinkHref="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800" />
          <image ref={cloud3Ref} className="cloud3" xlinkHref="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800" />
          
          <text fill="#fff" x="600" y="200" textAnchor="middle" className="parallax-text">LIGHT RIDGE</text>
          <polyline ref={arrowRef} className="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />
          
          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />      
            <text x="600" y="200" fill="#162a43" textAnchor="middle" className="parallax-text">ROCKETRY</text>
          </g>
          
          <rect ref={arrowBtnRef} id="arrow-btn" width="100" height="100" opacity="0" x="550" y="220" style={{ cursor: 'pointer' }} />
        </svg>
      </main>

      {/* Content Sections */}
      <div id="content-start" className="relative z-20 pt-[100vh]">
        
        {/* Centered Rocketry Transition Section */}
        <section className="h-screen flex flex-col items-center justify-center border-x border-white/10 max-w-7xl mx-auto px-8">
          <div className="mono text-blue-500 font-bold mb-8">Mission Start</div>
          <h1 className="text-[18vw] font-black leading-none tracking-tighter uppercase select-none">
            ROCKETRY
          </h1>
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="w-px h-24 bg-gradient-to-b from-blue-500 to-transparent"></div>
            <span className="mono text-gray-500">Scroll to Explore</span>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Mission Section - Editorial Layout */}
        <section className="px-8 py-32 max-w-7xl mx-auto border-x border-white/10">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-7 space-y-12">
              <div className="mono text-blue-500 font-bold">01 / Mission Profile</div>
              <h2 className="text-6xl md:text-8xl font-black leading-[0.85]">
                American <br /> Rocketry <br /> Challenge
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                Lightridge Rocketry is currently gearing up to compete on the national stage, putting our skills, teamwork, and innovation to the test as we aim for success in the largest student rocketry competition in America.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col justify-center">
              <div className="border border-white/10 p-12 bg-white/5 relative group">
                <div className="absolute top-0 right-0 p-4 mono text-white/20">ARC-2026</div>
                <img 
                  src="https://lh3.googleusercontent.com/sitesv/APaQ0SRF4bCQtgpzxGQ5uNPkbEFw4_mnf22YurbySwzJkv2cQZuwLNfxmKbla3svaV6-CYs3Yf1zLLWkvgLj4-zgk8UZkv6OB2Odbb0UlffO1aphUM_a6wYtm3YknJZhty8Y4Ph7LyNMoUQzOLDsTK4ECX_3UwN2VQgDy2IAmyRu87c2fEjnuE3VhtMv=w1280" 
                  alt="ARC Logo" 
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* CTA Section - Bold Brutalist */}
        <section id="signup" className="px-8 py-40 max-w-7xl mx-auto border-x border-white/10 text-center">
          <div className="mono text-blue-500 font-bold mb-12">02 / Recruitment</div>
          <h2 className="text-7xl md:text-9xl font-black mb-12 leading-none">
            IT'S NOT TOO <br /> LATE TO JOIN
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-16 font-medium">
            Fuel your passion for STEM and be part of something big! Whether you’re a beginner or an expert, there’s still time to join the team and launch with us, even this late in the year.
          </p>
          <button className="group inline-flex items-center gap-6 border-2 border-white px-12 py-6 text-xl font-black uppercase hover:bg-white hover:text-black transition-all">
            Join the Crew
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </section>

        <div className="section-divider"></div>

        {/* Leaders Section - Technical Grid */}
        <section id="leaders" className="px-8 py-32 max-w-7xl mx-auto border-x border-white/10">
          <div className="mono text-blue-500 font-bold mb-20">03 / Flight Crew</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="team-card group">
                <div className="aspect-[4/5] overflow-hidden mb-8 border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4">
                  <div className="mono text-blue-500">{member.role}</div>
                  <h4 className="text-3xl font-black uppercase">{member.name}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Calendar - Technical List */}
        <section id="calendar" className="px-8 py-32 max-w-7xl mx-auto border-x border-white/10">
          <div className="mono text-blue-500 font-bold mb-20">05 / Flight Ops</div>
          <div className="space-y-0">
            {[
              { date: 'MAR 28', event: 'Weekly Build Session', time: '4:30 PM' },
              { date: 'APR 05', event: 'Regional Qualifiers', time: '9:00 AM' },
              { date: 'APR 12', event: 'Team Strategy Meeting', time: '5:00 PM' },
            ].map((item, i) => (
              <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 transition-colors px-4">
                <div className="flex items-center gap-12 mb-4 md:mb-0">
                  <div className="w-24">
                    <div className="text-3xl font-black text-white">{item.date.split(' ')[1]}</div>
                    <div className="mono text-gray-500">{item.date.split(' ')[0]}</div>
                  </div>
                  <div className="text-2xl md:text-4xl font-black uppercase group-hover:text-blue-500 transition-colors">{item.event}</div>
                </div>
                <div className="mono text-gray-500">{item.time}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer - Minimalist Technical */}
        <footer className="px-8 py-24 border-t border-white/10 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-16 mb-24">
              <div className="md:col-span-6 space-y-12">
                <div className="flex items-center gap-6">
                  <img 
                    src="https://lh3.googleusercontent.com/sitesv/APaQ0SRBJUlPlFH10cBeaqXVrSxRryrlPoJ13ssIaAoCBuFzoo87hnm1UQNaT53mJT_uJUjhI1uHkc0v6Ul_p3fveYrIHtWPNK1n8gbyVNs8gRn39gbtw9xH5o96aoGYDaRnnLmyn2-dnIBLmYnzJkWMp2bOqetQZj2UGjPNuc2U5f3m1huestouNiTh=w1280" 
                    alt="Logo" 
                    className="h-16 w-16 object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-3xl font-black uppercase tracking-tighter">Lightridge Rocketry</h4>
                    <div className="mono text-gray-500">Flight Operations Center</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 text-gray-400">
                    <MapPin size={20} className="text-blue-500 mt-1" />
                    <div className="text-sm font-medium leading-relaxed">
                      41025 Collaboration Dr, <br />
                      Aldie, VA 20105 <br />
                      Lightridge High School
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 flex flex-col justify-end md:items-end space-y-8">
                <div className="mono text-gray-500 text-right">
                  © {new Date().getFullYear()} All Rights Belong to <br />
                  Lightridge Rocketry Club
                </div>
                <div className="flex gap-8">
                  <a href="#" className="text-gray-500 hover:text-white transition-colors"><Rocket size={24} /></a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors"><Users size={24} /></a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors"><Calendar size={24} /></a>
                </div>
              </div>
            </div>
            <div className="mono text-[10px] text-gray-800 text-center border-t border-white/5 pt-12">
              System Status: Nominal // Launch Window: Open // Mission: Success
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

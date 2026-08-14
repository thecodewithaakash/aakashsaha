import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { NavLink } from "react-router";

function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-label", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-title",
          {
            y: 80,
            opacity: 0,
            duration: 1,
          },
          "-=0.3",
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5",
        )
        .from(
          ".hero-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          ".hero-stack",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">
          <div className="hero-label mb-7 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-400" />
            </span>

            <span className="text-sm font-medium text-zinc-400">
              Available for opportunities
            </span>
          </div>

          <h1 className="hero-title text-6xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl md:text-8xl lg:text-9xl">
            Full-Stack
            <br />
            <span className="text-zinc-500">Developer.</span>
          </h1>

          <p className="hero-description mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            I build scalable web applications and solve interesting engineering
            problems with a focus on clean architecture, performance, and great
            user experiences.
          </p>

          <div className="hero-actions mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-transform duration-200 hover:scale-[1.03]"
            >
              View Projects
              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <NavLink
              to="https://github.com/thecodewithaakash/"
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-800 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:border-zinc-600 hover:text-white"
            >
              <Github size={17} />
              GitHub
            </NavLink>
          </div>

          <div className="hero-stack mt-20 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs uppercase tracking-[0.2em] text-zinc-600">
            <span>MERN</span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span>DSA</span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span>System Design</span>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs text-zinc-600 md:flex">
          <span>Scroll to explore</span>
          <ArrowDown size={15} />
        </div>
      </div>
    </section>
  );
}

export default Hero;

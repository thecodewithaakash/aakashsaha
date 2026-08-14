import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { FaGithub as Github } from "react-icons/fa";
import { NavLink } from "react-router";


gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-header", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".project-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="border-t border-zinc-900 px-6 py-32 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="projects-header mb-16 flex items-center gap-4">
          <span className="font-mono text-xs text-lime-400">03</span>
          <span className="h-px w-10 bg-zinc-800" />

          <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Selected Projects
          </span>
        </div>

        <div className="projects-grid space-y-6">
          {projects.map((project) => (
            <article
              key={project.number}
              className="project-card group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="project-visual relative min-h-[280px] overflow-hidden border-b border-zinc-800 bg-zinc-900 lg:min-h-[400px] lg:border-b-0 lg:border-r">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-3xl transition-all duration-700 group-hover:h-64 group-hover:w-64 group-hover:bg-lime-400/20" />
                  <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950 shadow-2xl transition-transform duration-500 group-hover:-translate-y-[53%]">
                    <div className="flex items-center gap-1.5 border-b border-zinc-800 px-4 py-3">
                      <span className="h-2 w-2 rounded-full bg-red-400/70" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                      <span className="h-2 w-2 rounded-full bg-green-400/70" />
                    </div>

                    <div className="space-y-3 p-5">
                      <div className="h-3 w-2/3 rounded bg-zinc-800" />
                      <div className="h-20 rounded-lg bg-zinc-900" />

                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 rounded bg-zinc-900" />
                        <div className="h-12 rounded bg-zinc-900" />
                        <div className="h-12 rounded bg-zinc-900" />
                      </div>
                    </div>
                  </div>

                  <span className="absolute bottom-6 left-6 font-mono text-xs text-zinc-600">
                    {project.number}
                  </span>
                </div>

                <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-12">
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] text-lime-400">
                        {project.type}
                      </span>

                      <span className="font-mono text-xs text-zinc-600">
                        {project.number}
                      </span>
                    </div>

                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      {project.title}
                    </h2>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-zinc-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-10 flex items-center gap-5">
                    <NavLink
                      to={project.github}
                      className="group/link inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
                    >
                      <Github size={17} />
                      Source
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </NavLink>

                    <NavLink
                      to={project.live}
                      className="group/link inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-lime-400"
                    >
                      Live Demo
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </NavLink>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 max-w-2xl">
          <p className="text-sm leading-7 text-zinc-500">
            These projects represent the kind of work I enjoy: products where
            frontend experience, backend engineering, and system thinking come
            together.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

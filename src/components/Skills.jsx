import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups } from "../data/skills";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-header", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".skill-group", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
        },
      });

      gsap.from(".skill-tag", {
        scale: 0.9,
        opacity: 0,
        duration: 0.4,
        stagger: 0.04,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="border-t border-zinc-900 px-6 py-32 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="skills-header mb-16 flex items-center gap-4">
          <span className="font-mono text-xs text-lime-400">02</span>

          <span className="h-px w-10 bg-zinc-800" />

          <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Skills
          </span>
        </div>

        <div className="skills-grid grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="skill-group bg-zinc-950 p-7 sm:p-8"
            >
              <h3 className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag rounded-full border border-zinc-800 px-3 py-2 text-sm text-zinc-300 transition-colors duration-200 hover:border-lime-400/50 hover:text-lime-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl">
          <p className="text-2xl leading-relaxed tracking-tight text-zinc-300 sm:text-3xl">
            I care about more than making things{" "}
            <span className="text-white">look good.</span>
            <br />
            I want to understand how they{" "}
            <span className="text-lime-400">scale.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;

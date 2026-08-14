import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { ImLinkedin as Linkedin } from "react-icons/im";
import {NavLink} from 'react-router'

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(".contact-header", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".contact-title",
          {
            y: 70,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".contact-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.5"
        )
        .from(
          ".contact-email",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          ".contact-socials",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="border-t border-zinc-900 px-6 py-32 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="contact-header mb-16 flex items-center gap-4">
          <span className="font-mono text-xs text-lime-400">04</span>

          <span className="h-px w-10 bg-zinc-800" />

          <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Contact
          </span>
        </div>

        <div className="max-w-4xl">
          <h2 className="contact-title text-6xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl md:text-8xl">
            Let's build
            <br />
            <span className="text-zinc-500">something.</span>
          </h2>

          <p className="contact-description mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            Have an idea, a project, or just want to talk about engineering?
            I'm always open to interesting conversations.
          </p>

          <NavLink
            to="mailto:codewithaakash7@gmail.com"
            className="contact-email group mt-10 inline-flex items-center gap-3 border-b border-zinc-700 pb-2 text-lg text-white transition-colors hover:border-lime-400 hover:text-lime-400 sm:text-xl"
          >
           codewithaakash7@gmail.com

            <ArrowUpRight
              size={20}
              className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </NavLink>

          <div className="contact-socials mt-10 flex flex-wrap items-center gap-3">
            <NavLink
              to="https://github.com/thecodewithaakash"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-2.5 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
            >
              <Github size={16} />
              GitHub
            </NavLink>

            <NavLink
              to="https://www.linkedin.com/in/aakashsaha-ks/"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-2.5 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
            >
              <Linkedin size={16} />
              LinkedIn
            </NavLink>

            <NavLink
              to="mailto:codewithaakash7@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-2.5 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
            >
              <Mail size={16} />
              Email
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

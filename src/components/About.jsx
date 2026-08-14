import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="border-t border-zinc-900 px-6 py-32 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="about-reveal mb-16 flex items-center gap-4">
          <span className="font-mono text-xs text-lime-400">01</span>

          <span className="h-px w-10 bg-zinc-800" />

          <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            About
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h2 className="about-reveal max-w-3xl text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              I enjoy building products and understanding{" "}
              <span className="text-zinc-500">
                how the systems behind them actually work.
              </span>
            </h2>

            <p className="about-reveal mt-8 max-w-2xl text-base leading-8 text-zinc-400">
              I'm a full-stack developer focused on the MERN ecosystem,
              problem solving, and backend architecture. I like turning
              ambiguous ideas into simple, reliable products.
            </p>

            <a
              href="#contact"
              className="about-reveal mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-lime-400"
            >
              Let's work together
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-1">
            <div className="about-reveal">
              <p className="text-4xl font-semibold tracking-tight text-white">
                2+
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Years building
              </p>
            </div>

            <div className="about-reveal">
              <p className="text-4xl font-semibold tracking-tight text-white">
                15+
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Projects built
              </p>
            </div>

            <div className="about-reveal">
              <p className="text-4xl font-semibold tracking-tight text-white">
                300+
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                DSA problems
              </p>
            </div>

            <div className="about-reveal">
              <p className="text-4xl font-semibold tracking-tight text-white">
                8
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                System design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

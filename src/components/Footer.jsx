import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub  as Github} from "react-icons/fa";
import { ImLinkedin as Linkedin} from "react-icons/im";
import { NavLink } from "react-router";


function Footer() {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-item", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="border-t border-zinc-900 px-6 py-8 lg:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="footer-item">
          <NavLink
            to="#"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Aakash Saha<span className="text-lime-400">.</span>
          </NavLink>
        </div>
        <div className="footer-item flex items-center gap-5">
          <NavLink
            to="https://github.com/thecodewithaakash"
            aria-label="GitHub"
            className="text-zinc-500 transition-colors hover:text-white"
          >
            <Github/>
          </NavLink>

          <NavLink
            to="https://www.linkedin.com/in/aakashsaha-ks/"
            aria-label="LinkedIn"
            className="text-zinc-500 transition-colors hover:text-white"
          >
            <Linkedin  />
          </NavLink>
        </div>

        <div className="footer-item flex flex-col gap-1 text-xs text-zinc-600 sm:items-end">
          <p>Built with React + GSAP</p>
          <p>© 2026 Aakash Saha</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

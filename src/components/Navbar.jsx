
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { NavLink } from "react-router";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={navRef} className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          Aakash saha<span className="text-lime-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <NavLink
            to="https://github.com/thecodewithaakash"
            aria-label="GitHub"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            <FaGithub />
          </NavLink>

          <NavLink
            to="linkedin.com/in/aakashsaha-ks/"
            aria-label="LinkedIn"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            <ImLinkedin />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

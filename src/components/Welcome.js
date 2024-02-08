import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './welcome.css'

const Welcome = () => {
  useEffect(() => {
    if (
      !CSS.supports("animation-timeline: scroll()") &&
      matchMedia("(prefers-reduced-motion: no-preference)")
    ) {
      gsap.registerPlugin(ScrollTrigger);

      const scrub = 0.5;
      const trigger = "main";

      gsap.set("p > span", {
        "--progress": 0,
        backgroundPositionX:
          "calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0",
        color: "transparent",
      });

      gsap.to("p > span", {
        "--progress": 1,
        scrollTrigger: {
          trigger,
          scrub,
          start: "top top",
          end: "top top-=75%",
        },
      });

      gsap.to("p > span", {
        color: "white",
        scrollTrigger: {
          trigger,
          scrub,
          start: "top top-=75%",
          end: "bottom bottom",
        },
      });
    }
  }, []);

  return (
    <div className='container'>
      <header>
        <h1>Welcome</h1>
      </header>
      <main>
        <section>
          <p>
            <span contentEditable={true}>
              main section main sectionmain section main section main section
              main section main section main section main section main section
            </span>
          </p>
        </section>
      </main>
      <footer>
        <h2>footer.</h2>
      </footer>
    </div>
  );
}

export default Welcome;

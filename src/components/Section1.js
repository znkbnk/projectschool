import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../images/pic1.jpg";
import image2 from "../images/pic2.jpg";
import image3 from "../images/pic3.jpg";
import image4 from "../images/pic4.jpg";
import "../styles/section1.css";

function Section1() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function animateFrom(elem, direction) {
      direction = direction || 1;
      var x = 0,
        y = direction * 100;
      if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
      } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
      }
      elem.style.transform = "translate(" + x + "px, " + y + "px)";
      elem.style.opacity = "0";
      gsap.fromTo(
        elem,
        { x: x, y: y, autoAlpha: 0 },
        {
          duration: 1.25,
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: "expo",
          overwrite: "auto",
        }
      );
    }

    function hide(elem) {
      gsap.set(elem, { autoAlpha: 0 });
    }

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          animateFrom(elem);
        },
        onEnterBack: function () {
          animateFrom(elem, -1);
        },
        onLeave: function () {
          hide(elem);
        },
      });
    });
  }, []);

  return (
    <div className='container'>
      <header>
        <h1>Welcome</h1>
      </header>
      <main>
        <section>
          <p>
            <span>
              main section main sectionmain section main section main section
              main section main section main section main section main section
            </span>
          </p>
        </section>
      </main>

      <h1 className='header-section gs_reveal ipsType_center'>Scroll down</h1>

      <div className='features'>
        <div className='feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone'>
          <div className='featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft'>
            <div className='card'>
              <img className='section1-image'  src={image1} alt='' />
            </div>
          </div>

          <div className='ipsGrid_span7 ipsType_left'>
            <h2 className='heading_large gs_reveal'>
              this is first <strong>h2</strong>
            </h2>
            <p className='gs_reveal'>
              loads of text 1 loads of text 1 loads of text 1 loads of text 1{" "}
              loads of text 1 loads of text 1 loads of text 1 loads of text 1
              loads of text 1 loads of text 1 loads of text 1 loads of text 1
              loads of text 1 loads of text 1 loads of text 1 loads of text 1
              loads of text 1 loads of text 1 loads of text 1 loads of text 1
              loads of text 1 loads of text 1 loads of text 1{" "}
            </p>
          </div>
        </div>

        <div className='feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone'>
          <div className='ipsGrid_span7 ipsType_right'>
            <h2 className='heading_large gs_reveal'>
              this is second <strong>h2</strong>
            </h2>

            <p className='gs_reveal'>
              loads of text 2222 loads of text 2222 loads of text 2222 loads of
              text 2222 loads of text 2222 loads of text 2222 loads of text 2222
              loads of text 2222 loads of text 2222 loads of text 2222 loads of
              text 2222 loads of text 2222 loads of text 2222 loads of text 2222
              loads of text 2222
            </p>
          </div>

          <div className='featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight'>
            <div className='card'>
              <img className='section1-image'  src={image2} alt='' />
            </div>
          </div>
        </div>

        <div className='feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone'>
          <div className='featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft'>
            <div className='card'>
              <img className='section1-image'  src={image3} alt='' />
            </div>
          </div>

          <div className='ipsGrid_span7 ipsType_left'>
            <h2 className='heading_large gs_reveal'>
              this is third <strong>h2</strong>
            </h2>
            <p className='gs_reveal'>
              loads of text 33333333 loads of text 33333333 loads of text loads
              loads of text 33333333 loads of text 33333333 loads of text 33
              333333 loads of text 33333333 loads of text 33333333 of text loads
              loads of text 33333333 loads of text 33333333 of text 33333333
              loads of text 33333333 33333333 33333333
            </p>
          </div>
        </div>

        <div className='feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone'>
          <div className='ipsGrid_span7 ipsType_right'>
            <h2 className='heading_large gs_reveal'>
              this is 4th <strong>h2</strong>
            </h2>
            <p className='gs_reveal'>
              text 4 is here text 4 is here text 4 is here text 4 is here text 4
              is here text 4 is here text 4 is here text 4 is here text 4 is
              here text 4 is here text 4 is here
            </p>{" "}
          </div>

          <div className='featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight'>
            <div className='card'>
              <img className='section1-image'  src={image4} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className="last">
        <h2>last</h2>
      </div>
    </div>
  );
}

export default Section1;

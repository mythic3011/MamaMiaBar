import gsap from 'https://cdn.skypack.dev/gsap@3.12.2'
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.2/ScrollTrigger';


import gsap from 'https://cdn.skypack.dev/gsap@3.12.2'
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.2/ScrollTrigger';

if (!CSS.supports('animation-timeline: view()') && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  gsap.registerPlugin(ScrollTrigger)
  // Set up all the scroll animations with ScrollTrigger instead.
  // Blanket styles
  gsap.set('.fixed', {
    position: 'fixed',
    inset: 0,
  })
  gsap.set('.static', {
    position: 'absolute',
    inset: 0,
    zIndex: 6,
  })
  // First section
  gsap.set('section:first-of-type .fixed', {
    transformOrigin: '50% 0%',
  })
  gsap.to('section:first-of-type .fixed', {
    scale: '0.35 0.5',
    yPercent: -10,
    scrollTrigger: {
      scrub: 0.5,
      trigger: 'section:first-of-type',
      start: 'top top',
      end: 'bottom 50%'
    }
  })
  gsap.to('section:first-of-type .fixed', {
    opacity: 0,
    scrollTrigger: {
      scrub: 0.5,
      trigger: 'section:first-of-type',
      start: 'top top',
      end: 'bottom 75%'
    }
  })
  // The second section with image scaling down, etc.
  gsap.set('section:nth-of-type(2) article:first-of-type .fixed', {
    clipPath: 'ellipse(220% 200% at 50% 300%)',
    zIndex: 3,
  })
  gsap.to('section:nth-of-type(2) article:first-of-type .fixed', {
    clipPath: 'ellipse(220% 200% at 50% 175%)',
    scrollTrigger: {
      scrub: 0.5,
      trigger: 'section:nth-of-type(2) article:first-of-type',
      start: 'top bottom',
      end: 'top top',
    }
  })
  gsap.from('section:nth-of-type(2) article:first-of-type img', {
    scale: 5,
    scrollTrigger: {
      scrub: 0.5,
      trigger: 'section:nth-of-type(2) article:first-of-type',
      start: 'top bottom',
      end: 'top top',
    }
  })

  gsap.set('.loud-wrap', {
    clipPath: 'inset(0 0 0 0)',
    mask: 'linear-gradient(white 50%, transparent) 0 100% / 100% 200% no-repeat',
  })
  gsap.set('.text-wrap', {
    position: 'sticky',
    bottom: '4rem',
    transformOrigin: '50% 0',
  })
  gsap.from('section:nth-of-type(2) article:first-of-type h2', {
    yPercent: 100,
    scrollTrigger: {
      scrub: 0.5,
      trigger: 'section:nth-of-type(2) article:first-of-type',
      start: 'top 50%',
      end: 'top 0%',
    }
  })
  gsap.to('section:nth-of-type(2) article:first-of-type .loud-wrap', {
    maskPosition: '0 0',
    scrollTrigger: {
      scrub: 0.5,
      trigger: 'section:nth-of-type(2) article:first-of-type',
      start: 'top 50%',
      end: 'top 0%',
    }
  })
  // Blur the text on exit
  gsap.to('section:nth-of-type(2) article:first-of-type .text-wrap', {
    filter: 'blur(4rem)',
    opacity: 0,
    scrollTrigger: {
      scrub: 0.5,
      trigger: 'section:nth-of-type(2) article:first-of-type',
      start: 'bottom 60%',
      end: 'bottom 25%',
    }
  })

  // Third section
  gsap.set('section:nth-of-type(2) article:nth-of-type(2) .fixed', { zIndex: 3 })
  gsap.from('section:nth-of-type(2) article:nth-of-type(2) .fixed', {
    opacity: 0,
    scrollTrigger: {
      scrub: 0.5,
      trigger: 'section:nth-of-type(2) article:nth-of-type(2)',
      start: 'top 50%',
      end: 'top -30%',
    }
  })
  gsap.from('section:nth-of-type(2) article:nth-of-type(2) h2', {
    yPercent: 100,
    opacity: 0,
    scrollTrigger: {
      scrub: 0.5,
      trigger: 'section:nth-of-type(2) article:nth-of-type(2)',
      start: 'top 50%',
      end: 'top 25%',
    }
  })
  gsap.to('section:nth-of-type(2) article:nth-of-type(2) h2', {
    filter: 'blur(4rem)',
    color: 'transparent',
    scrollTrigger: {
      scrub: 0.5,
      trigger: 'section:nth-of-type(2) article:nth-of-type(2)',
      start: 'bottom bottom',
      end: 'bottom 50%',
    }
  })
  // Fourth
  gsap.set('.filler', {
    display: 'block',
    position: 'absolute',
    bottom: '30vh',
    padding: '1rem',
  })
  gsap.set('section:nth-of-type(2) article:nth-of-type(3)', {
    height: '400vh'
  })
  gsap.set('section:nth-of-type(2) article:nth-of-type(3) .fixed', {
    zIndex: 3
  })
  gsap.set('section:nth-of-type(2) article:nth-of-type(3) h2', {
    marginTop: '80vh'
  })
  gsap.from('section:nth-of-type(2) article:nth-of-type(3) .fixed', {
    opacity: 0,
    scrollTrigger: {
      trigger: 'section:nth-of-type(2) article:nth-of-type(3)',
      scrub: 0.5,
      start: 'top 80%',
      end: 'top top'
    }
  })
  gsap.to('section:nth-of-type(2) article:nth-of-type(3) img', {
    opacity: 0,
    scrollTrigger: {
      trigger: 'section:nth-of-type(2) article:nth-of-type(3)',
      scrub: 0.5,
      start: 'bottom bottom',
      end: 'bottom 85%'
    }
  })
  // Animate the text blocks
  const LINES = document.querySelectorAll('.text-blocks p')
  LINES.forEach((LINE, index) => {
    gsap.from(LINE, {
      yPercent: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: 'section:nth-of-type(2) article:nth-of-type(3)',
        scrub: 0.5,
        start: `top -=${90 + (index * 10)}%`,
        end: `top -=${(100 + (index * 10))}%`,
      }
    })
  })
  gsap.to('.text-blocks', {
    opacity: 0,
    scrollTrigger: {
      trigger: 'section:nth-of-type(2) article:nth-of-type(3)',
      scrub: 0.5,
      start: 'bottom 130%',
      end: 'bottom 110%'
    }
  })
  gsap.to('.filler h2', {
    opacity: 0,
    filter: 'blur(4rem)',
    scrollTrigger: {
      trigger: 'section:nth-of-type(2) article:nth-of-type(3)',
      scrub: 0.5,
      start: 'bottom 55%',
      end: 'bottom 30%'
    }
  })
  // The last piece is unclipping the end piece
  gsap.set('section:nth-of-type(2) article:last-of-type .fixed', {
    clipPath: 'ellipse(220% 200% at 50% 300%)',
    zIndex: 5,
  })
  gsap.to('section:nth-of-type(2) article:last-of-type .fixed', {
    clipPath: 'ellipse(220% 200% at 50% 175%)',
    scrollTrigger: {
      trigger: 'section:nth-of-type(2) article:last-of-type',
      scrub: 0.5,
      start: 'top 80%',
      end: 'top 20%',
    }
  })
}
//
// // Blanket styles
// const fixedElements = document.querySelectorAll('.fixed');
// fixedElements.forEach((element) => {
//     element.style.position = 'fixed';
//     element.style.inset = 0;
// });
//
// const staticElements = document.querySelectorAll('.static');
// staticElements.forEach((element) => {
//     element.style.position = 'absolute';
//     element.style.inset = 0;
//     element.style.zIndex = 6;
// });
//
// // First section
// const firstSectionFixed = document.querySelector('section:first-of-type .fixed');
// firstSectionFixed.style.transformOrigin = '50% 0%';
//
// window.addEventListener('scroll', () => {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     const scrollPercentage = (scrollTop / scrollHeight) * 100;
//
//     // First section animations
//     if (scrollPercentage <= 50) {
//         const scale = 0.35 + (0.5 - 0.35) * (scrollPercentage / 50);
//         const yPercent = -10 * (scrollPercentage / 50);
//         firstSectionFixed.style.transform = `scale(${scale}) translateY(${yPercent}%)`;
//     }
//
//     if (scrollPercentage <= 75) {
//         const opacity = 1 - (1 * (scrollPercentage / 75));
//         firstSectionFixed.style.opacity = opacity;
//     }
//
//     // Second section animations
//     const secondSectionFixed = document.querySelector('section:nth-of-type(2) article:first-of-type .fixed');
//     const secondSectionImage = document.querySelector('section:nth-of-type(2) article:first-of-type img');
//     const clipPathPercentage = 175 + (125 * (scrollPercentage / 100));
//     secondSectionFixed.style.clipPath = `ellipse(220% 200% at 50% ${clipPathPercentage}%)`;
//
//     if (scrollPercentage <= 100) {
//         const scale = 5 - (4 * (scrollPercentage / 100));
//         secondSectionImage.style.transform = `scale(${scale})`;
//     }
// });
//
// // Retrieve the saved language from local storage
// const savedLanguage = localStorage.getItem("language");
//
// // Set the selected language in the dropdown
// const languageSelect = document.getElementById("language");
// if (savedLanguage) {
//     languageSelect.value = savedLanguage;
// }
//
// // Call the changeLanguage function when the page loads
// changeLanguage(languageSelect);
// // Third section animations
// const thirdSectionFixed = document.querySelector('section:nth-of-type(3) .fixed');
// thirdSectionFixed.style.clipPath = 'ellipse(220% 200% at 50% 0%)';
//
// window.addEventListener('scroll', () => {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     const scrollPercentage = (scrollTop / scrollHeight) * 100;
//
//     if (scrollPercentage <= 100) {
//         const scale = 5 - (4 * (scrollPercentage / 100));
//         thirdSectionFixed.style.transform = `scale(${scale})`;
//     }
// });




"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

const InitialLoading: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  const loaderRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Estado inicial garantido
    gsap.set(lineRef.current, { rotate: 90 });
    gsap.set(imgRef.current, { scale: 1 });
    gsap.set(loaderRef.current, { height: "100vh" });

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
        if (loaderRef.current) {
          loaderRef.current.style.display = "none";
        }
      },
    });

    // Timeline com fluidez
    tl.to(imgRef.current, { scale: 0, duration: 0.5, delay: 0.3 })
      .to(lineRef.current, { rotate: 0, duration: 0.6 }, "<")
      .to(lineRef.current, { height: "100%", duration: 1.4 }, ">-0.2")
      .to(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top", duration: 2 },
        ">"
      )
      .to(
        loaderRef.current,
        {
          height: 0,
          duration: 0.6,
          ease: "circ.out",
        },
        "<0.4"
      );
  }, []);

  return (
    <>
      <style jsx global>{`
        .loader-with-curve::after {
          content: "";
          position: absolute;
          width: 150%;
          height: 750%;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          border-radius: 50%;
          background-color: var(--background);
          z-index: 0;
        }
      `}</style>

      <div
        ref={loaderRef}
        className="loader-with-curve h-screen w-full bg-background cursor-wait fixed top-0 left-0 z-50 overflow-hidden"
      >
        <div className="relative z-20 flex h-full w-full items-center justify-center">
          <div
            ref={lineRef}
            className="w-1 h-4 bg-primary absolute m-auto"
          />
          <Image
            ref={imgRef}
            src="/gifs/thomty.gif"
            alt="thomty"
            width={60}
            height={60}
            className="h-24 absolute -top-32 m-auto"
          />
        </div>
      </div>
    </>
  );
};

export default InitialLoading;

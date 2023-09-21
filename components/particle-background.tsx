"use client";

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "@/context/theme-context";

export default function ParticleBackground() {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div className="absolute top-[-6rem] -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            image: `${
              theme === "dark"
                ? "linear-gradient(45deg, #434343, #000000)"
                : "linear-gradient(45deg, #DDDCFF, #7DC4F2)"
            }`,
          },
          fpsLimit: 400,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: ["pause"],
              },
              onHover: {
                enable: true,
                mode: ["grab ", "connect"],
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: `${theme === "dark" ? "#ffffff" : "#000"}`,
            },
            links: {
              color: `${theme === "dark" ? "#fff" : "#000"}`,
              distance: 100,
              enable: true,
              opacity: 0.7,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 1,
              straight: false,
              spin: {
                acceleration: 3,
                enable: false,
                position: {
                  mode: "percent",
                  x: 50,
                  y: 50,
                },
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false,
              },
              random: true,
              value: 1,
            },
            shape: {
              type: ["image"],
              image: [
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png",
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
                },
                {
                  src: "https://static-00.iconduck.com/assets.00/file-type-css-icon-451x512-eftbqujz.png",
                },
                {
                  src: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png",
                },
                {
                  src: "https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png",
                },
                {
                  src: "https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png",
                },
                {
                  src: "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
                },
                {
                  src: "https://static-00.iconduck.com/assets.00/node-js-icon-1901x2048-mk1e13df.png",
                },
                {
                  src: "https://assets.stickpng.com/images/5847f981cef1014c0b5e48be.png",
                },
                {
                  src: "https://static-00.iconduck.com/assets.00/aws-icon-2048x2048-274bm1xi.png",
                },
              ],
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 20,
                sync: false,
              },
              random: true,
              value: 15,
            },
          },
          detectRetina: false,
        }}
      />
    </div>
  );
}

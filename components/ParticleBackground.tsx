import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    // Initialize the particles engine once on mount
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // Load slim version (smaller bundle)
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log("Particles loaded:", container);
    };

    // Particle configuration
    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent", // Transparent so it layers over your background
                },
            },
            fpsLimit: 120, // Frame rate limit
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
                modes: {
                    grab: {
                        distance: 180, // Increased interaction range
                        links: {
                            opacity: 0.8, // Stronger links on hover
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: "#6ee7ff", // Brighter Cyan
                },
                links: {
                    color: "#6ee7ff",
                    distance: 150,
                    enable: true,
                    opacity: 0.3, // More visible connections
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1.5, // Faster movement for "sparky" feel
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 90, // More particles
                },
                opacity: {
                    value: 0.6, // Higher base opacity
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true, // Better rendering on retina displays
        }),
        []
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
                className="absolute inset-0 z-0" // Full screen, behind content
            />
        );
    }

    return null;
};

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
                        mode: "grab", // Lines extend to cursor on hover
                    },
                },
                modes: {
                    grab: {
                        distance: 140, // How far lines extend
                        links: {
                            opacity: 0.5, // Link opacity on hover
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: "#00d4ff", // Particle color (electric cyan)
                },
                links: {
                    color: "#00d4ff", // Connection line color
                    distance: 150, // Max distance for connections
                    enable: true,
                    opacity: 0.15, // Link opacity
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce", // Particles bounce off edges
                    },
                    random: false,
                    speed: 0.5, // Movement speed
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 60, // Number of particles
                },
                opacity: {
                    value: 0.3, // Particle opacity
                },
                shape: {
                    type: "circle", // Particle shape
                },
                size: {
                    value: { min: 1, max: 2 }, // Particle size range
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

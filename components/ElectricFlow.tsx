import React from 'react';

export const ElectricFlow: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Moving Plasma/Energy Beams over the grid */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent-cyan/5 to-transparent animate-pulse-glow opacity-30 transform -skew-y-12 translate-x-[-50%] w-[200%] h-full" />

            {/* Electric Lines */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <style>
                    {`
                        @keyframes flowTop {
                            0% { transform: translateX(-100%); }
                            100% { transform: translateX(100%); }
                        }
                        .electric-line {
                            position: absolute;
                            height: 1px;
                            width: 50%;
                            background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.8), transparent);
                            animation: flowTop 8s linear infinite;
                        }
                    `}
                </style>
                <div className="electric-line top-[15%] left-0 animate-[flowTop_15s_linear_infinite]" />
                <div className="electric-line top-[45%] left-0 animate-[flowTop_10s_linear_infinite_reverse]" />
                <div className="electric-line top-[75%] left-0 animate-[flowTop_20s_linear_infinite]" />
            </div>

            {/* Corner Ambient Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-cyan/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-green/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        </div>
    );
};

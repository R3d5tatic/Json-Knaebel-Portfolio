import React from 'react';

export const ElectricFlow: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Moving Plasma/Energy Beams over the grid */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent-cyan/10 to-transparent animate-pulse-glow opacity-60 transform -skew-y-12 translate-x-[-50%] w-[200%] h-full" />

            {/* Electric Lines */}
            <div className="absolute top-0 left-0 w-full h-full opacity-50">
                <style>
                    {`
                        @keyframes flowTop {
                            0% { transform: translateX(-100%); }
                            100% { transform: translateX(100%); }
                        }
                        .electric-line {
                            position: absolute;
                            height: 2px;
                            width: 60%;
                            background: linear-gradient(90deg, transparent, rgba(110, 231, 255, 0.95), transparent);
                            animation: flowTop 5s linear infinite;
                            box-shadow: 0 0 15px rgba(110, 231, 255, 0.6);
                        }
                    `}
                </style>
                <div className="electric-line top-[15%] left-0 animate-[flowTop_8s_linear_infinite]" />
                <div className="electric-line top-[45%] left-0 animate-[flowTop_6s_linear_infinite_reverse]" />
                <div className="electric-line top-[75%] left-0 animate-[flowTop_10s_linear_infinite]" />
            </div>

            {/* Corner Ambient Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-cyan/15 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-green/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        </div>
    );
};

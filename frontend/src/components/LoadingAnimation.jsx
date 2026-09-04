import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "motion/react"

function LoadingAnimation() {

    const Thinking_Lables = ["Thinking", "Analyzing", "Reasoning", "Generating"]
    const [labelIndex, setLabelIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setLabelIndex((prev) => (prev + 1) % Thinking_Lables.length)
        }, 1800)

        return () => clearInterval(interval)
    }, [])

    const label = Thinking_Lables[labelIndex]

    return (
        <div className='flex items-center gap-3 max-w-[72%] py-2'>

            {/* AI Thinking Orb */}
            <div className='relative w-10 h-10 flex items-center justify-center shrink-0'>

                {/* Outer glow */}
                <div className='absolute inset-0 rounded-full bg-indigo-500/10 blur-xl' />

                {/* Expanding rings */}
                {
                    [0, 0.45, 0.9].map((delay, i) => (
                        <motion.div
                            key={i}
                            className="absolute inset-0 rounded-full border border-cyan-400/25"
                            initial={{
                                scale: 0.3,
                                opacity: 0.55
                            }}
                            animate={{
                                scale: 1.7,
                                opacity: 0
                            }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                delay,
                                ease: "easeOut",
                            }}
                        />
                    ))
                }

                {/* Inner orb */}
                <motion.div
                    className="relative w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-cyan-400/20 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(99,102,241,0.25)]"
                    animate={{
                        rotate: [0, 180, 360],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        rotate: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        scale: {
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                >
                    <motion.span
                        className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-cyan-300 via-indigo-400 to-violet-400"
                        style={{
                            boxShadow:
                                "0 0 8px rgba(103,232,249,0.7), 0 0 18px rgba(129,140,248,0.45)"
                        }}
                        animate={{
                            scale: [1, 1.25, 1]
                        }}
                        transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </div>

            {/* Thinking Label */}
            <div className='flex items-center gap-2 overflow-hidden'>

                <AnimatePresence mode='wait'>
                    <motion.div
                        key={label}
                        className="flex"
                        initial={{
                            opacity: 0,
                            y: 6
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        exit={{
                            opacity: 0,
                            y: -6
                        }}
                        transition={{
                            duration: 0.25,
                            ease: "easeOut"
                        }}
                    >
                        {
                            label.split("").map((ch, i) => (
                                <motion.div
                                    key={i}
                                    className="text-[13px] font-medium tracking-wide bg-gradient-to-r from-slate-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent"
                                    animate={{
                                        opacity: [0.3, 1, 0.3]
                                    }}
                                    transition={{
                                        duration: 1.4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.07,
                                    }}
                                >
                                    {ch}
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </AnimatePresence>

                {/* Animated dots */}
                <div className='flex items-center gap-0.5 ml-0.5'>
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            className='w-1 h-1 rounded-full bg-indigo-400'
                            animate={{
                                opacity: [0.25, 1, 0.25],
                                y: [0, -2, 0]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

            </div>

        </div>
    )
}

export default LoadingAnimation
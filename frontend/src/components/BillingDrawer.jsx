import React from 'react'
import { AnimatePresence, motion } from "motion/react"
import { Crown, X } from 'lucide-react'
import { useSelector } from 'react-redux'
import { createOrder } from '../features/createOrder'
import { verifyPayment } from '../features/verifyPayment'

function BillingDrawer({ open, onClose }) {

    const { userData } = useSelector(state => state.user)

    const handleUpgrade = async (plan) => {
        try {
            const data = await createOrder(plan)
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: data?.order?.amount,
                currency: data?.order?.currency,
                name: "CortexAI",
                description: `${data?.plan?.name} Plan`,
                order_id: data?.order?.id,
                handler: async (response) => {
                    try {
                        const data = await verifyPayment(response)
                        console.log(data)
                    } catch (error) {
                        console.log(error)
                    }
                },
                theme: {
                    color: "#4F46E5"
                }
            }

            const razorpay = new window.Razorpay(options)
            razorpay.open()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AnimatePresence>
            {open && <>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: .5 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black z-40 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: .25 }}
                    className="fixed right-0 top-0 z-50 h-screen w-[380px] bg-[#090C14]/95 backdrop-blur-2xl border-l border-white/[0.08] shadow-[-15px_0_50px_rgba(0,0,0,0.35)] flex flex-col overflow-hidden"
                >

                    {/* Background Glows */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute -top-40 -right-32 w-80 h-80 bg-indigo-600/10 rounded-full blur-[110px]" />
                        <div className="absolute bottom-10 -left-40 w-80 h-80 bg-violet-600/10 rounded-full blur-[110px]" />
                    </div>


                    {/* Header */}
                    <div className='relative flex items-center justify-between p-5 border-b border-white/[0.07] bg-white/[0.015] backdrop-blur-md'>

                        <div>
                            <div className='text-lg font-semibold bg-gradient-to-r from-white via-indigo-100 to-violet-200 bg-clip-text text-transparent'>
                                Billing
                            </div>

                            <div className='text-slate-500 text-sm mt-0.5'>
                                Plans & Credits
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.08] hover:border-white/[0.12] flex items-center justify-center transition-all duration-200"
                        >
                            <X size={18} className="text-slate-400 hover:text-white" />
                        </button>

                    </div>


                    {/* Current Plan */}
                    <div className='relative p-5'>

                        <div className='rounded-2xl bg-gradient-to-br from-indigo-500/[0.10] via-white/[0.03] to-violet-500/[0.08] border border-indigo-500/[0.16] p-4 shadow-[0_10px_35px_rgba(0,0,0,0.18)]'>

                            <div className='flex justify-between items-center'>

                                <div>
                                    <p className='text-slate-500 text-sm'>
                                        Current Plan
                                    </p>

                                    <h3 className='text-white text-xl font-bold mt-1 capitalize'>
                                        {userData?.plan || "free"}
                                    </h3>
                                </div>

                                <div className='flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/15'>
                                    <Crown className='text-yellow-400' size={19} />
                                </div>

                            </div>


                            <div className='mt-5'>

                                <div className='flex justify-between text-xs text-slate-400 mb-2'>
                                    <span>Credits</span>

                                    <span className='text-slate-300'>
                                        {userData.credits || 0}/{userData.totalCredits || 100}
                                    </span>
                                </div>

                                <div className='h-2 rounded-full bg-white/[0.06] overflow-hidden border border-white/[0.04]'>

                                    <div
                                        className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 transition-all duration-500 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.35)]"
                                        style={{
                                            width: `${(
                                                (userData?.credits || 0) /
                                                (userData?.totalCredits || 1)
                                            ) * 100
                                                }%`
                                        }}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Plans */}
                    <div className='relative px-5 flex-1 overflow-auto space-y-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>

                        {/* Starter Plan */}
                        <div className='group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 hover:bg-white/[0.045] hover:border-indigo-500/[0.25] hover:shadow-[0_10px_30px_rgba(99,102,241,0.08)] transition-all duration-200'>

                            <div className='flex items-start justify-between'>
                                <div>
                                    <h3 className='text-white font-semibold'>
                                        Starter Plan
                                    </h3>

                                    <p className='text-slate-500 text-xs mt-1'>
                                        Perfect for getting started
                                    </p>
                                </div>

                                <div className='w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center'>
                                    <ZapIconFallback />
                                </div>
                            </div>

                            <p className='text-indigo-400 text-2xl font-bold mt-4'>
                                ₹199
                            </p>

                            <div className='flex items-center gap-2 mt-1'>
                                <div className='w-1.5 h-1.5 rounded-full bg-indigo-400' />
                                <p className='text-slate-400 text-sm'>
                                    500 Credits
                                </p>
                            </div>

                            <button
                                className='mt-4 w-full rounded-xl bg-gradient-to-r from-indigo-500 via-violet-600 to-purple-700 hover:opacity-90 py-2.5 text-white font-medium shadow-[0_5px_20px_rgba(99,102,241,0.18)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.28)] transition-all duration-200'
                                onClick={() => handleUpgrade("starter")}
                            >
                                Upgrade
                            </button>

                        </div>


                        {/* Pro Plan */}
                        <div className='relative group rounded-2xl border border-violet-500/[0.20] bg-gradient-to-br from-violet-500/[0.08] via-white/[0.025] to-indigo-500/[0.06] p-4 hover:border-violet-500/[0.35] hover:shadow-[0_10px_35px_rgba(139,92,246,0.12)] transition-all duration-200 overflow-hidden'>

                            <div className='absolute top-0 right-0 px-3 py-1 rounded-bl-xl bg-gradient-to-r from-violet-500 to-indigo-500 text-[9px] font-bold text-white uppercase tracking-wider'>
                                Popular
                            </div>

                            <div className='flex items-start justify-between pr-16'>

                                <div>
                                    <h3 className='text-white font-semibold'>
                                        Pro Plan
                                    </h3>

                                    <p className='text-slate-500 text-xs mt-1'>
                                        For serious AI usage
                                    </p>
                                </div>

                                <div className='w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/15 flex items-center justify-center'>
                                    <Crown size={15} className='text-violet-400' />
                                </div>

                            </div>

                            <p className='text-violet-400 text-2xl font-bold mt-4'>
                                ₹499
                            </p>

                            <div className='flex items-center gap-2 mt-1'>
                                <div className='w-1.5 h-1.5 rounded-full bg-violet-400' />

                                <p className='text-slate-400 text-sm'>
                                    1000 Credits
                                </p>
                            </div>

                            <button
                                className='mt-4 w-full rounded-xl bg-gradient-to-r from-violet-500 via-indigo-600 to-purple-700 hover:opacity-90 py-2.5 text-white font-medium shadow-[0_5px_20px_rgba(139,92,246,0.20)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.30)] transition-all duration-200'
                                onClick={() => handleUpgrade("pro")}
                            >
                                Upgrade
                            </button>

                        </div>

                    </div>

                </motion.div>
            </>
            }

        </AnimatePresence>
    )
}


/* UI-only helper component */
function ZapIconFallback() {
    return (
        <div className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.7)]" />
    )
}

export default BillingDrawer
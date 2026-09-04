import { MessageSquare } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'

function Nav() {
    const { selectedConversation } = useSelector(state => state.conversation)
    const { messages } = useSelector(state => state.message)

    return (
        <>
            {selectedConversation &&
                <div className='h-14 flex items-center gap-2.5 px-5 border-b border-white/[0.07] bg-[#090C14]/80 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.15)] relative overflow-hidden'>

                    {/* Subtle top glow */}
                    <div className='absolute inset-0 bg-gradient-to-r from-indigo-500/[0.04] via-transparent to-violet-500/[0.04] pointer-events-none' />

                    <div className='relative flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.10)]'>
                        <MessageSquare size={13} className="text-indigo-400" />
                    </div>

                    <div className='relative text-[14px] font-semibold bg-gradient-to-r from-white via-indigo-100 to-violet-200 bg-clip-text text-transparent tracking-tight truncate max-w-[50%]'>
                        {selectedConversation?.title || "New Chat"}
                    </div>

                    <div className='relative text-[10px] font-medium text-slate-500 bg-white/[0.04] border border-white/[0.07] px-2.5 py-0.5 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.05)]'>
                        {messages?.length} Messages
                    </div>

                </div>
            }
        </>
    )
}

export default Nav
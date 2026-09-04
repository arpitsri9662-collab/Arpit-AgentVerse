import React, { useEffect } from 'react'
import Nav from './Nav'
import MessageList from './MessageList'
import ChatInput from './ChatInput'
import { useDispatch, useSelector } from 'react-redux'
import getMessages from '../features/getMessages'
import { setArtifacts, setMessages } from '../redux/messageSlice'

function ChatArea() {
  const {selectedConversation}=useSelector(state=>state.conversation)
  const dispatch=useDispatch()
  useEffect(()=>{
  const getMesg=async () => {
    
    if(selectedConversation){
      if(selectedConversation.title=="New Chat")return;
const data=await getMessages(selectedConversation?._id)
console.log(data)
      dispatch(setMessages(data))
      const latestArtifactMessage=[...data].reverse().find(msg=>msg.artifacts && msg.artifacts.length>0)
      dispatch(setArtifacts(latestArtifactMessage?.artifacts || []))
    }
    
  }

  getMesg()
  },[selectedConversation?._id])
  return (
    <div className="flex-1 flex flex-col min-w-0 bg-[#080B12] relative overflow-hidden">

  {/* Animated 3D Background */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    <div className="absolute w-[500px] h-[500px] rounded-full 
      bg-indigo-600/20 blur-[100px]
      top-[-180px] left-[20%]
      animate-[spin_18s_linear_infinite]" />

    <div className="absolute w-[450px] h-[450px] rounded-full 
      bg-violet-600/15 blur-[110px]
      bottom-[-180px] right-[-100px]
      animate-[spin_25s_linear_infinite_reverse]" />

    <div className="absolute w-[350px] h-[350px] rounded-full 
      bg-cyan-500/10 blur-[100px]
      top-[35%] left-[45%]
      animate-[pulse_8s_ease-in-out_infinite]" />

    <div className="absolute inset-0
      bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#080B12_75%)]" />

  </div>

  {/* Content */}
  <div className="relative flex flex-col flex-1 min-h-0">
    <Nav/>
    <MessageList/>
    <ChatInput/>
  </div>

</div>
  )
}

export default ChatArea

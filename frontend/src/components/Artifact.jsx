import { Check, Code2, Copy, Eye, PanelRightClose, PanelRightOpen, X } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { AnimatePresence, easeInOut, motion } from "motion/react"
import Editor from '@monaco-editor/react';

function Artifact() {
  const [collapsed, setCollapsed] = useState(false)
  const { artifacts } = useSelector(state => state.message)
  const [tab, setTab] = useState("code")
  const [activeFile, setActiveFile] = useState(0)
  const [copied, setCopied] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  if (artifacts.length == 0) return;



  const file = artifacts[0]?.files[activeFile]
  const htmlFile = artifacts[0]?.files?.find(f => f.name == "index.html")
  const cssFile = artifacts[0]?.files?.find(f => f.name == "style.css")
  const jsFile = artifacts[0]?.files?.find(f => f.name == "script.js")

  const canPreview = Boolean(htmlFile)

  const previewDoc = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
     ${cssFile?.content || ""}
    </style>
</head>
<body>
 ${htmlFile?.content || ""} 
<script>
    ${jsFile?.content || ""}
</script>    
</body>
</html>`


  const handleCopy = async () => {
    await navigator.clipboard.writeText(file?.content || "")
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  const detectLanguage = (fileName = "") => {
    const name = fileName.toLowerCase()

    if (name.endsWith(".html"))
      return "html";

    if (name.endsWith(".css"))
      return "css";

    if (name.endsWith(".js"))
      return "javascript";

    if (name.endsWith(".jsx"))
      return "javascript";

    if (name.endsWith(".ts"))
      return "typescript";

    if (name.endsWith(".tsx"))
      return "typescript";

    if (name.endsWith(".json"))
      return "json";

    if (name.endsWith(".py"))
      return "python";

    if (name.endsWith(".java"))
      return "java";

    if (name.endsWith(".cpp"))
      return "cpp";

    if (name.endsWith(".c"))
      return "c";

    return "plaintext";

  }

  const PanelContent = ({ onClose }) => {
    return (
      <>
        {!collapsed ?

          <div className='relative flex flex-col h-full bg-[#090C14] overflow-hidden'>

            {/* Ambient panel glow */}
            <div className='absolute inset-0 pointer-events-none overflow-hidden'>
              <div className='absolute -top-32 right-[-100px] w-72 h-72 bg-indigo-600/[0.07] rounded-full blur-[100px]' />
              <div className='absolute bottom-[-150px] left-[-100px] w-72 h-72 bg-violet-600/[0.06] rounded-full blur-[110px]' />
            </div>

            {/* Header */}
            <div className='relative h-14 px-4 border-b border-white/[0.07] flex items-center gap-3 shrink-0 bg-white/[0.015] backdrop-blur-xl'>

              <button
                className='flex items-center justify-center w-7 h-7 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/[0.06] border border-transparent hover:border-white/[0.06] transition-all duration-200 bg-transparent cursor-pointer shrink-0'
                onClick={onClose ?? (() => setCollapsed(true))}
              >
                {onClose ? <X size={15} /> : <PanelRightClose size={16} />}
              </button>

              <div className='flex items-center gap-2.5 flex-1 min-w-0'>

                <div className='relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500/20 to-violet-500/10 border border-indigo-500/20 shrink-0 shadow-[0_0_18px_rgba(99,102,241,0.08)]'>
                  <Code2 className="text-indigo-400" size={13} />
                </div>

                <div className='min-w-0'>
                  <div className='text-[13px] font-semibold bg-gradient-to-r from-white via-indigo-100 to-violet-200 bg-clip-text text-transparent truncate'>
                    {artifacts[0]?.title}
                  </div>
                  <div className='text-[9px] text-slate-600 uppercase tracking-wider'>
                    Artifact
                  </div>
                </div>

              </div>

              <div className='flex items-center gap-1 shrink-0'>

                <button
                  onClick={handleCopy}
                  title={copied ? "Copied" : "Copy code"}
                  className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 border cursor-pointer
                    ${copied
                      ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                      : "text-slate-500 hover:text-slate-200 hover:bg-white/[0.06] border-transparent hover:border-white/[0.07]"
                    }`}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>

              </div>

              {canPreview &&
                <div className='flex items-center gap-1 bg-black/20 border border-white/[0.07] p-1 rounded-xl shadow-inner'>

                  <button
                    onClick={() => setTab("code")}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-medium rounded-lg transition-all duration-200 cursor-pointer
                    ${tab === "code"
                        ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-[0_4px_15px_rgba(99,102,241,0.20)]"
                        : "text-slate-500 hover:text-slate-200 hover:bg-white/[0.04]"
                      }`}
                  >
                    <Code2 size={11} />
                    Code
                  </button>

                  <button
                    onClick={() => setTab("preview")}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-medium rounded-lg transition-all duration-200 cursor-pointer
                    ${tab === "preview"
                        ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-[0_4px_15px_rgba(99,102,241,0.20)]"
                        : "text-slate-500 hover:text-slate-200 hover:bg-white/[0.04]"
                      }`}
                  >
                    <Eye size={11} />
                    Preview
                  </button>

                </div>
              }

            </div>

            {/* File tabs */}
            {tab === "code" &&
              <div className='relative flex h-auto border-b border-white/[0.07] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden shrink-0 bg-[#080B12]/70'>

                {
                  artifacts[0]?.files?.map((f, index) => (
                    <button
                      key={f?._id || `${f?.name}-${index}`}
                      onClick={() => setActiveFile(index)}
                      className={`px-4 py-2.5 text-[10px] font-medium whitespace-nowrap transition-all duration-200 border-r border-white/[0.05] relative cursor-pointer bg-transparent
                      ${activeFile === index
                          ? "text-indigo-300 bg-indigo-500/[0.06]"
                          : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.025]"
                        }`}
                    >
                      {f?.name}

                      {activeFile === index &&
                        <div className='absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-indigo-400 via-violet-500 to-cyan-400 rounded-t-full shadow-[0_0_10px_rgba(99,102,241,0.45)]' />
                      }

                    </button>
                  ))
                }

              </div>
            }


            {/* Editor / Preview */}
            <div className='relative flex-1 overflow-hidden'>

              {(tab == "preview" && canPreview) ?

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className='w-full h-full bg-white'
                >
                  <iframe
                    title='preview'
                    srcDoc={previewDoc}
                    sandbox='allow-scripts'
                    className='w-full h-full bg-white'
                  />
                </motion.div>

                :

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className='w-full h-full'
                >
                  <Editor
                    theme='vs-dark'
                    language={detectLanguage(file?.name)}
                    value={file?.content}
                    options={{
                      readOnly: true,
                      minimap: { enabled: false },
                      fontSize: 13,
                      wordWrap: "on",
                      automaticLayout: true,
                      scrollBeyondLastLine: false,
                      padding: { top: 16 },
                      lineNumbers: "on",
                      renderLineHighlight: "none"
                    }}
                  />

                </motion.div>
              }

            </div>

          </div>

          :

          /* Collapsed desktop panel */
          <div className='hidden lg:flex relative h-full border-l border-white/[0.07] bg-[#090C14] flex-col items-center py-4 gap-3 shrink-0 overflow-hidden'>

            <div className='absolute inset-0 pointer-events-none'>
              <div className='absolute top-20 w-20 h-32 bg-indigo-600/[0.06] blur-[50px] rounded-full' />
            </div>

            <button
              className='relative flex items-center justify-center w-8 h-8 rounded-lg text-slate-500 hover:text-indigo-300 hover:bg-indigo-500/[0.08] border border-transparent hover:border-indigo-500/10 transition-all duration-200 bg-transparent cursor-pointer shrink-0'
              onClick={() => setCollapsed(false)}
            >
              <PanelRightOpen size={16} />
            </button>

            <div className='relative flex items-center gap-2 flex-1 min-w-0'>

              <div
                className='text-[9px] font-medium text-slate-600 tracking-[0.18em] uppercase whitespace-nowrap'
                style={{
                  writingMode: "vertical-lr",
                  transform: "rotate(180deg)"
                }}
              >
                {artifacts[0]?.title}
              </div>

            </div>

          </div>
        }
      </>
    )
  }





  return (
    <>

      {/* Mobile View Code button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed bottom-24 right-4 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white text-[11px] font-medium shadow-[0_8px_25px_rgba(99,102,241,0.25)] border border-white/10 cursor-pointer transition-all duration-200"
      >
        <Code2 size={13} />
        View Code
      </button>

      <AnimatePresence>

        {mobileOpen && <>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
            className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.25,
              ease: "easeInOut"
            }}
            className="lg:hidden fixed inset-y-0 right-0 z-50 w-[88vw] max-w-[420px] border-l border-white/[0.07] overflow-hidden shadow-[-15px_0_50px_rgba(0,0,0,0.35)]"
          >
            <PanelContent onClose={() => setMobileOpen(false)} />
          </motion.div>

        </>
        }

      </AnimatePresence>


      {/* Desktop Artifact Panel */}
      <motion.div
        initial={{ width: 400 }}
        animate={{ width: collapsed ? 48 : 400 }}
        transition={{
          duration: 0.25,
          ease: easeInOut
        }}
        className='hidden lg:flex h-full border-l border-white/[0.07] flex-col overflow-hidden shrink-0 shadow-[-8px_0_35px_rgba(0,0,0,0.18)]'
      >

        <PanelContent />

      </motion.div>

    </>
  )
}

export default Artifact
import { Check, Copy, ExternalLink, FileX2, X } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

function MessageBubble({ role, content, images }) {
  const isUser = role === "user"
  const [lightBox, setLightBox] = useState(null)
  const [copiedCode, setCopiedCode] = useState("")

  const copyCode = async (code) => {
    await navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => {
      setCopiedCode("")
    }, 2000)
  }


  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>

      <div className={`w-fit max-w-[92vw] md:max-w-[72%]
  px-4 py-3 rounded-2xl
  break-words overflow-hidden
  leading-relaxed relative
  ${isUser
          ? "bg-gradient-to-br from-indigo-500 via-violet-600 to-purple-700 text-white rounded-tr-sm shadow-[0_8px_25px_rgba(99,102,241,0.16)]"
          : "bg-white/[0.025] backdrop-blur-md border border-white/[0.06] text-slate-200 rounded-tl-sm shadow-[0_6px_25px_rgba(0,0,0,0.12)]"
        }`}>

        {/* Subtle assistant glow */}
        {!isUser && (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.025] via-transparent to-violet-500/[0.025] pointer-events-none rounded-2xl" />
        )}

        <div className="relative">

          {images.length > 0 && (
            <div className='flex flex-wrap gap-3 mt-4'>
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setLightBox(img)}
                  loading="lazy"
                  onError={(e) => e.currentTarget.remove()}
                  className="w-40 h-28 rounded-xl object-cover border border-white/[0.10] cursor-zoom-in hover:opacity-90 hover:scale-[1.02] hover:border-indigo-400/30 transition-all duration-200 shadow-[0_5px_20px_rgba(0,0,0,0.20)]"
                />
              ))}
            </div>
          )}


          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className='text-2xl font-bold mt-5 mb-3 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent'>
                  {children}
                </h1>
              ),

              h2: ({ children }) => (
                <h2 className='text-xl font-semibold mt-4 mb-2 text-slate-100'>
                  {children}
                </h2>
              ),

              h3: ({ children }) => (
                <h3 className='text-lg font-semibold mt-3 mb-2 text-indigo-100'>
                  {children}
                </h3>
              ),

              p: ({ children }) => (
                <p className='mb-3 whitespace-pre-wrap break-words text-slate-200'>
                  {children}
                </p>
              ),

              ul: ({ children }) => (
                <ul className='list-disc pl-5 space-y-1.5 my-2 marker:text-indigo-400'>
                  {children}
                </ul>
              ),

              ol: ({ children }) => (
                <ol className='list-decimal pl-5 space-y-1.5 my-2 marker:text-indigo-400'>
                  {children}
                </ol>
              ),

              table: ({ children }) => (
                <div className='overflow-x-auto my-4 rounded-xl border border-white/[0.08] shadow-[0_5px_20px_rgba(0,0,0,0.15)]'>
                  <table className='min-w-full border-collapse'>
                    {children}
                  </table>
                </div>
              ),

              th: ({ children }) => (
                <th className='border border-white/[0.08] bg-indigo-500/[0.08] px-3 py-2 text-left text-slate-200 font-semibold'>
                  {children}
                </th>
              ),

              td: ({ children }) => (
                <td className='border border-white/[0.07] px-3 py-2 text-slate-300'>
                  {children}
                </td>
              ),

              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 inline-flex items-center gap-1 transition-colors"
                >
                  {children}
                  <ExternalLink size={14} />
                </a>
              ),

              code: ({ className, children }) => {
                const value = String(children).trim()

                if (!className) {
                  return (
                    <code className='px-1.5 py-0.5 rounded-md bg-indigo-500/[0.10] border border-indigo-500/[0.10] text-indigo-200'>
                      {value}
                    </code>
                  )
                }

                const language = className.replace("language-", "")

                return (
                  <div className='my-4 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0B0F17] shadow-[0_8px_30px_rgba(0,0,0,0.20)]'>

                    <div className='flex items-center justify-between bg-[#111827] border-b border-white/[0.07] px-4 py-2.5'>

                      <div className='flex items-center gap-2'>
                        <div className='flex gap-1'>
                          <span className='w-2 h-2 rounded-full bg-red-400/70' />
                          <span className='w-2 h-2 rounded-full bg-yellow-400/70' />
                          <span className='w-2 h-2 rounded-full bg-green-400/70' />
                        </div>

                        <span className='uppercase text-[10px] font-semibold tracking-wider text-slate-500 ml-1'>
                          {language}
                        </span>
                      </div>

                      <button
                        className='flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-300 px-2 py-1 rounded-md hover:bg-white/[0.05] transition-all duration-150'
                        onClick={() => copyCode(value)}
                      >
                        {
                          copiedCode == value ?
                            <>
                              <Check size={14} className="text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </> :
                            <>
                              <Copy size={14} />
                              Copy
                            </>
                        }
                      </button>

                    </div>


                    <SyntaxHighlighter
                      language={language}
                      style={oneDark}
                      wrapLongLines
                      showLineNumbers
                      customStyle={{
                        margin: 0,
                        padding: "16px",
                        background: "#0B0F17",
                        fontSize: "13px",
                        lineHeight: "1.7",
                      }}

                    >
                      {value}
                    </SyntaxHighlighter>


                  </div>
                )
              },

              img: ({ src }) => {
                if (!src) return null;

                return (
                  <img
                    src={src}
                    onClick={() => setLightBox(src)}
                    loading="lazy"
                    onError={(e) => e.currentTarget.remove()}
                    className="w-40 h-28 rounded-xl object-cover border border-white/[0.10] cursor-zoom-in hover:opacity-90 hover:scale-[1.02] hover:border-indigo-400/30 transition-all duration-200 shadow-[0_5px_20px_rgba(0,0,0,0.20)]"
                  />
                )
              }
            }}
          >
            {content}
          </Markdown>

        </div>

      </div>


      {lightBox &&
        <div className='fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6'>

          <button
            className='absolute top-5 right-5 text-white/70 hover:text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.08] rounded-full p-2 transition-all duration-200'
            onClick={() => setLightBox(null)}
          >
            <X />
          </button>

          <img
            src={lightBox}
            className="max-w-[90vw] max-h-[85vh] rounded-2xl border border-white/[0.10] shadow-[0_20px_80px_rgba(0,0,0,0.50)] object-contain"
          />

        </div>
      }

    </div>
  )
}

export default MessageBubble
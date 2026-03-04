import React from 'react';
import { motion } from 'motion/react';
import { Mic, Brain, Database, MessageSquareText, Volume2, ArrowDown } from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      icon: <Mic className="w-6 h-6 text-blue-400" />,
      title: "User Speech",
      desc: "Mixed Sinhala-English audio input"
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: "ASR (Automatic Speech Recognition)",
      desc: "Converts audio to text using a fine-tuned Whisper model"
    },
    {
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      title: "Code-Switching Model",
      desc: "Processes and understands the mixed-language text"
    },
    {
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      title: "RAG Retrieval System",
      desc: "Fetches relevant context from a knowledge base"
    },
    {
      icon: <MessageSquareText className="w-6 h-6 text-orange-400" />,
      title: "LLM Response Generation",
      desc: "Generates a natural, context-aware response"
    },
    {
      icon: <Volume2 className="w-6 h-6 text-pink-400" />,
      title: "TTS (Text-to-Speech)",
      desc: "Converts the text response back into natural-sounding audio"
    }
  ];

  return (
    <section id="methodology" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Research <span className="text-gradient">Methodology</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            A comprehensive pipeline designed to handle Sinhala-English code-switching seamlessly from speech input to speech output.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl flex items-center gap-6 hover:bg-slate-800/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 shadow-inner border border-white/5 relative z-10">
                  {step.icon}
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-white mb-1">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
              
              {idx < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                  className="flex justify-center my-2"
                >
                  <ArrowDown className="w-6 h-6 text-slate-600 animate-bounce" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

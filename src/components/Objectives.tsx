import React from 'react';
import { motion } from 'motion/react';
import { Target, Database, Cpu, Network, Link, Mic } from 'lucide-react';

export default function Objectives() {
  const objectives = [
    {
      icon: <Database className="w-5 h-5 text-blue-400" />,
      title: "Dataset Creation",
      desc: "Create a comprehensive dataset for Sinhala-English code-switching."
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      title: "Model Development",
      desc: "Develop a robust code-switching model capable of processing mixed speech."
    },
    {
      icon: <Network className="w-5 h-5 text-cyan-400" />,
      title: "RAG Architecture",
      desc: "Design a Retrieval-Augmented Generation (RAG) architecture for context."
    },
    {
      icon: <Link className="w-5 h-5 text-emerald-400" />,
      title: "LLM Integration",
      desc: "Connect the code-switching model with a Large Language Model (LLM)."
    },
    {
      icon: <Mic className="w-5 h-5 text-orange-400" />,
      title: "Full Pipeline",
      desc: "Integrate ASR + RAG + TTS into a complete conversational pipeline."
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20 mb-6"
          >
            <Target className="w-4 h-4" />
            Objectives
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Main <span className="text-gradient">Objective</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Develop and evaluate a Sinhala-English code-switching chatbot integrated with a full speech pipeline.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {objectives.map((obj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 w-full">
                  <div className={`glass-panel p-6 rounded-2xl hover:bg-slate-800/50 transition-colors ${
                    idx % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <div className={`w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 ${
                      idx % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'
                    }`}>
                      {obj.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">{obj.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{obj.desc}</p>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 z-10 hidden md:flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

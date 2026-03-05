import React from 'react';
import { motion } from 'motion/react';
import { Check, Clock } from 'lucide-react';

export default function Status() {
  const tasks = [
    { name: "Code-switch dataset creation", status: "completed", progress: 100 },
    { name: "Code-switching model using Whisper", status: "completed", progress: 100 },
    { name: "RAG architecture design", status: "completed", progress: 100 },
    { name: "Chatbot UI development", status: "completed", progress: 100 },
    { name: "Full ASR + RAG + TTS pipeline integration", status: "completed", progress: 100 },
    { name: "Final Research Paper", status: "pending", progress: 20 }
  ];

  return (
    <section className="py-24 relative z-10 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Project <span className="text-gradient">Status</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We have made significant progress in developing the core components of the code-switching chatbot. The foundational models and architecture are complete.
            </p>
            
            <div className="glass-panel p-8 rounded-3xl space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Overall Progress</h3>
                <span className="text-blue-400 font-bold text-xl">85%</span>
              </div>
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {tasks.map((task, idx) => (
              <div key={idx} className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:bg-slate-800/50 transition-colors">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  task.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                  task.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                  'bg-slate-800 text-slate-500 border border-slate-700'
                }`}>
                  {task.status === 'completed' ? <Check className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-sm font-medium ${task.status === 'completed' ? 'text-white' : 'text-slate-300'}`}>
                      {task.name}
                    </span>
                    <span className="text-xs text-slate-500">{task.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${task.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className={`h-full rounded-full ${
                        task.status === 'completed' ? 'bg-emerald-500' :
                        task.status === 'in-progress' ? 'bg-blue-500' :
                        'bg-slate-600'
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Cpu, Code, Settings, Database } from 'lucide-react';

export default function Challenges() {
  const challenges = [
    {
      icon: <Database className="w-6 h-6 text-red-400" />,
      title: "Limited Datasets",
      desc: "Scarcity of high-quality, annotated code-switched datasets for Sinhala-English."
    },
    {
      icon: <Cpu className="w-6 h-6 text-orange-400" />,
      title: "GPU Limitations",
      desc: "High computational requirements for training and running large ASR and LLM models."
    },
    {
      icon: <Code className="w-6 h-6 text-yellow-400" />,
      title: "Python Compatibility",
      desc: "Issues with library versions and dependencies across different environments."
    },
    {
      icon: <Settings className="w-6 h-6 text-pink-400" />,
      title: "Model Optimization",
      desc: "Difficulties in optimizing the models for real-time, low-latency inference."
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-medium border border-red-500/20 mb-6"
          >
            <AlertTriangle className="w-4 h-4" />
            Challenges Faced
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Research <span className="text-gradient">Challenges</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Developing a state-of-the-art code-switching chatbot comes with its own set of unique hurdles.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {challenges.map((challenge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl flex items-start gap-6 hover:bg-slate-800/50 transition-colors border-l-4 border-l-red-500/50 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {challenge.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">{challenge.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{challenge.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

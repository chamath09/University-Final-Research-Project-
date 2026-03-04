import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, MessageSquareX, MonitorX } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <TrendingDown className="w-5 h-5 text-red-400" />,
      title: "Reduced Accuracy",
      desc: "Speech recognition accuracy drops significantly when users switch between Sinhala and English."
    },
    {
      icon: <MessageSquareX className="w-5 h-5 text-orange-400" />,
      title: "Poor Responses",
      desc: "Chatbots fail to understand the context, leading to irrelevant or confusing answers."
    },
    {
      icon: <MonitorX className="w-5 h-5 text-yellow-400" />,
      title: "Limited Usability",
      desc: "Real-world users naturally code-switch, making monolingual bots frustrating to use."
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-medium border border-red-500/20">
              <AlertTriangle className="w-4 h-4" />
              The Problem
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Current chatbots <br />
              <span className="text-slate-500">do not support</span> <br />
              code-switching.
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              Existing Sinhala speech chatbots are trained primarily on monolingual datasets. When a user naturally mixes English words into their Sinhala speech, the system fails to process the input effectively.
            </p>
          </motion.div>

          <div className="space-y-6">
            {problems.map((prob, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl flex items-start gap-6 hover:bg-slate-800/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  {prob.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{prob.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{prob.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

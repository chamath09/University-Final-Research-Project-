import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, MessageSquare, Users } from 'lucide-react';

export default function Outcomes() {
  const outcomes = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-emerald-400" />,
      title: "Code-Switching ASR Model",
      desc: "A robust Sinhala-English code-switching Automatic Speech Recognition model."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-400" />,
      title: "Improved Accuracy",
      desc: "Significantly higher speech recognition accuracy for mixed-language input."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      title: "Natural Conversations",
      desc: "Chatbot responses that feel more natural and contextually aware."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: "Inclusive AI",
      desc: "An inclusive conversational AI system that adapts to how people actually speak."
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Expected <span className="text-gradient">Outcomes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            The tangible results and improvements we aim to achieve through this research project.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((outcome, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 shadow-inner border border-white/5 relative z-10">
                {outcome.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 relative z-10">{outcome.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">{outcome.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

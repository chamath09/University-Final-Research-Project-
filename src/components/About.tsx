import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Languages, BrainCircuit } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
      title: "Human-Computer Interaction",
      description: "Speech-enabled systems significantly improve how humans interact with computers, making technology more accessible."
    },
    {
      icon: <Languages className="w-6 h-6 text-purple-400" />,
      title: "Code-Switching Reality",
      description: "While Sinhala is the primary language in Sri Lanka, Sinhala-English code-switching is widely used in daily communication."
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-cyan-400" />,
      title: "The AI Challenge",
      description: "Existing Sinhala ASR systems perform well for monolingual speech but often fail when handling mixed-language input."
    }
  ];

  return (
    <section id="research" className="py-24 relative z-10 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            About the <span className="text-gradient">Research</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            This research investigates how code-switching techniques can enhance Sinhala speech-to-speech chatbot performance and create a more natural conversational AI system.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:bg-slate-800/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

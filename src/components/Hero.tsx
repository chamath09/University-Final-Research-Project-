import React from 'react';
import { motion } from 'motion/react';
import Hero3D from './Hero3D';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Hero3D />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass-panel text-sm font-medium text-accent-neon border-accent-neon/30">
            University of Sri Jayewardenepura • Faculty of Technology
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Enhancing Sinhala Speech-to-Speech Chatbots with <br className="hidden md:block" />
            <span className="text-gradient">Code-Switching</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            A research project exploring Sinhala-English mixed language understanding for conversational AI, bridging the gap in natural human-computer interaction.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#research" className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all flex items-center justify-center gap-2 group">
              View Research
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#demo" className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-white font-medium transition-all flex items-center justify-center gap-2 group">
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Watch Demo
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

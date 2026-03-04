import React from 'react';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Database, FileText, Mic } from 'lucide-react';

export default function DataCollection() {
  const data = [
    { name: 'Code-Mixed Text Samples', value: 1000, color: '#3b82f6' },
    { name: 'Real Speech Recordings', value: 1000, color: '#8b5cf6' },
  ];

  return (
    <section id="data" className="py-24 relative z-10 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Data <span className="text-gradient">Collection</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Building a robust dataset is crucial for training our code-switching models. We collected real-world Sinhala-English mixed data.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl h-[400px] flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <h3 className="text-2xl font-semibold mb-8 text-center relative z-10">Dataset Composition</h3>
            <div className="h-64 w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 hover:bg-slate-800/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">500 - 1000</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Code-mixed Sinhala-English text samples collected from social media and daily conversations.</p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 hover:bg-slate-800/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 border border-purple-500/30">
                <Mic className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">1000+</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Real speech recordings capturing natural code-switching patterns and pronunciations.</p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 hover:bg-slate-800/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 border border-cyan-500/30">
                <Database className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">Curated & Annotated</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Carefully transcribed and annotated to train the ASR and code-switching models effectively.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

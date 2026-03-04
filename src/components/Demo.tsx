import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mic, Play, Square, Volume2 } from 'lucide-react';

export default function Demo() {
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! I can understand Sinhala and English mixed speech. Try speaking to me.' }
  ]);

  const handleMicClick = () => {
    if (isRecording) {
      setIsRecording(false);
      setMessages(prev => [...prev, { type: 'user', text: 'Mata ada weather eka kohomada kiyanna puluwanda?' }]);
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', text: 'Sure! Ada weather eka godak sunny. The temperature is around 30 degrees Celsius.' }]);
      }, 1500);
    } else {
      setIsRecording(true);
    }
  };

  return (
    <section id="demo" className="py-24 relative z-10 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Live Chatbot <span className="text-gradient">Demonstration</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Experience the code-switching capabilities of our Sinhala-English chatbot in real-time.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Header */}
          <div className="bg-slate-800/80 p-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <div className="text-sm font-medium text-slate-400">Sinhala CS Chatbot Demo</div>
            <div className="w-16" /> {/* Spacer */}
          </div>

          {/* Chat Area */}
          <div className="h-[400px] p-6 overflow-y-auto flex flex-col gap-4 bg-slate-900/50">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.type === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-sm' 
                    : 'bg-slate-800 text-slate-200 rounded-tl-sm'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  {msg.type === 'bot' && idx > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                      <Volume2 className="w-4 h-4" />
                      <span>Audio generated</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            {isRecording && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-end"
              >
                <div className="bg-blue-600/50 text-white p-4 rounded-2xl rounded-tr-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              </motion.div>
            )}
          </div>

          {/* Controls */}
          <div className="p-6 bg-slate-800/50 border-t border-white/5 flex items-center justify-center gap-6">
            <button
              onClick={handleMicClick}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                isRecording 
                  ? 'bg-red-500 hover:bg-red-600 shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-pulse' 
                  : 'bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
              }`}
            >
              {isRecording ? <Square className="w-6 h-6 text-white fill-current" /> : <Mic className="w-6 h-6 text-white" />}
            </button>
            <div className="text-sm text-slate-400">
              {isRecording ? 'Listening...' : 'Click to speak'}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

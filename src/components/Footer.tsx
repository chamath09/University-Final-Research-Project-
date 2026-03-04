import React from 'react';
import { Activity, Github, FileText, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Activity className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Sinhala CS<span className="text-blue-400">.AI</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Enhancing Sinhala Speech-to-Speech Chatbots with Code-Switching. A research project exploring mixed language understanding for conversational AI.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Institution</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>University of Sri Jayewardenepura</li>
              <li>Faculty of Technology</li>
              <li>Research Project – 2026</li>
              <li>Group 31</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <Github className="w-4 h-4" /> GitHub Repository
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Research Paper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Contact Team
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 Sinhala CS Chatbot Research Team. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

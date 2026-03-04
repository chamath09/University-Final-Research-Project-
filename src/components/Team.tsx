import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Users, Mail, Linkedin } from 'lucide-react';

export default function Team() {
  const students = [
    { name: "Wijesekara W.M.S.S", role: "Student Researcher", img: "https://picsum.photos/seed/student1/200/200" },
    { name: "Chamath Upeka H.R.C", role: "Student Researcher", img: "https://picsum.photos/seed/student2/200/200" },
    { name: "Deshanjana T.A.P", role: "Student Researcher", img: "https://picsum.photos/seed/student3/200/200" }
  ];

  const supervisors = [
    { name: "Dr. Chamara Liyanage", role: "Supervisor", img: "https://picsum.photos/seed/supervisor1/200/200" },
    { name: "Ms. Nirasha Kulasooriya", role: "Co-Supervisor", img: "https://picsum.photos/seed/supervisor2/200/200" }
  ];

  return (
    <section id="team" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Research <span className="text-gradient">Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Group 31 - University of Sri Jayewardenepura, Faculty of Technology
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Supervisors */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-8">
              <GraduationCap className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-semibold text-white">Supervisors</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {supervisors.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-6 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300 group"
                >
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-purple-500/30 group-hover:border-purple-400 transition-colors">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">{member.name}</h4>
                  <p className="text-sm text-purple-400 mb-4">{member.role}</p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Students */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Users className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-semibold text-white">Students</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {students.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-6 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300 group"
                >
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-blue-500/30 group-hover:border-blue-400 transition-colors">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">{member.name}</h4>
                  <p className="text-sm text-blue-400 mb-4">{member.role}</p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';

export const Terminal = () => {
  const [inputVal, setInputVal] = useState('');
  const [screenLines, setScreenLines] = useState([
    { color: '#38bdf8', text: "Welcome to Mohan Kumar T's Interactive Portfolio Shell [v2026.11]" },
    { color: '#94a3b8', text: "Type 'help' to see available commands or click the shortcut buttons below." },
    { color: '#475569', text: '--------------------------------------------------------------------------------' }
  ]);

  const execCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    const newLines = [...screenLines, { color: 'var(--cyan)', text: `mohan@systems:~$ ${cmdStr}` }];

    switch (cmd) {
      case 'help':
        newLines.push({
          color: '#cbd5e1',
          text: 'Available system commands:\n  help         - Display this command index\n  skills       - Print verified engineering competencies\n  projects     - Inspect all 7 production-grade software builds\n  ai           - Overview of local-first agent & ML workflows\n  experience   - Chronological milestones & Persevex internship\n  education    - B.Tech AI&DS (85%) & Higher Secondary School\n  certificates - IIT Madras, IIT Kanpur, NPTEL honors\n  contact      - Direct relay & communications channels\n  clear        - Reset the terminal shell'
        });
        break;
      case 'skills':
        newLines.push({
          color: '#38bdf8',
          text: 'ENGINEERING COMPETENCIES:\n  Languages:   Python, Java (NPTEL 86%), TypeScript, JavaScript (ES6+), SQL\n  Frontend:    React.js, Next.js, Tailwind CSS, Vite\n  Backend:     Node.js, Express, FastAPI, Socket.io (WebSockets)\n  Databases:   PostgreSQL, Prisma ORM, Redis, MongoDB\n  AI / ML:     scikit-learn, Pandas, NumPy, Ollama, LangGraph, MCP Tools, Stockfish 19 Web Workers\n  DevOps:      Docker, Git, GitHub Actions, Linux CLI'
        });
        break;
      case 'projects':
        newLines.push({
          color: '#a78bfa',
          text: 'VERIFIED BUILDS:\n  1. Zugora           - AI Chess Engine Coach with Stockfish 19 Web Worker\n  2. MahathRishi      - Bilingual E-Commerce Store with Razorpay/UPI\n  3. LocalMind AI     - Local-First Autonomous AI Agent with Tool Approvals\n  4. AptIQ (AppIQ)    - Timed Aptitude Learning & Examination System\n  5. Real-Time Chat   - High-Concurrency WebSockets Messenger (iMessage)\n  6. E-Commerce       - Full-Stack Commerce Engine with Cart & Order Lifecycle\n  7. Focus YT         - Distraction-Free YouTube Study & Lecture Workspace'
        });
        break;
      case 'ai':
        newLines.push({
          color: '#34d399',
          text: 'AI & MACHINE LEARNING ARCHITECTURE:\n  • Local-first LLM orchestration via Ollama & Qwen with strict human-in-the-loop tool approvals.\n  • Persevex Data Science internship: built automated preprocessing pipelines & scikit-learn models.\n  • Web Worker multi-threading: offloads Stockfish 19 Lite computation to prevent UI thread lock.'
        });
        break;
      case 'experience':
        newLines.push({
          color: '#fbbf24',
          text: 'CHRONOLOGICAL TIMELINE:\n  1. The Sivakasi Hindu Nadar\'s Higher Secondary School (78.5% HSC)\n  2. P.S.R.R. College of Engineering — B.Tech AI&DS (85% Aggregate / 8.5 CGPA)\n  3. Code Fury National Hackathon — Syed Ammal Engineering College (Conducted by LEAP Success, 24h Finalist)\n  4. Persevex — Data Science Intern (Jul–Sep 2025)\n  5. Hack Odyssey 3.0 Hackathon — Kalasalingam Engineering College (24h Systems Challenge, Oct 2025)'
        });
        break;
      case 'education':
        newLines.push({
          color: '#38bdf8',
          text: 'EDUCATION:\n  • B.Tech in Artificial Intelligence & Data Science (2023–2027)\n    P.S.R.R. College of Engineering | 85% Aggregate / 8.5 CGPA\n  • Higher Secondary Certificate (HSC) — Computer Science (2021–2023)\n    The Sivakasi Hindu Nadar\'s Higher Secondary School | 78.5%'
        });
        break;
      case 'certificates':
        newLines.push({
          color: '#f472b6',
          text: 'CERTIFICATIONS & HONORS:\n  • Programming in Java — NPTEL IIT Kharagpur (86% Elite Gold)\n  • Python for Data Science — NPTEL IIT Madras (75% Elite Silver)\n  • Joy of Computing using Python — NPTEL IIT Madras\n  • Persevex Data Science Internship Certificate of Completion\n  • Code Fury National Hackathon Finalist Award (Syed Ammal Eng. College · LEAP Success)\n  • Hack Odyssey 3.0 Systems Challenge Award (Kalasalingam Engineering College)'
        });
        break;
      case 'contact':
        newLines.push({
          color: '#38bdf8',
          text: 'CONTACT RELAY:\n  • Email:    mohankumarofficial06@gmail.com\n  • GitHub:   https://github.com/Mohandgl53\n  • LinkedIn: https://linkedin.com/in/mohan-kumar-t-a168392a4\n  • LeetCode: https://leetcode.com/u/mohan_the_huster'
        });
        break;
      case 'clear':
        setScreenLines([]);
        setInputVal('');
        return;
      default:
        newLines.push({
          color: '#ef4444',
          text: `Command not recognized: '${cmd}'. Type 'help' to inspect valid system directives.`
        });
    }

    setScreenLines(newLines);
    setInputVal('');
  };

  return (
    <section id="terminal">
      <div className="sec-tag">Interactive CLI</div>
      <h2 className="sec-head">Developer <span>Terminal Shell</span></h2>
      <p className="sec-sub">Execute native terminal commands to inspect Mohan's engineering dossiers, skills, and background.</p>

      <div className="terminal-card" style={{ background: 'rgba(8, 12, 24, 0.95)', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-hud)' }}>
        <div className="terminal-top" style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--line)' }}>
          <div className="terminal-dots" style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}></span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}></span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
          </div>
          <div className="terminal-title" style={{ font: '600 12px var(--mono)', color: 'var(--mute)' }}>mohan@systems: ~/portfolio</div>
          <div style={{ font: '500 11px var(--mono)', color: 'var(--mute)' }}>UTC+5:30 · bash</div>
        </div>

        <div className="terminal-screen" style={{ padding: '18px', font: '400 13px/1.65 var(--mono)', color: '#cbd5e1', minHeight: '240px', maxHeight: '380px', overflowY: 'auto' }}>
          {screenLines.map((line, idx) => (
            <div key={idx} style={{ color: line.color, whiteSpace: 'pre-wrap', marginBottom: '4px' }}>
              {line.text}
            </div>
          ))}
        </div>

        {/* Interactive Command Input Line */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 16px', background: 'rgba(15, 23, 42, 0.6)', borderTop: '1px solid var(--line)' }}>
          <span style={{ font: '600 12.5px var(--mono)', color: 'var(--cyan)', marginRight: '8px' }}>mohan@systems:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') execCommand(inputVal); }}
            placeholder="Type a command (try 'skills', 'projects', 'help')..."
            style={{ flexGrow: 1, background: 'transparent', border: 'none', outline: 'none', font: '400 13px var(--mono)', color: '#f8fafc' }}
          />
          <button onClick={() => execCommand(inputVal)} style={{ background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: '4px', padding: '4px 12px', font: '600 11px var(--mono)', cursor: 'pointer' }}>
            Run ↵
          </button>
        </div>

        <div className="term-cmd-bar" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', padding: '10px 16px', background: 'rgba(10, 15, 28, 0.9)', borderTop: '1px solid var(--line)' }}>
          {['help', 'skills', 'projects', 'ai', 'experience', 'education', 'certificates', 'contact', 'clear'].map(cmd => (
            <button key={cmd} onClick={() => execCommand(cmd)}>{cmd}</button>
          ))}
        </div>
      </div>
    </section>
  );
};

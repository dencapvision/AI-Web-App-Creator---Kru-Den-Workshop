
import React, { useState } from 'react';
import { 
  Rocket, 
  Sparkles, 
  Github, 
  CheckCircle2, 
  BookOpen, 
  Layout, 
  MessageSquare,
  Monitor,
  Lightbulb,
  Award,
  ShieldCheck,
  Zap,
  HelpCircle,
  ChevronRight,
  Globe,
  Code2,
  Key,
  LogIn,
  Save,
  Send,
  Terminal,
  Layers,
  Cpu,
  Users,
  ExternalLink
} from 'lucide-react';
import { ReflectionData, ProjectChecklist } from './types';
import { getPromptAdvice } from './geminiService';

// --- Components ---

const SidebarItem: React.FC<{ 
  active: boolean; 
  title: string; 
  icon: React.ReactNode; 
  onClick: () => void 
}> = ({ active, title, icon, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
      active 
        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
    }`}
  >
    {icon}
    <span className="font-medium">{title}</span>
  </button>
);

const Card: React.FC<{ title: string; children: React.ReactNode; className?: string; icon?: React.ReactNode }> = ({ title, children, className = "", icon }) => (
  <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl ${className}`}>
    <h3 className="text-xl font-bold mb-4 text-indigo-300 flex items-center gap-2">
      {icon || <Sparkles className="w-5 h-5" />} {title}
    </h3>
    {children}
  </div>
);

// --- Pages ---

const DashboardPage: React.FC = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl group">
      <img 
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" 
        className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
        alt="Vite + AI Banner"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-t from-slate-950/80 to-transparent">
        <div className="bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full mb-4 animate-bounce">M.3 AI WORKSHOP</div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-white to-cyan-400">
          Vite Web App Creator
        </h1>
        <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">
          "จากไอเดียสู่หน้าจอจริง" <br/> เรียนรู้วิธีสร้าง Web App ด้วย Vite.js + AI + Vercel กับครูเด่น
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="1. AI Studio" icon={<Sparkles className="text-yellow-400 w-5 h-5" />}>
        <p className="text-slate-400 text-sm leading-relaxed">
          เสกโค้ดด้วยพลัง AI (Gemini) ใช้ Magic Prompt ของครูเด่นเพื่อสร้างโครงสร้าง Vite + React ที่สวยงามและทันสมัย
        </p>
      </Card>
      <Card title="2. GitHub" icon={<Github className="text-slate-200 w-5 h-5" />}>
        <p className="text-slate-400 text-sm leading-relaxed">
          บันทึกผลงานไว้ใน "ตู้เซฟดิจิทัล" เชื่อมต่อโปรเจกต์กับ GitHub เพื่อจัดการเวอร์ชันและทำงานร่วมกับเพื่อนในกลุ่ม
        </p>
      </Card>
      <Card title="3. Vercel" icon={<Rocket className="text-cyan-400 w-5 h-5" />}>
        <p className="text-slate-400 text-sm leading-relaxed">
          ปล่อยพลังสู่สาธารณะ! Deploy เว็บไซต์จาก GitHub ขึ้นระบบ Cloud ของ Vercel เพื่อให้ทุกคนเข้าใช้งานได้ทั่วโลก
        </p>
      </Card>
    </div>
  </div>
);

const WorkshopFlowPage: React.FC = () => {
  const productionSteps = [
    {
      id: 'step1',
      title: 'ขั้นตอนที่ 1: ปรุงโค้ดด้วย AI Studio',
      icon: <Cpu className="w-8 h-8 text-yellow-400" />,
      description: 'ใช้ Gemini ช่วยออกแบบ Web App ในฝันด้วย Vite.js Framework',
      points: [
        { icon: <Sparkles className="w-4 h-4" />, text: 'พิมพ์ Prompt: "ช่วยสร้างเวบแอพสำหรับ [ชื่อไอเดีย] ด้วย Framework Vite.js + Tailwind CSS"' },
        { icon: <Code2 className="w-4 h-4" />, text: 'คัดลอกโค้ด React จาก AI ไปใส่ในไฟล์ App.jsx' },
        { icon: <Layers className="w-4 h-4" />, text: 'ปรับแต่งดีไซน์ด้วย Tailwind ให้สวยงามตามสไตล์กลุ่มเรา' }
      ],
      color: 'border-yellow-500/30'
    },
    {
      id: 'step2',
      title: 'ขั้นตอนที่ 2: บันทึกลงตู้เซฟ GitHub',
      icon: <Github className="w-8 h-8 text-slate-200" />,
      description: 'สมัครและล็อกอิน GitHub ด้วย Email เดียวกับ AI Studio เพื่อความง่าย',
      points: [
        { icon: <LogIn className="w-4 h-4" />, text: 'สมัครใช้งาน GitHub (แนะนำใช้ Gmail โรงเรียน)' },
        { icon: <Save className="w-4 h-4" />, text: 'สร้าง Repository ใหม่ ตั้งชื่อให้สื่อถึงโปรเจกต์' },
        { icon: <CheckCircle2 className="w-4 h-4" />, text: 'อัปโหลดไฟล์โปรเจกต์ Vite ขึ้นสู่ GitHub (Push Code)' }
      ],
      color: 'border-slate-500/30'
    },
    {
      id: 'step3',
      title: 'ขั้นตอนที่ 3: ออนไลน์จริงด้วย Vercel',
      icon: <Rocket className="w-8 h-8 text-cyan-400" />,
      description: 'นำลิงก์ GitHub มาเชื่อมต่อกับ Vercel เพื่อออนไลน์หน้าเว็บ',
      points: [
        { icon: <Globe className="w-4 h-4" />, text: 'ล็อกอิน Vercel ด้วยบัญชี GitHub' },
        { icon: <Zap className="w-4 h-4" />, text: 'กด Import Project จาก GitHub ที่เราเพิ่งอัปโหลด' },
        { icon: <ExternalLink className="w-4 h-4" />, text: 'กด Deploy และรอรับ URL สาธารณะ (เช่น project.vercel.app)' }
      ],
      color: 'border-cyan-500/30'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Monitor className="text-indigo-400" /> แผนที่การสร้าง Web App (M.3)
          </h2>
          <p className="text-slate-400 mt-2">ทำตาม 3 ขั้นตอนนี้ แล้วรับรองว่ามีเว็บเป็นของตัวเองแน่นอน!</p>
        </div>
      </div>

      <div className="space-y-6">
        {productionSteps.map((step) => (
          <div key={step.id} className={`bg-slate-800/40 backdrop-blur-md border-l-4 ${step.color} rounded-2xl p-6 md:p-8 hover:bg-slate-800/60 transition-all shadow-lg`}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 bg-slate-900/50 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-700/50">
                {step.icon}
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm md:text-base">{step.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {step.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 bg-slate-900/30 p-3 rounded-xl border border-slate-700/30">
                      <div className="mt-1 bg-indigo-500/20 p-1.5 rounded-lg text-indigo-400">
                        {point.icon}
                      </div>
                      <span className="text-slate-300 text-sm leading-relaxed">{point.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PromptAlchemistPage: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<any>(null);

  const handleMagic = async () => {
    if (!idea) return;
    setLoading(true);
    try {
      const result = await getPromptAdvice(idea);
      setAdvice(result);
    } catch (e) {
      alert("โอ๊ะโอ! พลัง AI ติดขัด ลองใหม่อีกครั้งนะ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in zoom-in duration-500 max-w-4xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-indigo-400">Magic Prompt Generator</h2>
        <p className="text-slate-400">พิมพ์ไอเดีย แล้วรับ "คาถา" ไปรันใน AI Studio ได้เลย!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-700 relative overflow-hidden">
            <label className="block text-slate-300 mb-3 font-bold text-lg">กลุ่มเราอยากทำเว็บเกี่ยวกับอะไร?</label>
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="w-full bg-slate-900 border-2 border-slate-700 rounded-2xl p-4 text-white focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all resize-none min-h-[120px]"
              placeholder="เช่น เว็บรวมร้านอาหารแถวโรงเรียน, เว็บบันทึกแต้มฟุตบอล ม.3, พอร์ตโฟลิโอรวมผลงานศิลปะ..."
            />
            <button
              onClick={handleMagic}
              disabled={loading || !idea}
              className="w-full mt-6 bg-gradient-to-r from-yellow-500 via-indigo-600 to-indigo-700 hover:scale-[1.02] active:scale-95 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 shadow-xl shadow-indigo-600/20"
            >
              {loading ? <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div> : <><Sparkles className="w-5 h-5" /> เสกคาถา Prompt!</>}
            </button>
          </div>

          {advice && (
            <div className="bg-slate-900/80 border-2 border-indigo-500/30 p-8 rounded-3xl animate-in fade-in slide-in-from-top-6 duration-500 relative">
              <div className="absolute -top-3 left-8 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">MAGIC FORMULA</div>
              <div className="flex items-start gap-4 mb-6">
                 <div className="w-12 h-12 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white font-bold">ครู</div>
                 <div className="bg-indigo-600/10 p-4 rounded-2xl rounded-tl-none border border-indigo-500/20">
                   <p className="text-slate-200 italic leading-relaxed">"{advice.message}"</p>
                 </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-slate-400" /> คัดลอกไปวางที่ AI Studio:
                  </h5>
                  <div className="relative group">
                     <pre className="bg-slate-950 p-5 rounded-2xl text-indigo-300 text-sm whitespace-pre-wrap border border-slate-800 font-mono leading-relaxed max-h-[300px] overflow-y-auto custom-scrollbar text-xs md:text-sm">
                      {advice.suggestedPrompt}
                    </pre>
                    <button 
                      onClick={() => { navigator.clipboard.writeText(advice.suggestedPrompt); alert("คัดลอกคาถาแล้ว! เตรียมไปวางใน AI Studio นะ"); }}
                      className="absolute top-4 right-4 p-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg transition-all transform hover:scale-110"
                    >
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <Card title="ไอเดียยอดฮิต ม.3" icon={<Lightbulb className="text-yellow-400 w-5 h-5" />}>
             <ul className="space-y-3">
               <li className="text-xs text-slate-400 flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-indigo-500"></div> เว็บสุ่มชื่อเพื่อนในห้อง</li>
               <li className="text-xs text-slate-400 flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-indigo-500"></div> เว็บบันทึกตารางสอนรายบุคคล</li>
               <li className="text-xs text-slate-400 flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-indigo-500"></div> เว็บแนะนำเกมที่น่าสนใจ</li>
               <li className="text-xs text-slate-400 flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-indigo-500"></div> เว็บสะสมแต้มพฤติกรรมกลุ่ม</li>
             </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

const WorkbookPage: React.FC = () => {
  const [checklist, setChecklist] = useState<ProjectChecklist>({
    githubAccount: false,
    repoCreated: false,
    codeUploaded: false,
    vercelConnected: false,
    deployed: false
  });

  const [members, setMembers] = useState(['', '', '', '', '']);

  const handleMemberChange = (index: number, value: string) => {
    const newMembers = [...members];
    newMembers[index] = value;
    setMembers(newMembers);
  };

  const toggleCheck = (key: keyof ProjectChecklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-white">Vite Creator Workbook</h2>
          <p className="text-slate-400">บันทึกความสำเร็จ และเตรียมส่งงานกลุ่ม</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card title="สมาชิกในกลุ่ม (1-5 คน)" icon={<Users className="text-indigo-400 w-5 h-5" />}>
            <div className="space-y-3">
              {members.map((m, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={`ชื่อสมาชิกคนที่ ${i+1}`}
                  value={m}
                  onChange={(e) => handleMemberChange(i, e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-slate-200 outline-none focus:border-indigo-500"
                />
              ))}
            </div>
          </Card>

          <Card title="Checklist ความสำเร็จ" icon={<CheckCircle2 className="text-green-400 w-5 h-5" />}>
            <div className="space-y-3">
              {Object.entries({
                githubAccount: "สมัคร/ล็อกอิน GitHub",
                repoCreated: "ใช้ AI เสกโค้ดสำเร็จ",
                codeUploaded: "อัปโหลดโค้ดขึ้น GitHub",
                vercelConnected: "เชื่อมต่อ GitHub กับ Vercel",
                deployed: "ออนไลน์จริงด้วย URL ส่วนตัว"
              }).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => toggleCheck(key as keyof ProjectChecklist)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all text-sm ${
                    checklist[key as keyof ProjectChecklist]
                      ? 'bg-green-600/20 border-green-500/50 text-green-300'
                      : 'bg-slate-900/50 border-slate-700 text-slate-500 hover:border-slate-500'
                  }`}
                >
                  <span className="font-medium">{label}</span>
                  {checklist[key as keyof ProjectChecklist] ? <CheckCircle2 className="w-5 h-5" /> : <div className="w-5 h-5 border-2 border-slate-700 rounded-full" />}
                </button>
              ))}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card title="ส่งงานผ่านฟอร์ม (กดยืนยันด้วย URL จาก Vercel)" icon={<Send className="text-cyan-400 w-5 h-5" />}>
            <div className="rounded-2xl overflow-hidden border border-slate-700 bg-white">
               <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScytkvqqOnXTRyhfe47ykyIuf1_S3aK3xmRzE4UBpFJJ_n1iw/viewform?embedded=true" 
                width="100%" 
                height="800" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                title="Google Form Submission"
               >
                 กำลังโหลด…
               </iframe>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'flow' | 'alchemist' | 'workbook'>('home');

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-950 selection:bg-indigo-500/30">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-72 flex-col bg-slate-900/50 border-r border-slate-800 p-6 space-y-8 sticky top-0 h-screen">
        <div className="flex items-center space-x-3 px-2">
          <div className="p-2.5 bg-gradient-to-br from-yellow-400 to-indigo-600 rounded-2xl shadow-lg shadow-indigo-600/20">
            <Rocket className="text-slate-950 w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight leading-none text-white">KRU DEN</h1>
            <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mt-1">AI Web Creator M.3</p>
          </div>
        </div>
        
        <nav className="flex-1 space-y-3">
          <SidebarItem 
            active={activeTab === 'home'} 
            title="Dashboard" 
            icon={<Layout className="w-5 h-5" />} 
            onClick={() => setActiveTab('home')} 
          />
          <SidebarItem 
            active={activeTab === 'flow'} 
            title="Step-by-Step" 
            icon={<Monitor className="w-5 h-5" />} 
            onClick={() => setActiveTab('flow')} 
          />
          <SidebarItem 
            active={activeTab === 'alchemist'} 
            title="AI Magic Prompt" 
            icon={<Sparkles className="w-5 h-5" />} 
            onClick={() => setActiveTab('alchemist')} 
          />
          <SidebarItem 
            active={activeTab === 'workbook'} 
            title="Send Homework" 
            icon={<Send className="w-5 h-5" />} 
            onClick={() => setActiveTab('workbook')} 
          />
        </nav>

        <div className="p-5 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl border border-slate-700 shadow-xl">
          <div className="flex items-center gap-3 mb-3">
             <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center font-black text-xs text-slate-950">ครู</div>
             <div>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Workshop Lead</p>
               <p className="text-sm font-black text-white">ครูเด่น</p>
             </div>
          </div>
          <p className="text-[10px] text-slate-500 leading-relaxed italic">"Framework Vite คือความเร็ว GitHub คือความปลอดภัย AI คือที่ปรึกษา ลุยเลย!"</p>
        </div>
      </aside>

      {/* Mobile Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-xl border-t border-slate-800 px-6 py-4 flex justify-between items-center shadow-2xl">
          <button onClick={() => setActiveTab('home')} className={`transition-all p-2 rounded-xl ${activeTab === 'home' ? 'bg-indigo-600 text-white scale-110 shadow-lg' : 'text-slate-500'}`}>
            <Layout className="w-6 h-6" />
          </button>
          <button onClick={() => setActiveTab('flow')} className={`transition-all p-2 rounded-xl ${activeTab === 'flow' ? 'bg-indigo-600 text-white scale-110 shadow-lg' : 'text-slate-500'}`}>
            <Monitor className="w-6 h-6" />
          </button>
          <button onClick={() => setActiveTab('alchemist')} className={`transition-all p-2 rounded-xl ${activeTab === 'alchemist' ? 'bg-indigo-600 text-white scale-110 shadow-lg' : 'text-slate-500'}`}>
            <Sparkles className="w-6 h-6" />
          </button>
          <button onClick={() => setActiveTab('workbook')} className={`transition-all p-2 rounded-xl ${activeTab === 'workbook' ? 'bg-indigo-600 text-white scale-110 shadow-lg' : 'text-slate-500'}`}>
            <Send className="w-6 h-6" />
          </button>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 md:p-12 pb-32 md:pb-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'home' && <DashboardPage />}
          {activeTab === 'flow' && <WorkshopFlowPage />}
          {activeTab === 'alchemist' && <PromptAlchemistPage />}
          {activeTab === 'workbook' && <WorkbookPage />}
        </div>
      </main>
    </div>
  );
}


import React, { useState, useEffect } from 'react';
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
  Key
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
        src="https://images.unsplash.com/photo-1620712943543-bcc4628c71d5?q=80&w=1200&auto=format&fit=crop" 
        className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
        alt="AI Banner"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-t from-slate-950/80 to-transparent">
        <div className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 animate-bounce">GRADE 9 WORKSHOP</div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-pink-400 to-yellow-300">
          AI Web App Creator
        </h1>
        <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">
          "เสกไอเดียให้มีตัวตนใน 1 วัน" <br/> เรียนรู้โลกยุค AI กับครูเด่น กระบวนกรสอนสนุก
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Concept" icon={<Zap className="text-yellow-400 w-5 h-5" />}>
        <p className="text-slate-400 leading-relaxed">
          เปลี่ยนความกลัวโค้ด ให้เป็นพลังความกล้าสร้างสรรค์ ใช้ **FLOW State** เป็นเครื่องยนต์ขับเคลื่อนไอเดีย
        </p>
      </Card>
      <Card title="The Creator's Way" icon={<Award className="text-pink-400 w-5 h-5" />}>
        <ul className="space-y-2 text-slate-400">
          <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> มั่นใจ (Self-Efficacy)</li>
          <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> กล้าลองผิดลองถูก</li>
          <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> แบ่งปันความสำเร็จ</li>
        </ul>
      </Card>
      <Card title="Workshop Result" icon={<Rocket className="text-cyan-400 w-5 h-5" />}>
        <p className="text-slate-400 text-sm">
          นักเรียนจะมี Web App ออนไลน์เป็นของตัวเอง พร้อมทักษะการใช้ Gemini, GitHub และ Vercel ติดตัวไปใช้ได้ทันที
        </p>
      </Card>
    </div>
  </div>
);

const WorkshopFlowPage: React.FC = () => {
  const steps = [
    { 
      id: '1', 
      title: 'ขั้นตอนที่ 1: เปลี่ยนไอเดียให้เป็นต้นแบบ ด้วย AI Studio', 
      description: 'เริ่มจากการสมัครใช้งานด้วย Gmail และล็อกอินเข้าสู่ AI Studio จากนั้นใช้พลังของ Gemini ในการ "เสก" ไอเดียออกมาเป็นโค้ด Web App ที่ตรงใจ ตรวจสอบความถูกต้องจนพอใจก่อนนำไปบันทึก', 
      details: ['สมัครใช้งานด้วย Gmail', 'Prompt เสกไอเดียเป็นโค้ด', 'ตรวจสอบผลลัพธ์ใน Browser'],
      icon: <Code2 className="w-6 h-6" /> 
    },
    { 
      id: '2', 
      title: 'ขั้นตอนที่ 2: การบันทึกโค้ดไว้บน GitHub', 
      description: 'สมัครสมาชิก GitHub โดยแนะนำให้ใช้ Gmail เดียวกัน สร้าง Repository (บ้านของโปรเจกต์) และทำการบันทึกโค้ด (index.html) ลงไปเป็นครั้งแรก เพื่อเตรียมความพร้อมสู่การออนไลน์', 
      details: ['สร้าง Repository ใหม่', 'Upload ไฟล์โค้ด', 'จัดการเวอร์ชันของงาน'],
      icon: <Github className="w-6 h-6" /> 
    },
    { 
      id: '3', 
      title: 'ขั้นตอนที่ 3: การโชว์เวบไซต์สู่สาธารณะ ด้วย Vercel', 
      description: 'Launch Pad สู่โลกกว้าง! สมัครใช้งาน Vercel และเชื่อมต่อกับบัญชี GitHub ของเรา เลือก Repo ที่ต้องการแล้วกด Deploy เพื่อรับ URL จริงที่ทุกคนเข้าชมได้จากทั่วโลก', 
      details: ['Connect GitHub to Vercel', 'Deploy ในคลิกเดียว', 'แชร์ URL ให้เพื่อนดู'],
      icon: <Globe className="w-6 h-6" /> 
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Monitor className="text-indigo-400" /> ขั้นตอนการผลิตชิ้นงาน
        </h2>
        <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
          <Zap className="w-4 h-4 text-yellow-500 animate-pulse" /> กระบวนการสร้างสรรค์
        </div>
      </div>

      <div className="space-y-6">
        {steps.map((step, idx) => (
          <div key={step.id} className="relative bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 hover:bg-indigo-900/10 hover:border-indigo-500/50 transition-all flex flex-col md:flex-row gap-8 group">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-white leading-tight">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg">{step.description}</p>
              <div className="flex flex-wrap gap-3">
                {step.details.map((detail, dIdx) => (
                  <span key={dIdx} className="bg-slate-900/80 text-indigo-300 px-4 py-1.5 rounded-xl text-sm border border-indigo-500/20">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="การใช้ API Key อย่างปลอดภัย" icon={<Key className="text-yellow-400 w-5 h-5" />}>
          <div className="space-y-3 text-sm text-slate-400">
            <p className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /> 1. ตั้งชื่อโครงการ และสร้าง API Key ผ่าน AI Studio</p>
            <p className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /> 2. คัดลอก Key เก็บไว้ในที่ปลอดภัย</p>
            <p className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" /> 3. นำไปวางไว้ในส่วนของ <strong>Environment Variables</strong> ใน Vercel เมื่อ Deploy เพื่อความปลอดภัยสูงสุด</p>
          </div>
        </Card>

        <Card title="Trainer Guide Tips" icon={<ShieldCheck className="text-green-400 w-5 h-5" />}>
          <div className="space-y-3 text-sm text-slate-400">
            <p className="font-bold text-white">Peer Support (เพื่อนช่วยเพื่อน)</p>
            <p>ใครทำเสร็จก่อน แต่งตั้งเป็น "Master Creator" ให้ไปช่วยเพื่อนที่ยังติดขัด สร้างสังคมแห่งการแบ่งปัน</p>
          </div>
        </Card>
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
      alert("Oops! Magic failed. Check your API Key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in zoom-in duration-500 max-w-4xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">Prompt Alchemist</h2>
        <p className="text-slate-400">ปรุงสูตรลับ "เสก" เว็บให้ Pro แบบไม่มี Error (ฉบับนักเรียน ม.3)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-700 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles size={100} />
             </div>
            <label className="block text-slate-300 mb-3 font-bold text-lg">ไอเดียสุดเจ๋งของเธอคืออะไร?</label>
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="w-full bg-slate-900 border-2 border-slate-700 rounded-2xl p-4 text-white focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all resize-none min-h-[120px]"
              placeholder="เช่น เว็บรวมร้านอาหารอร่อยหน้าโรงเรียน, เว็บสอนเล่นเกม, เว็บแนะนำตัวเองเท่ๆ..."
            />
            <button
              onClick={handleMagic}
              disabled={loading || !idea}
              className="w-full mt-6 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:scale-[1.02] active:scale-95 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 shadow-xl shadow-indigo-600/20"
            >
              {loading ? <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div> : <><Zap className="w-5 h-5 fill-current" /> ปรุงสูตร Magic Prompt!</>}
            </button>
          </div>

          {advice && (
            <div className="bg-slate-900/80 border-2 border-indigo-500/30 p-8 rounded-3xl animate-in fade-in slide-in-from-top-6 duration-500 relative">
              <div className="absolute -top-3 left-8 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">MAGIC RESULT</div>
              <div className="flex items-start gap-4 mb-6">
                 <div className="w-12 h-12 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white font-bold">ครู</div>
                 <div className="bg-indigo-600/10 p-4 rounded-2xl rounded-tl-none border border-indigo-500/20">
                   <p className="text-slate-200 italic leading-relaxed">"{advice.message}"</p>
                 </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Github className="w-5 h-5 text-slate-400" /> Copy & Paste ใน AI Studio:
                  </h5>
                  <div className="relative group">
                     <pre className="bg-slate-950 p-5 rounded-2xl text-indigo-300 text-sm whitespace-pre-wrap border border-slate-800 font-mono leading-relaxed max-h-[300px] overflow-y-auto custom-scrollbar text-xs md:text-sm">
                      {advice.suggestedPrompt}
                    </pre>
                    <button 
                      onClick={() => { navigator.clipboard.writeText(advice.suggestedPrompt); alert("คัดลอกสำเร็จ! เอาไปใช้ใน AI Studio ได้เลย"); }}
                      className="absolute top-4 right-4 p-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg transition-all transform hover:scale-110"
                      title="คัดลอกคำสั่ง"
                    >
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                    <h5 className="font-bold text-white mb-2 text-sm flex items-center gap-2"><Sparkles className="w-4 h-4 text-yellow-400"/> ฟีเจอร์เด่น:</h5>
                    <ul className="space-y-2">
                      {advice.features.map((f: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-slate-400 text-xs">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-indigo-950/20 p-4 rounded-2xl border border-indigo-500/20">
                    <h5 className="font-bold text-indigo-300 mb-2 text-sm flex items-center gap-2"><Lightbulb className="w-4 h-4"/> เคล็ดลับไม่ให้ Error:</h5>
                    <ul className="space-y-2">
                      {advice.proTips.map((t: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-slate-400 text-xs">
                          <CheckCircle2 className="w-3 h-3 text-green-500" /> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <Card title="3 กฎเหล็กเลี่ยง Error" icon={<ShieldCheck className="text-indigo-400 w-5 h-5" />}>
             <div className="space-y-4">
               <div className="group border-b border-slate-700 pb-3 last:border-0">
                 <p className="text-white font-bold text-sm mb-1 group-hover:text-indigo-400 transition-colors">1. ไฟล์เดียวจบ (Single File)</p>
                 <p className="text-slate-500 text-xs">บอก AI ให้รวม HTML, CSS, JS ไว้ในไฟล์ index.html ไฟล์เดียวเท่านั้น</p>
               </div>
               <div className="group border-b border-slate-700 pb-3 last:border-0">
                 <p className="text-white font-bold text-sm mb-1 group-hover:text-indigo-400 transition-colors">2. ใช้ CDN ที่ไว้ใจได้</p>
                 <p className="text-slate-500 text-xs">ใช้ Tailwind CSS หรือ Font Awesome ผ่าน CDN ลิงก์เดียวสวยเลย ไม่ต้องติดตั้งเพิ่ม</p>
               </div>
               <div className="group border-b border-slate-700 pb-3 last:border-0">
                 <p className="text-white font-bold text-sm mb-1 group-hover:text-indigo-400 transition-colors">3. ใช้รูปภาพ Placeholder</p>
                 <p className="text-slate-500 text-xs">ถ้ายังไม่มีรูป ให้ AI ใช้ Unsplash หรือ Picsum แทนรูปจริง จะได้เห็นภาพรวมก่อน</p>
               </div>
             </div>
          </Card>
          
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-3xl shadow-xl">
             <h4 className="font-bold text-white mb-2 flex items-center gap-2">
               <HelpCircle className="w-5 h-5" /> ต้องการความช่วยเหลือ?
             </h4>
             <p className="text-indigo-100 text-xs leading-relaxed">
               ยกมือถาม "ครูเด่น" หรือถาม "Master Creator" ประจำโต๊ะได้เลยนะครับ! สนุกกับการเสกเว็บนะ!
             </p>
          </div>
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

  const [assessment, setAssessment] = useState({ aiKnowledge: 1, everCoded: 'no' });
  const [reflection, setReflection] = useState<ReflectionData>({ what: '', soWhat: '', nowWhat: '', confidence: 3 });

  const toggleCheck = (key: keyof ProjectChecklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-white">The Creator's Workbook</h2>
          <p className="text-slate-400">บันทึกการเดินทางของสุดยอดนักพัฒนา</p>
        </div>
        <div className="bg-indigo-600 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg shadow-indigo-600/30">
          ระดับความมั่นใจ: {reflection.confidence}/5
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card title="Pre-Workshop Assessment" icon={<HelpCircle className="text-indigo-400 w-5 h-5" />}>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 block mb-2">ฉันรู้จัก AI แค่ไหน?</label>
                <div className="flex justify-between">
                  {[1, 2, 3, 4, 5].map(v => (
                    <button 
                      key={v}
                      onClick={() => setAssessment(prev => ({ ...prev, aiKnowledge: v }))}
                      className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${assessment.aiKnowledge === v ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-400'}`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-400 block mb-2">เคยเขียนโค้ดมาก่อนไหม?</label>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setAssessment(prev => ({ ...prev, everCoded: 'yes' }))}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${assessment.everCoded === 'yes' ? 'bg-indigo-600 text-white border-transparent' : 'bg-slate-700 text-slate-400 border border-slate-600'}`}
                  >
                    เคย
                  </button>
                  <button 
                    onClick={() => setAssessment(prev => ({ ...prev, everCoded: 'no' }))}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${assessment.everCoded === 'no' ? 'bg-indigo-600 text-white border-transparent' : 'bg-slate-700 text-slate-400 border border-slate-600'}`}
                  >
                    ไม่เคย
                  </button>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Technical Checklist" icon={<CheckCircle2 className="text-green-400 w-5 h-5" />}>
            <div className="space-y-3">
              {Object.entries({
                githubAccount: "สมัคร GitHub เรียบร้อย",
                repoCreated: "สร้าง Repo (บ้านของโค้ด)",
                codeUploaded: "เสกโค้ดเข้า GitHub",
                vercelConnected: "เปิดวาร์ปเข้า Vercel",
                deployed: "ออนไลน์จริง 100%!"
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
          <Card title="Reflection Sheet (หัวใจสำคัญ)" icon={<MessageSquare className="text-pink-400 w-5 h-5" />}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                  <label className="block text-white font-bold mb-2">What: วันนี้ทำอะไรสำเร็จบ้าง?</label>
                  <textarea 
                    value={reflection.what}
                    onChange={e => setReflection(prev => ({ ...prev, what: e.target.value }))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none h-32 transition-all"
                    placeholder="เล่าความสำเร็จสั้นๆ..."
                  />
                </div>
                <div>
                  <label className="block text-white font-bold mb-2">So What: อะไรยากที่สุด? ผ่านมาได้ยังไง?</label>
                  <textarea 
                    value={reflection.soWhat}
                    onChange={e => setReflection(prev => ({ ...prev, soWhat: e.target.value }))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none h-32 transition-all"
                    placeholder="ตอนเจอ Error รู้สึกยังไง และแก้ยังไง..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-white font-bold mb-2">Now What: จะเอาความรู้นี้ไปช่วยงานที่ไหนต่อ?</label>
                <textarea 
                  value={reflection.nowWhat}
                  onChange={e => setReflection(prev => ({ ...prev, nowWhat: e.target.value }))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none h-32 transition-all"
                  placeholder="เช่น ช่วยพ่อแม่ทำเว็บร้านค้า, ช่วยครูทำเว็บวิชาการ..."
                />
              </div>

              <div className="pt-4 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1 w-full">
                  <p className="text-xs text-slate-500 mb-2 font-bold uppercase tracking-widest">ให้คะแนนความมั่นใจ</p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(v => (
                      <button
                        key={v}
                        onClick={() => setReflection(prev => ({ ...prev, confidence: v }))}
                        className={`flex-1 py-3 rounded-2xl text-lg transition-all transform active:scale-90 ${
                          reflection.confidence === v ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-800 text-slate-500'
                        }`}
                      >
                        {v === 1 ? '😢' : v === 2 ? '😕' : v === 3 ? '😐' : v === 4 ? '😊' : '🚀'}
                      </button>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => alert("บันทึกการเรียนรู้เรียบร้อย! ครูเด่นภูมิใจในตัวคุณมาก ขอให้สนุกกับการสร้างสรรค์ต่อใน 7 วันนี้นะ!")}
                  className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-indigo-600/30 active:scale-95"
                >
                  ส่งการบ้านครูเด่น
                </button>
              </div>
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
          <div className="p-2.5 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-lg shadow-indigo-600/20">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight leading-none text-white">KRU DEN</h1>
            <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mt-1">AI Workshop Creator</p>
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
            title="Production Steps" 
            icon={<Monitor className="w-5 h-5" />} 
            onClick={() => setActiveTab('flow')} 
          />
          <SidebarItem 
            active={activeTab === 'alchemist'} 
            title="Prompt Alchemist" 
            icon={<Sparkles className="w-5 h-5" />} 
            onClick={() => setActiveTab('alchemist')} 
          />
          <SidebarItem 
            active={activeTab === 'workbook'} 
            title="My Workbook" 
            icon={<BookOpen className="w-5 h-5" />} 
            onClick={() => setActiveTab('workbook')} 
          />
        </nav>

        <div className="p-5 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl border border-slate-700 shadow-xl">
          <div className="flex items-center gap-3 mb-3">
             <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-black text-xs text-white">ครู</div>
             <div>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Facilitator</p>
               <p className="text-sm font-black text-white">ครูเด่น</p>
             </div>
          </div>
          <p className="text-[10px] text-slate-500 leading-relaxed italic">"หัวใจไม่ใช่ความเป๊ะของ Code แต่คือความภูมิใจที่ทำสำเร็จ!"</p>
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
            <BookOpen className="w-6 h-6" />
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

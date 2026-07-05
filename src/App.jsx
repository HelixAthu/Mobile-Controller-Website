import React, { useState } from 'react';
import { Monitor, Smartphone, Cpu, Wifi, Zap, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import logo from './assets/logo.png';

// Import media files from assets folder
import setupGuideVideo from './assets/Mobile_Controller_Setup_Guide.mp4';
import thumbnailImg from './assets/thumbnailImg.png';
import routerImg from './assets/router.png';
import controllerImg from './assets/controller.png';
import noadsImg from './assets/noads.png';

export default function App() {
  // FAQs Array - Grounded, honest, and easy to update
  const faqs = [
    {
      question: "Is Mobile Controller free?",
      answer: "Yes :)"
    },
    {
      question: "How does the mobile controller connect to my PC?",
      answer: "It connects over your local Wi-Fi network. Both your PC server and Android device just need to be connected to the same local router to talk to each other."
    },
    {
      question: "Is there any input lag?",
      answer: "Since it streams inputs over standard Wi-Fi, there can be a slight, typical wireless latency. It's not built for hardcore or competitive esports, but it's perfect for casual games, emulators, and relaxed gaming sessions."
    },
    {
      question: "Does it support games outside of Steam?",
      answer: "Yes. The desktop server emulates a generic Xbox 360 controller configuration on Windows. Because the OS sees it as a native gamepad, it works across Epic Games, emulators, and standard PC titles."
    },
    {
      question: "Can I customize the button layout on my phone?",
      answer: "Not right now. the app uses a fixed, traditional Xbox 360 controller layout but we'll consider adding that feature in a future update!"
    },
    {
      question: "Why are some keys missing on the controller?",
      answer: "To keep the controller as simple and fittable in small mobile devices, we had to shrink the interface and sacrifice some buttons. Don't worry, all commonly used buttons are functional! Once we find a great fit, we'll add them too :)"
    },
    {
      question: "Why is my mobile device not responding to the PC?",
      answer: "Please allow the app to communicate through your firewall and refer our step-by-step setup tutorial where we explain common issues that might occur in setup."
    },
    {
      question: "Can I add multiple devices?",
      answer: "Not yet but we'll keep that in mind to add later :)"
    },
    {
      question: "Do both my devices have to be on the same network?",
      answer: "Yes"
    },
    {
      question: "Should I keep the server running when playing games?",
      answer: "Yes"
    },
    {
      question: "Can I connect another controller to my PC while my phone is connected as a controller?",
      answer: "Yes"
    },
    {
      question: "How do I setup my controller and PC?",
      answer: "Please refer our step-by-step tutorial where we explore how to setup and debug common errors that may occur"
    },
    {
      question: "How often can I expect updates for the Mobile App?",
      answer: "I am a solo-developer and made Mobile Controller as a side project for everyone to access premium controller gaming through your phone for no-cost and no ads. I haven't considered when to maintain updates yet. So not too often."
    },
    {
      question: "Does this work on Android and Windows devices only?",
      answer: "For now, yes"
    }
  ];

  // State to handle FAQ accordion toggles
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 selection:bg-cyan-500 selection:text-black">
      
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* NAVBAR */}
      <nav className="border-b border-gray-800/60 backdrop-blur-md sticky top-0 z-50 bg-[#0b0f19]/70">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            <img src={logo} alt="Mobile Controller Logo" className="w-7 h-7 object-contain rounded-2xl" />
            MOBILE CONTROLLER
          </div>
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-gray-400">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#setup" className="hover:text-cyan-400 transition-colors">Setup Guide</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQs</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-12 text-center flex flex-col items-center">
        <span className="px-3 py-1 text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
          Mobile Controller
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
          Turn Your Phone Into An <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
            Xbox 360 Controller
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          No controller? No problem. Just use your smartphone as your very own Xbox 360 controller!
        </p>

        {/* HERO BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 z-10">
          {/* Download Server */}
          <a 
            href="/assets/AppFiles/mobileControllerServer.zip" 
            download 
            className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Monitor className="w-5 h-5 text-blue-200 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <span className="block text-xs text-blue-200 uppercase tracking-wider font-semibold">Windows PC</span>
              <span className="text-base">Download Server</span>
            </div>
          </a>

          {/* Download APK */}
          <a 
            href="/mobile_controller.apk" 
            download 
            className="group flex items-center justify-center gap-3 bg-gray-900 border border-gray-700 hover:border-cyan-500 text-white font-medium px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Smartphone className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <span className="block text-xs text-gray-400 uppercase tracking-wider font-semibold">Android App</span>
              <span className="text-base">Download Mobile Controller</span>
            </div>
          </a>
        </div>
      </section>

      <hr className="border-gray-900 max-w-7xl mx-auto" />

      {/* SETUP GUIDE SECTION */}
      <section id="setup" className="max-w-7xl mx-auto px-6 py-20 text-center scroll-mt-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Setup Guide</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Watch our comprehensive video walkthrough below to easily link your devices and begin configuration.</p>
        </div>

        {/* RESPONSIVE VIDEO WRAPPER WITH POSTER & CONTROLS */}
        <div className="w-full max-w-4xl mx-auto aspect-[16/9] rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-950/80 p-2 shadow-2xl relative overflow-hidden">
          <video 
            src={setupGuideVideo} 
            poster={thumbnailImg}
            controls
            preload="metadata"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </section>

      <hr className="border-gray-900 max-w-7xl mx-auto" />

      {/* FUNCTIONALITY / FEATURES SECTION */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Simple & Functional</h2>
          <p className="text-gray-400 max-w-xl mx-auto">A clean, functional utility project built to fulfill a simple use-case efficiently.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-900/40 border border-gray-800/80 p-8 rounded-2xl hover:border-gray-700/80 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20 text-cyan-400">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">Wi-Fi Connection</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Communicate cleanly across your local network without dealing with messy wires or hardware cables.</p>
            </div>
            {/* Responsive Square Image Container */}
            <div className="w-full max-w-[180px] aspect-square mx-auto bg-[#121a29] rounded-lg border border-gray-800 p-3 flex items-center justify-center">
              <img src={routerImg} alt="Router configuration" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900/40 border border-gray-800/80 p-8 rounded-2xl hover:border-gray-700/80 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20 text-blue-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">Native Xbox controller Input Setup</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Maps virtual layout hooks directly on your PC so standard games register your phone inputs as a controller click.</p>
            </div>
            {/* Responsive Square Image Container */}
            <div className="w-full max-w-[180px] aspect-square mx-auto bg-[#121a29] rounded-lg border border-gray-800 p-3 flex items-center justify-center">
              <img src={controllerImg} alt="Controller mapping" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900/40 border border-gray-800/80 p-8 rounded-2xl hover:border-gray-700/80 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20 text-emerald-400">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors">Hassle-Free Use</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">No accounts, no ads, and no premium tiers. Just run the application client files together and start playing.</p>
            </div>
            {/* Responsive Square Image Container */}
            <div className="w-full max-w-[180px] aspect-square mx-auto bg-[#121a29] rounded-lg border border-gray-800 p-3 flex items-center justify-center">
              <img src={noadsImg} alt="No ads setup" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-900 max-w-7xl mx-auto" />

      {/* FAQS SECTION */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about setting up your casual controller alternative.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-900/30 border border-gray-800/80 rounded-xl overflow-hidden transition-colors duration-300"
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left font-medium focus:outline-none hover:text-cyan-400 transition-colors"
              >
                <span>{faq.question}</span>
                {openFaq === index ? <ChevronUp className="w-5 h-5 text-cyan-400" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </button>
              
              {openFaq === index && (
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-gray-800/40 pt-4 bg-[#0d1424]/30">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-900 bg-gray-950/60 py-12 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 font-semibold tracking-wider text-gray-400">
            <img src={logo} alt="Mobile Controller Logo" className="w-5 h-5 object-contain opacity-80 rounded-2xl" />
            MOBILE CONTROLLER
          </div>
          <p>© {new Date().getFullYear()} Mobile Controller. Built with love :)</p>
          <div className="flex gap-4">
            <a href="https://github.com/HelixAthu" className="hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
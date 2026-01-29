import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Target,
  Zap,
  Layers,
  LineChart,
  Activity,
  Settings,
  CircleDollarSign,
  ShieldAlert,
  TrendingUp,
  Handshake,
  Rocket,
  Flag,
  FlaskConical,
  Network,
  Server,
  Info,
  X,
  Linkedin,
  Mail,
} from "lucide-react";
import { agentsData, type AgentName, type PromptEntry } from "./agentsData";
import { roadmapData } from "./roadmapData";

function HireVishwajeetModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-500/40 p-4 backdrop-blur-[2px]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hire-modal-title"
    >
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-[22px] bg-white px-4 pt-[1cm] pb-[1cm] shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:px-5 sm:pt-[1cm] sm:pb-[1cm]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-1 text-gray-500 transition hover:bg-gray-100 sm:right-3 sm:top-3 sm:min-h-0 sm:min-w-0"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4 h-40 w-40 overflow-hidden rounded-xl border-4 border-red-500 sm:mb-5 sm:h-48 sm:w-48">
            <img
              src={`${import.meta.env.BASE_URL}jeet.webp`}
              alt="Vishwajeet J K"
              className="h-full w-full object-cover object-[center_28%]"
            />
          </div>

          <h2 id="hire-modal-title" className="font-serif text-xl font-bold text-gray-900 sm:text-2xl">
            Vishwajeet J K
          </h2>
          <p className="mt-1 mb-3 font-sans text-xs font-semibold text-red-500 sm:mb-4 sm:text-sm">
            Potential Hire: Product Manager, VC R&D at Mercurius Media Capital
          </p>

          <p className="mb-4 max-w-sm font-sans text-xs leading-snug text-gray-600 sm:mb-5 sm:text-sm">
            Former Product Management at Louis Vuitton Moët Hennessy, Software Engineer at Groww (YC 2018), Times of India Group, Gates Foundation, and Columbia University (Business School & Engineering) graduate. Passionate about transforming industries, scaling systems and growth hacking practices through AI and automation.
          </p>

          <div className="mb-2 flex flex-wrap justify-center gap-1.5 sm:mb-3 sm:gap-2">
            <span className="rounded-full bg-red-100 px-2 py-0.5 font-sans text-[9px] font-medium text-red-800 sm:text-[10px]">
              Louis Vuitton Moët Hennessy
            </span>
            <span className="rounded-full bg-red-100 px-2 py-0.5 font-sans text-[9px] font-medium text-red-800 sm:text-[10px]">
              Groww (YC 2018)
            </span>
            <span className="rounded-full bg-red-100 px-2 py-0.5 font-sans text-[9px] font-medium text-red-800 sm:text-[10px]">
              Times of India Group
            </span>
          </div>

          <div className="mb-5 flex flex-wrap justify-center gap-1.5 sm:mb-6 sm:gap-2">
            <span className="rounded-full bg-blue-100 px-2 py-0.5 font-sans text-[9px] font-medium text-blue-800 sm:text-[10px]">
              Gates Foundation
            </span>
            <span className="rounded-full bg-blue-100 px-2 py-0.5 font-sans text-[9px] font-medium text-blue-800 sm:text-[10px]">
              Columbia Business School & Engineering graduate
            </span>
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/vishwajeet-jk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white transition hover:bg-[#004182] sm:h-11 sm:w-11"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 sm:h-5 sm:w-5" />
            </a>
            <a
              href="mailto:vj2287@columbia.edu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition hover:bg-gray-800 sm:h-11 sm:w-11"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar({ onHireClick }: { onHireClick?: () => void }) {
  const handleHireClick = () => {
    const el = document.getElementById("promise");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (onHireClick) {
      setTimeout(() => onHireClick(), 3000);
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-3 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 sm:py-4 md:px-12"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-2xl bg-white px-3 py-2.5 sm:px-6 sm:py-3 shadow-sm border border-black/5">
        <a href="#" className="flex min-w-0 shrink items-center gap-2 sm:gap-3 font-serif text-lg sm:text-xl font-medium text-black">
          <img src={`${import.meta.env.BASE_URL}mmc-logo-color.jpg`} alt="MMC" className="h-7 w-auto shrink-0 object-contain sm:h-9" />
          <span className="border-l border-black/20 pl-2 font-sans text-xs font-medium text-black/80 sm:pl-3 sm:text-sm">
            A Product R&amp;D Pitch from Vishwajeet J K
          </span>
        </a>
        <ul className="flex shrink-0 items-center gap-2 overflow-x-auto py-1 scrollbar-hide sm:gap-4 md:gap-6 md:overflow-visible md:py-0 text-xs font-medium text-black/90 sm:text-sm [-webkit-overflow-scrolling:touch]">
          <li className="hidden sm:block">
            <a href="#methodology" className="hover:text-black transition-colors">
              Methodology
            </a>
          </li>
          <li className="hidden sm:block">
            <a href="#simulator" className="hover:text-black transition-colors">
              Simulator
            </a>
          </li>
          <li className="hidden sm:block">
            <a href="#roadmap" className="hover:text-black transition-colors">
              Roadmap
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={handleHireClick}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-black px-4 py-2.5 text-xs font-semibold text-white transition active:scale-[0.98] hover:bg-black/90 sm:gap-2 sm:px-5 sm:text-sm [min-height:44px]"
            >
              <span className="sm:hidden">Hire</span>
              <span className="hidden sm:inline">Hire Vishwajeet</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}

function Hero() {
  const arbitrageStatus =
    "Scanning publisher inventory... 3 Media-for-Equity-ready slots matched.";
  const [arbitrageText, setArbitrageText] = useState("");

  const riskStatuses = [
    "Simulating deal payoff... Equity dilution at 12%.",
    "Simulating deal payoff... Equity dilution at 18%.",
    "Simulating deal payoff... Equity dilution at 9%.",
  ];
  const [riskIndex, setRiskIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setArbitrageText(arbitrageStatus.slice(0, i));
      if (i >= arbitrageStatus.length) {
        clearInterval(id);
      }
    }, 35);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setRiskIndex((idx) => (idx + 1) % riskStatuses.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative min-h-[85vh] overflow-hidden px-4 pt-24 pb-16 sm:min-h-[90vh] sm:px-6 sm:pt-28 sm:pb-20 md:px-12"
      style={{
        backgroundColor: "#1A0B2E",
      }}
    >
      {/* Subtle radial glow top-right behind card */}
      <div
        className="pointer-events-none absolute -top-1/2 right-0 h-[120%] w-[80%] max-w-2xl opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 90% 20%, rgba(212,175,55,0.15) 0%, rgba(26,11,46,0.4) 40%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex min-h-0 max-w-6xl flex-col items-center gap-8 sm:min-h-[calc(90vh-6rem)] sm:gap-12 lg:grid lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-12">
        {/* Left: Typography & CTA (MMC hierarchy) — narrower so hexagon has room */}
        <div className="flex-1 text-center lg:text-left lg:max-w-md mb-[2cm] lg:mb-0 lg:mr-[2cm]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-serif text-base tracking-wide text-mmc-gold sm:text-lg sm:whitespace-nowrap md:text-xl"
          >
            Multi‑Agent Media‑for‑Equity Simulation Engine
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-2 font-serif text-lg font-medium leading-snug text-mmc-white sm:mt-3 sm:text-xl md:text-2xl lg:text-3xl max-w-md"
          >
            A strategic engine for simulating venture outcomes.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 max-w-sm font-sans text-sm text-mmc-white/80 sm:mt-6 md:text-base"
          >
            Transform your diligence process with AI-powered simulation. Predict
            traffic spikes, inventory efficiency, and valuation uplift before
            signing the term sheet. The system is designed to be built—and delivered.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 sm:mt-10"
          >
            <motion.a
              href="#simulator"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-sans text-sm font-semibold text-black active:scale-[0.98] sm:px-8 sm:py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Initialize Pilot
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Right: Multi-Agent cluster */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-md flex-shrink-0 lg:max-w-xl h-[300px] min-h-[280px] sm:h-[380px] md:h-[420px] lg:h-[520px]"
        >
          <div className="relative h-full w-full">
            {/* Hexagon: proper regular hexagon (circumradius 38), pulsing gold lines */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Regular hexagon: C(50,50), R=38. Vertices (clockwise from top): T(50,12), TR(83,31), BR(83,69), B(50,88), BL(17,69), TL(17,31) */}
              <line x1="50" y1="50" x2="50" y2="12" className="hex-connector-bg" />
              <line x1="50" y1="50" x2="83" y2="31" className="hex-connector-bg" />
              <line x1="50" y1="50" x2="83" y2="69" className="hex-connector-bg" />
              <line x1="50" y1="50" x2="50" y2="88" className="hex-connector-bg" />
              <line x1="50" y1="50" x2="17" y2="69" className="hex-connector-bg" />
              <line x1="50" y1="50" x2="17" y2="31" className="hex-connector-bg" />
              <line x1="50" y1="50" x2="50" y2="12" className="hex-connector" />
              <line x1="50" y1="50" x2="83" y2="31" className="hex-connector" />
              <line x1="50" y1="50" x2="83" y2="69" className="hex-connector" />
              <line x1="50" y1="50" x2="50" y2="88" className="hex-connector" />
              <line x1="50" y1="50" x2="17" y2="69" className="hex-connector" />
              <line x1="50" y1="50" x2="17" y2="31" className="hex-connector" />
              <line x1="50" y1="12" x2="83" y2="31" className="hex-connector-bg" />
              <line x1="83" y1="31" x2="83" y2="69" className="hex-connector-bg" />
              <line x1="83" y1="69" x2="50" y2="88" className="hex-connector-bg" />
              <line x1="50" y1="88" x2="17" y2="69" className="hex-connector-bg" />
              <line x1="17" y1="69" x2="17" y2="31" className="hex-connector-bg" />
              <line x1="17" y1="31" x2="50" y2="12" className="hex-connector-bg" />
              <line x1="50" y1="12" x2="83" y2="31" className="hex-connector" />
              <line x1="83" y1="31" x2="83" y2="69" className="hex-connector" />
              <line x1="83" y1="69" x2="50" y2="88" className="hex-connector" />
              <line x1="50" y1="88" x2="17" y2="69" className="hex-connector" />
              <line x1="17" y1="69" x2="17" y2="31" className="hex-connector" />
              <line x1="17" y1="31" x2="50" y2="12" className="hex-connector" />
            </svg>

            {/* Central HUB node — same size as satellites */}
            <motion.div
              className="hex-node absolute left-1/2 top-1/2 w-28 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 p-2 shadow-[0_0_24px_rgba(200,163,85,0.2)] backdrop-blur-xl sm:w-36 sm:rounded-2xl sm:p-3 md:w-40"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "loop" }}
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <Settings className="h-3.5 w-3.5 text-[#D4AF37] animate-spin-slow" strokeWidth={1.5} />
                </div>
                <p className="font-serif text-xs text-mmc-white/80">Media-for-Equity Core</p>
              </div>
              <motion.p
                className="font-sans text-[11px] text-mmc-white/60"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Orchestrating agents...
              </motion.p>
              <p className="mt-1 text-[11px] font-sans text-mmc-white/70">
                Matching inventory • Routing scenarios
              </p>
            </motion.div>

            {/* Agent Node A - Inventory Scout (hex top) — slightly wider */}
            <motion.div
              className="hex-node absolute left-1/2 top-[12%] w-36 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 p-2 shadow-[0_0_24px_rgba(200,163,85,0.2)] backdrop-blur-xl sm:w-44 sm:rounded-2xl sm:p-3 md:w-48"
              animate={{ y: [-8, 2, -8] }}
              transition={{ duration: 7, repeat: Infinity, repeatType: "loop", delay: 0.3 }}
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <Settings className="h-3.5 w-3.5 text-[#D4AF37] animate-spin" strokeWidth={1.5} />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <CircleDollarSign className="h-3.5 w-3.5 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
              </div>
              <p className="font-serif text-xs text-mmc-white/80">Inventory Scout</p>
              <p className="mt-1 min-h-14 text-[11px] font-sans leading-snug text-mmc-white/70">
                {arbitrageText}
                <span className="inline-block w-1 animate-pulse bg-mmc-white/70 align-middle" />
              </p>
            </motion.div>

            {/* Agent Node B - Deal Risk (hex top-right) */}
            <motion.div
              className="hex-node absolute left-[83%] top-[31%] w-28 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 p-2 shadow-[0_0_24px_rgba(200,163,85,0.2)] backdrop-blur-xl sm:w-36 sm:rounded-2xl sm:p-3 md:w-40"
              animate={{ y: [-4, 6, -4] }}
              transition={{ duration: 9, repeat: Infinity, repeatType: "loop", delay: 0.6 }}
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <Settings className="h-3.5 w-3.5 text-[#D4AF37] animate-spin" strokeWidth={1.5} />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <ShieldAlert className="h-3.5 w-3.5 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
              </div>
              <p className="font-serif text-xs text-mmc-white/80">Deal Risk</p>
              <p className="mt-1 text-[11px] font-sans text-mmc-white/70">
                {riskStatuses[riskIndex]}
              </p>
            </motion.div>

            {/* Agent Node C - Equity Valuation (hex bottom-right) */}
            <motion.div
              className="hex-node absolute left-[83%] top-[69%] w-28 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 p-2 shadow-[0_0_24px_rgba(200,163,85,0.2)] backdrop-blur-xl sm:w-36 sm:rounded-2xl sm:p-3 md:w-40"
              animate={{ y: [4, -6, 4] }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "loop", delay: 0.9 }}
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <Settings className="h-3.5 w-3.5 text-[#D4AF37] animate-spin" strokeWidth={1.5} />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <TrendingUp className="h-3.5 w-3.5 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
              </div>
              <p className="font-serif text-xs text-mmc-white/80">Equity Valuation</p>
              <p className="mt-1 text-[11px] font-sans text-mmc-white/70">
                Running Monte Carlo (Run 8,432/10k)... Proj. Media-for-Equity uplift: 2.4x.
              </p>
            </motion.div>

            {/* Agent Node D - Deal Structurer (hex bottom) */}
            <motion.div
              className="hex-node absolute left-1/2 top-[88%] w-28 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 p-2 shadow-[0_0_24px_rgba(200,163,85,0.2)] backdrop-blur-xl sm:w-36 sm:rounded-2xl sm:p-3 md:w-40"
              animate={{ y: [6, -4, 6] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <Settings className="h-3.5 w-3.5 text-[#D4AF37] animate-spin" strokeWidth={1.5} />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <Handshake className="h-3.5 w-3.5 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
              </div>
              <p className="font-serif text-xs text-mmc-white/80">Deal Structurer</p>
              <p className="mt-1 text-[11px] font-sans text-mmc-white/70">
                Structuring equity terms... Cap table run 2,104/5k.
              </p>
            </motion.div>

            {/* Agent Node E - GTM Simulations (hex bottom-left) */}
            <motion.div
              className="hex-node absolute left-[17%] top-[69%] w-28 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 p-2 shadow-[0_0_24px_rgba(200,163,85,0.2)] backdrop-blur-xl sm:w-36 sm:rounded-2xl sm:p-3 md:w-40"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, repeatType: "loop", delay: 0.4 }}
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <Settings className="h-3.5 w-3.5 text-[#D4AF37] animate-spin" strokeWidth={1.5} />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <Rocket className="h-3.5 w-3.5 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
              </div>
              <p className="font-serif text-xs text-mmc-white/80">GTM Simulations</p>
              <p className="mt-1 text-[11px] font-sans text-mmc-white/70">
                Simulating launch scenarios... Churn & LTV run 4,201/8k.
              </p>
            </motion.div>

            {/* Agent Node F - Red Flags (hex top-left) */}
            <motion.div
              className="hex-node absolute left-[17%] top-[31%] w-28 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 p-2 shadow-[0_0_24px_rgba(200,163,85,0.2)] backdrop-blur-xl sm:w-36 sm:rounded-2xl sm:p-3 md:w-40"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 8.5, repeat: Infinity, repeatType: "loop", delay: 0.7 }}
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <Settings className="h-3.5 w-3.5 text-[#D4AF37] animate-spin" strokeWidth={1.5} />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <Flag className="h-3.5 w-3.5 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
              </div>
              <p className="font-serif text-xs text-mmc-white/80">Red Flags</p>
              <p className="mt-1 text-[11px] font-sans text-mmc-white/70">
                Scanning diligence... 2 medium, 0 critical flags.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const SIMULATOR_NAV = Object.keys(agentsData) as AgentName[];

function Simulator() {
  const [activeTab, setActiveTab] = useState(0);
  const activeTitle = SIMULATOR_NAV[activeTab];
  const prompts = agentsData[activeTitle];
  const [activePrompt, setActivePrompt] = useState<{
    agent: AgentName;
    index: number;
  } | null>(null);
  const [simPhase, setSimPhase] = useState<0 | 1 | 2 | 3 | 4 | 5 | 6>(0);
  const outputRef = useRef<HTMLDivElement | null>(null);

  // When switching agents, clear any running simulation until a prompt is clicked
  useEffect(() => {
    setActivePrompt(null);
    setSimPhase(0);
  }, [activeTitle, prompts]);

  // When a prompt is chosen, progressively reveal sections like AI thinking
  useEffect(() => {
    if (!activePrompt) {
      setSimPhase(0);
      return;
    }
    setSimPhase(1); // show thinking bubble
    // Scroll the output area into view when a new simulation starts
    if (outputRef.current) {
      outputRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Slower, with thinking pauses between each section
    const t1 = setTimeout(() => setSimPhase(2), 1000); // show workflow
    const t2 = setTimeout(() => setSimPhase(3), 2600); // pause before integrations
    const t3 = setTimeout(() => setSimPhase(4), 4200); // show integrations
    const t4 = setTimeout(() => setSimPhase(5), 5800); // pause before reports
    const t5 = setTimeout(() => setSimPhase(6), 7400); // show reports
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [activePrompt?.agent, activePrompt?.index]);

  // As new phases render more content, keep the output block roughly in view
  useEffect(() => {
    if (!activePrompt || !outputRef.current || simPhase === 0) return;
    const id = setTimeout(() => {
      outputRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 200);
    return () => clearTimeout(id);
  }, [simPhase, activePrompt]);

  return (
    <section id="simulator" className="relative bg-mmc-deep px-4 py-16 sm:px-6 sm:py-24 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl"
      >
        <h2 className="font-serif text-2xl font-medium text-mmc-white text-center sm:text-3xl md:text-4xl">
          Simulate Media-for-Equity <span className="text-mmc-gold">Agents.</span>
        </h2>
        <p className="mt-2 font-sans text-sm text-mmc-white/80 text-center sm:text-base">
          Run sample prompts per agent and see how the M4E engine generates workflows and outputs.
        </p>

        {/* TuskCPA-style horizontal nav: 7 titles from hero boxes — scroll on mobile */}
        <nav className="mt-6 flex flex-nowrap items-center justify-start gap-1 overflow-x-auto border-b border-white/10 pb-4 scrollbar-hide sm:mt-8 sm:justify-center sm:gap-2 md:justify-center [-webkit-overflow-scrolling:touch]">
          {SIMULATOR_NAV.map((title, i) => (
            <button
              key={title}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`shrink-0 rounded-full px-3 py-1.5 font-sans text-xs font-medium transition md:px-3.5 md:py-2 md:text-sm ${
                activeTab === i
                  ? "bg-mmc-gold text-black"
                  : "text-mmc-white/80 hover:bg-white/10 hover:text-mmc-white"
              }`}
            >
              {title}
            </button>
          ))}
        </nav>

        {/* Central card: solid header + white body with sample prompts */}
        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-white shadow-xl sm:mt-8 sm:rounded-2xl">
          <div className="flex flex-col items-start justify-between gap-3 bg-mmc-deep-alt px-4 py-4 sm:gap-4 sm:px-6 sm:py-5 md:flex-row md:items-center md:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                <Settings className="h-5 w-5 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-serif text-lg font-medium text-white">{activeTitle}</p>
                <p className="font-sans text-sm text-white/80">M4E agent simulation</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="font-sans text-sm font-medium text-white">Ready</span>
            </div>
          </div>

          <div className="border-t border-black/5 bg-white p-4 sm:p-6 md:p-8">
            <div className="mb-4 flex flex-col items-center text-center sm:mb-6">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mmc-deep/10 sm:mb-3 sm:h-12 sm:w-12">
                <Zap className="h-5 w-5 text-mmc-gold sm:h-6 sm:w-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg font-medium text-black sm:text-xl">Choose a Sample Prompt</h3>
              <p className="mt-1 max-w-lg font-sans text-xs text-black/70 sm:text-sm">
                Select one of the prompts below to see how the M4E agent generates workflows and outputs.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {(prompts as readonly PromptEntry[]).map((item: PromptEntry, index: number) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() =>
                    setActivePrompt({ agent: activeTitle as AgentName, index })
                  }
                  className={`min-h-[44px] rounded-xl border p-3 text-left transition active:scale-[0.99] sm:p-4 ${
                    activePrompt?.agent === activeTitle && activePrompt.index === index
                      ? "border-mmc-gold bg-mmc-gold/5"
                      : "border-black/10 bg-black/[0.02] hover:border-mmc-gold/30 hover:bg-mmc-gold/5"
                  }`}
                >
                  <p className="font-sans text-sm font-semibold text-black">{item.title}</p>
                  <p className="mt-1 font-sans text-xs leading-relaxed text-black/70">{item.prompt}</p>
                </button>
              ))}
            </div>

            {activePrompt && (
              <div ref={outputRef} className="mt-8 space-y-6">
                {/** Resolve current prompt object from agentsData each render */}
                {(() => {
                  const current = agentsData[activePrompt.agent][activePrompt.index];
                  if (!current) return null;
                  const { thinking, workflow, data, reports } = current;
                  return (
                    <>
                {/* AI thinking / prompt bubble */}
                {simPhase >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-black/10 bg-black/[0.03] p-5"
                  >
                    <div className="inline-flex items-center gap-2 rounded-full bg-red-500 text-white px-3 py-1 text-xs font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse" />
                      <span>Mercurius AI is thinking…</span>
                    </div>
                    <p className="mt-3 font-sans text-sm text-black/80">
                      {thinking}
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="h-2 w-3/4 rounded-full bg-black/5 animate-pulse" />
                      <div className="h-2 w-2/3 rounded-full bg-black/5 animate-pulse" />
                      <div className="h-2 w-1/2 rounded-full bg-black/5 animate-pulse" />
                      <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-sans text-black/50">
                        <span className="h-1.5 w-1.5 rounded-full bg-black/20 animate-pulse" />
                        <span className="h-1.5 w-1.5 rounded-full bg-black/30 animate-[pulse_1.4s_ease-in-out_infinite]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-black/40 animate-[pulse_1.8s_ease-in-out_infinite]" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Generated Workflow section */}
                {simPhase >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-black/10 bg-[#F5F7FF] p-5 md:p-6"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-[#4B5DFF]" strokeWidth={1.5} />
                        <p className="font-sans text-sm font-semibold text-black">Generated Workflow</p>
                      </div>
                      <span className="text-xs font-sans text-black/50">AI-generated steps</span>
                    </div>
                    <ol className="space-y-3 text-sm font-sans text-black/80">
                      {workflow.map((step) => (
                        <li
                          key={step.step}
                          className="flex items-start gap-3 rounded-xl bg-white px-3 py-2 shadow-sm"
                        >
                          <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#4B5DFF] text-xs font-semibold text-white">
                            {step.step}
                          </span>
                          <div>
                            <p className="font-semibold">{step.text}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </motion.div>
                )}

                {/* Thinking pause before integrations */}
                {simPhase === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-[11px] font-sans text-black/60"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-black/20 animate-pulse" />
                    <span>Mercurius AI is fetching integration data…</span>
                  </motion.div>
                )}

                {/* Integration Data Retrieved section */}
                {simPhase >= 4 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-black/10 bg-[#F3FFF7] p-5 md:p-6"
                  >
                    <div className="mb-4 flex items-center gap-2">
                      <Activity className="h-4 w-4 text-emerald-500" strokeWidth={1.5} />
                      <p className="font-sans text-sm font-semibold text-black">
                        Integration Data Retrieved
                      </p>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      {data.map((d) => (
                        <div
                          key={d.label}
                          className="rounded-xl bg-white p-3 text-sm font-sans text-black/80 shadow-sm"
                        >
                          <p className="font-semibold">{d.label}</p>
                          <p className="text-xs text-black/60">{d.value}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Thinking pause before performance reports */}
                {simPhase === 5 && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-[11px] font-sans text-black/60"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-black/20 animate-pulse" />
                    <span>Mercurius AI is compiling performance reports…</span>
                  </motion.div>
                )}

                {/* Task Performance Reports Generated (instead of Task Breakdown Generated) */}
                {simPhase >= 6 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-black/10 bg-[#FFF6FB] p-5 md:p-6"
                  >
                    <div className="mb-4 flex items-center gap-2">
                      <LineChart className="h-4 w-4 text-rose-500" strokeWidth={1.5} />
                      <p className="font-sans text-sm font-semibold text-black">
                        Task Performance Reports Generated
                      </p>
                    </div>
                    <div className="space-y-2 text-sm font-sans text-black/80">
                      {reports.map((r) => {
                        const colorMap: Record<string, string> = {
                          success: "bg-emerald-50 text-emerald-600",
                          stable: "bg-slate-50 text-slate-600",
                          warning: "bg-amber-50 text-amber-600",
                          error: "bg-rose-50 text-rose-600",
                          watch: "bg-amber-50 text-amber-600",
                        };
                        const badgeClass =
                          colorMap[r.status] ?? "bg-slate-50 text-slate-600";
                        return (
                          <div
                            key={r.label}
                            className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm"
                          >
                            <div>
                              <p className="font-semibold">{r.label}</p>
                              <p className="text-xs text-black/60">
                                {r.status === "error"
                                  ? "Critical issue detected."
                                  : r.status === "warning"
                                  ? "Needs attention."
                                  : r.status === "watch"
                                  ? "Monitor for changes."
                                  : "Performance metric."}
                              </p>
                            </div>
                            <span
                              className={`rounded-full px-2 py-1 text-[10px] font-semibold ${badgeClass}`}
                            >
                              {r.value}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Reset button at the end of simulation */}
                    <div className="mt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          setActivePrompt(null);
                          setSimPhase(0);
                        }}
                        className="rounded-full border border-rose-200 bg-white px-4 py-2 text-xs font-semibold text-rose-600 shadow-sm hover:bg-rose-50"
                      >
                        Reset Simulation
                      </button>
                    </div>
                  </motion.div>
                )}
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const ROADMAP_ICONS = [FlaskConical, Rocket, Network, Server] as const;

function CostBreakdownTooltip({
  breakdown,
  isOpen,
  onClose,
  triggerRefs,
  openIndex,
  anchorBottom = true,
}: {
  breakdown: { item: string; cost: string }[];
  isOpen: boolean;
  onClose: () => void;
  triggerRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  openIndex: number | null;
  anchorBottom?: boolean;
}) {
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || openIndex === null) return;
    const handleClickOutside = (e: MouseEvent) => {
      const trigger = triggerRefs.current[openIndex];
      if (trigger?.contains(e.target as Node) || tooltipRef.current?.contains(e.target as Node))
        return;
      onClose();
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, triggerRefs, openIndex]);

  if (!isOpen) return null;

  return (
    <div
      ref={tooltipRef}
      role="tooltip"
      className={`absolute left-0 z-50 min-w-[240px] max-w-[320px] rounded-xl border border-mmc-gold/30 bg-black/90 px-4 py-3 shadow-xl backdrop-blur-md max-sm:bottom-auto max-sm:mb-0 max-sm:top-full max-sm:mt-2 ${
        anchorBottom ? "bottom-full mb-2" : "top-full mt-2"
      }`}
    >
      <p className="font-serif text-sm font-medium text-mmc-gold">Monthly Burn Estimate</p>
      <ul className="mt-2 space-y-1.5 font-sans text-xs text-white">
        {breakdown.map((row) => (
          <li key={row.item} className="flex items-baseline gap-2">
            <span className="truncate text-white/95">{row.item}</span>
            <span className="flex-1 min-w-[8px] border-b border-dotted border-white/30 shrink-0 self-end" aria-hidden />
            <span className="shrink-0 text-mmc-gold/90">{row.cost}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StrategicRoadmap() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [costTooltipIndex, setCostTooltipIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="relative bg-[#1A0B2E] px-4 py-16 sm:px-6 sm:py-24 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="font-serif text-2xl font-medium text-mmc-white text-center sm:text-3xl md:text-4xl">
          Strategic Roadmap <span className="text-mmc-gold">& Cost Forecast</span>
        </h2>
        <p className="mt-2 font-sans text-sm text-mmc-white/80 text-center max-w-2xl mx-auto sm:mt-3 sm:text-base">
          From Pilot Project to Sovereign AI Ecosystem — the evolution of this IP.
        </p>

        {/* Vertical timeline: line + cards */}
        <div className="mt-16 flex flex-col md:flex-row md:gap-0 gap-8 md:items-stretch">
          {/* Left column: vertical gold line (visible on md+) */}
          <div className="hidden md:flex md:flex-shrink-0 md:w-6 md:flex-col md:items-center md:pt-2 md:pb-2">
            <div className="relative w-1 flex-1 min-h-[200px] rounded-full overflow-hidden roadmap-line-track self-stretch">
              {/* Scroll-driven gold fill — brighter/thicker effect via gradient */}
              <motion.div
                className="absolute inset-x-0 bottom-0 w-full h-full rounded-full bg-gradient-to-t from-mmc-gold via-mmc-gold-metallic to-mmc-gold/70 opacity-95 shadow-[0_0_20px_rgba(200,163,85,0.5)]"
                style={{
                  scaleY: scrollYProgress,
                  transformOrigin: "bottom",
                }}
              />
            </div>
          </div>

          {/* Mobile: thin line on left of cards */}
          <div className="md:hidden absolute left-8 top-[calc(12rem+2rem)] bottom-[2rem] w-0.5 rounded-full roadmap-line-track overflow-hidden pointer-events-none">
            <motion.div
              className="absolute inset-x-0 bottom-0 w-full h-full rounded-full bg-gradient-to-t from-mmc-gold to-mmc-gold/70"
              style={{
                scaleY: scrollYProgress,
                transformOrigin: "bottom",
              }}
            />
          </div>

          {/* Cards column */}
          <div className="flex-1 md:pl-10 pl-12 space-y-8">
            {roadmapData.map((item, index) => {
              const Icon = ROADMAP_ICONS[index] ?? FlaskConical;
              const title = item.phase.replace(/^Phase \d+: /, "");
              return (
                <motion.article
                  key={item.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md p-6 shadow-[0_0_40px_-8px_rgba(0,0,0,0.3)] hover:border-mmc-gold/30 hover:shadow-[0_0_32px_-4px_rgba(200,163,85,0.12)] transition-all duration-300"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[2.6rem] md:-left-[2.5rem] top-8 w-3 h-3 rounded-full bg-mmc-gold shadow-[0_0_12px_rgba(200,163,85,0.6)] md:left-0 md:-translate-x-1/2 md:top-8" />
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-mmc-gold/15 border border-mmc-gold/30 text-mmc-gold">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sans text-xs uppercase tracking-wider text-mmc-gold/90">
                        {item.phase}
                      </p>
                      <h3 className="font-serif text-xl md:text-2xl font-medium text-mmc-gold mt-1">
                        {title}
                      </h3>
                      <p className="font-sans text-sm text-mmc-white mt-2 leading-relaxed">
                        {item.objective}
                      </p>
                      {/* Phase 1: R&D Sandbox — multi-model optionality */}
                      {index === 0 && (
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="font-sans text-xs text-mmc-white/70">
                            Paying for optionality — not locked to one vendor.
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {["OpenAI", "Google DeepMind", "Anthropic"].map((vendor) => (
                              <span
                                key={vendor}
                                className="rounded-md border border-mmc-gold/30 bg-mmc-gold/10 px-2 py-0.5 font-sans text-xs text-mmc-gold/90"
                              >
                                {vendor}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      <dl className="mt-4 font-sans text-sm text-mmc-white/90 space-y-1">
                        <div>
                          <span className="text-mmc-white/60">Role: </span>
                          {item.role}
                        </div>
                        <div
                          className="relative inline-flex items-center gap-2"
                          onMouseEnter={() => setCostTooltipIndex(index)}
                          onMouseLeave={() => setCostTooltipIndex(null)}
                        >
                          <span className="text-mmc-white/60">Cost: </span>
                          <span>{item.cost}</span>
                          <button
                            ref={(el) => {
                              if (triggerRefs.current.length <= index) triggerRefs.current.length = index + 1;
                              triggerRefs.current[index] = el;
                            }}
                            type="button"
                            aria-label="Cost breakdown"
                            onClick={() => setCostTooltipIndex((i) => (i === index ? null : index))}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-mmc-gold/40 bg-mmc-gold/20 text-mmc-gold transition hover:bg-mmc-gold/30 focus:outline-none focus:ring-2 focus:ring-mmc-gold/50 min-h-[44px] min-w-[44px] sm:h-5 sm:w-5 sm:min-h-0 sm:min-w-0"
                          >
                            <Info className="h-3 w-3" strokeWidth={2} />
        </button>
                          {costTooltipIndex === index && (
                            <CostBreakdownTooltip
                              breakdown={item.breakdown}
                              isOpen={true}
                              onClose={() => setCostTooltipIndex(null)}
                              triggerRefs={triggerRefs}
                              openIndex={costTooltipIndex}
                              anchorBottom={true}
                            />
                          )}
                        </div>
                        <div className="mt-1">
                          <span className="text-mmc-white/60">Stack: </span>
                          {item.stack}
                        </div>
                      </dl>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const bentoCards = [
  {
    title: "Data ingestion",
    description:
      "Unified pipelines for inventory, spend, and audience signals across platforms.",
    icon: Layers,
    delay: 0.1,
  },
  {
    title: "Agent orchestration",
    description:
      "Multi-agent system that negotiates allocation and de-risks inventory decisions.",
    icon: Zap,
    delay: 0.2,
  },
  {
    title: "Lift simulation",
    description:
      "Probabilistic simulation of media mix and allocation before commitment.",
    icon: LineChart,
    delay: 0.3,
  },
  {
    title: "Attribution & reporting",
    description:
      "Clean attribution and reporting layers for stakeholders and finance.",
    icon: BarChart3,
    delay: 0.15,
  },
  {
    title: "Optimization loop",
    description:
      "Continuous feedback from outcomes into model and allocation parameters.",
    icon: Target,
    delay: 0.25,
  },
  {
    title: "Governance",
    description:
      "Audit trails, guardrails, and approval workflows for compliance.",
    icon: Layers,
    delay: 0.35,
  },
];

function BentoGrid() {
  return (
    <section id="methodology" className="relative px-4 py-16 sm:px-6 sm:py-24 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto max-w-6xl"
      >
        <h2 className="font-serif text-2xl font-medium text-mmc-white sm:text-3xl md:text-4xl">
          Methodology
        </h2>
        <p className="mt-2 max-w-xl font-sans text-sm text-mmc-white/70 sm:mt-3 sm:text-base">
          The Media-Lift Engine in practice: from data to simulation to
          optimization.
        </p>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {bentoCards.map((card) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: card.delay }}
              className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-4 transition-all duration-300 hover:border-mmc-gold/40 hover:shadow-[0_0_24px_-4px_rgba(200,163,85,0.15)] sm:p-6"
            >
              <div className="mb-4 inline-flex rounded-lg border border-white/10 bg-white/5 p-2.5 text-mmc-gold transition group-hover:border-mmc-gold/30 group-hover:bg-mmc-gold/10">
                <card.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg font-medium text-mmc-white">
                {card.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-mmc-white/70">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const PROMISE_METRICS = [
  {
    icon: Zap,
    value: 40,
    suffix: "+",
    label: "Hours of Due Diligence Saved Per Deal",
  },
  {
    icon: Target,
    value: 98,
    suffix: "%",
    label: "Media Inventory-Audience Match Rate",
  },
  {
    icon: TrendingUp,
    value: 10,
    suffix: "x",
    label: "Simulation Throughput vs. Manual Analysis",
  },
];

function PromiseCTA({ onHireClick }: { onHireClick?: () => void }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [displayValues, setDisplayValues] = useState([0, 0, 0]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    const targets = PROMISE_METRICS.map((m) => m.value);
    const duration = 1.5;
    const start = performance.now();
    const run = (now: number) => {
      const elapsed = (now - start) / 1000;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - t) ** 2;
      setDisplayValues(
        targets.map((v) => Math.round(eased * v))
      );
      if (t < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }, [isInView]);

  return (
    <section
      id="promise"
      ref={sectionRef}
      className="relative px-4 py-16 sm:px-6 sm:py-24 md:px-12"
      style={{ backgroundColor: "#1A0B2E" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto max-w-5xl text-center"
      >
        <h2 className="font-serif text-2xl font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Maximize Your{" "}
          <span className="text-[#D4AF37]">Media Equity Yield.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl font-sans text-sm text-mmc-white/80 sm:mt-4 sm:text-base md:text-lg">
          The Media-Lift Engine—the multi-agent system, roadmap, and simulation you’ve seen above—enhances investment precision and operational safety. It’s designed to be built. Vishwajeet knows what to make and how to deliver it.
        </p>
        <p className="mx-auto mt-2 max-w-2xl font-sans text-xs text-mmc-white/60 sm:mt-3 sm:text-sm md:text-base">
          The numbers below show the impact when this engine is built and owned.
        </p>
        {onHireClick ? (
          <motion.button
            type="button"
            onClick={onHireClick}
            className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-sans text-sm font-semibold text-black transition active:scale-[0.98] hover:bg-white/95 sm:mt-8 sm:px-8 sm:py-4 sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Hire Vishwajeet to Build This <ArrowRight className="h-4 w-4" />
          </motion.button>
        ) : (
          <motion.a
            href="#hire"
            className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-sans text-sm font-semibold text-black transition active:scale-[0.98] hover:bg-white/95 sm:mt-8 sm:px-8 sm:py-4 sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Hire Vishwajeet to Build This <ArrowRight className="h-4 w-4" />
          </motion.a>
        )}

        <div className="mt-10 grid gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {PROMISE_METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37] text-white sm:h-14 sm:w-14 md:h-16 md:w-16">
                <metric.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" strokeWidth={1.5} />
              </div>
              <p className="mt-3 font-serif text-3xl font-medium text-white sm:mt-4 sm:text-4xl md:text-5xl">
                {displayValues[index]}
                {metric.suffix}
              </p>
              <p className="mt-1.5 text-center font-sans text-xs text-mmc-white/60 sm:mt-2 sm:text-sm">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function App() {
  const [hireModalOpen, setHireModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-mmc-deep text-mmc-white flex flex-col">
      <Navbar onHireClick={() => setHireModalOpen(true)} />
      <main className="flex-1 bg-gradient-to-b from-transparent via-[#130620] to-[#0b0413]">
        <Hero />
        <BentoGrid />
        <Simulator />
        <StrategicRoadmap />
        <PromiseCTA onHireClick={() => setHireModalOpen(true)} />
      </main>
      <HireVishwajeetModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
      />
      <footer className="border-t border-white/10 px-4 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-8 md:px-12 bg-[#0b0413]/60 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-sans text-[0.525rem] text-mmc-white/50 sm:text-sm">
            © Mercurius Media Capital. Internal use. × A Product R&amp;D Pitch from Vishwajeet J K
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

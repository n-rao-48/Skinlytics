import { motion } from "motion/react";

export function Hero({ onAnalyzeClick }: { onAnalyzeClick: () => void }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1767360963892-3353defd6584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Minimal skincare"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F7F5]/60 via-[#F8F7F5]/80 to-[#F8F7F5]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
      >
        <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#0B0B0B] leading-[1.1]">
          Skinlytix
        </h1>
        <p className="text-2xl md:text-3xl text-[#111827] max-w-2xl mx-auto leading-relaxed">
          Intelligent Skincare, Personalized by AI
        </p>
        <p className="text-lg text-[#6B7280] max-w-xl mx-auto">
          Analyze your skin and discover ingredients tailored to you
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onAnalyzeClick}
          className="mt-8 px-12 py-5 bg-gradient-to-r from-[#8B9A8D] to-[#A8D5BA] text-white rounded-full hover:shadow-lg transition-all duration-300"
        >
          Analyze My Skin
        </motion.button>
      </motion.div>
    </section>
  );
}

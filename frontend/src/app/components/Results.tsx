import { motion } from "motion/react";

interface ResultsProps {
  ingredient: string;
  cluster: string;
  confidence: number;
}

export function Results({ ingredient, cluster, confidence }: ResultsProps) {
  return (
    <section className="py-24 px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-5xl text-[#0B0B0B] mb-16 text-center">
          Your Personalized Results
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-[#F5C7A9]/20 to-[#F5C7A9]/5 rounded-2xl p-10 border border-[#D4806A]/20 transition-all duration-300"
          >
            <p className="text-sm text-[#6B7280] mb-3 uppercase tracking-wider">
              Recommended Ingredient
            </p>
            <h3 className="text-3xl text-[#0B0B0B] mb-4">{ingredient}</h3>
            <p className="text-[#6B7280] leading-relaxed">
              AI-selected active ingredient optimized for your unique skin profile
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-[#A8D5BA]/20 to-[#A8D5BA]/5 rounded-2xl p-10 border border-[#8B9A8D]/20 transition-all duration-300"
          >
            <p className="text-sm text-[#6B7280] mb-3 uppercase tracking-wider">
              Skin Profile
            </p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B9A8D] to-[#A8D5BA] text-white px-5 py-2 rounded-full mb-4">
              <span>{cluster}</span>
            </div>
            <p className="text-[#6B7280] leading-relaxed">
              Your skin falls into this scientifically-backed profile cluster
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-[#B8A9D4]/20 to-[#B8A9D4]/5 rounded-2xl p-10 border border-[#B8A9D4]/20 transition-all duration-300"
          >
            <p className="text-sm text-[#6B7280] mb-3 uppercase tracking-wider">
              Confidence Score
            </p>
            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl text-[#0B0B0B]">{confidence}</span>
                <span className="text-2xl text-[#6B7280]">%</span>
              </div>
              <div className="mt-4 h-2 bg-[#E8E6E1] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${confidence}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-[#B8A9D4] to-[#D4806A] rounded-full"
                />
              </div>
            </div>
            <p className="text-[#6B7280] leading-relaxed">
              ML model prediction accuracy for this recommendation
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from "motion/react";
import { useState } from "react";

interface AnalysisFormProps {
  onSubmit: (data: {
    skinType: string;
    sensitivity: string;
    concern: string;
  }) => void;
  isLoading?: boolean;
  error?: string | null;
}

export function AnalysisForm({ onSubmit, isLoading = false, error }: AnalysisFormProps) {
  const [skinType, setSkinType] = useState("");
  const [sensitivity, setSensitivity] = useState("");
  const [concern, setConcern] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (skinType && sensitivity && concern) {
      onSubmit({ skinType, sensitivity, concern });
    }
  };

  return (
    <section className="py-24 px-8 bg-[#F8F7F5]" id="analysis">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-white rounded-2xl p-12 shadow-sm border border-[#0B0B0B]/5">
          <h2 className="text-4xl text-[#0B0B0B] mb-2 text-center">
            Your Skin Profile
          </h2>
          <p className="text-[#6B7280] text-center mb-10">
            Help us understand your unique skin needs
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="block text-[#111827]">Skin Type</label>
              <div className="grid grid-cols-2 gap-3">
                {["Oily", "Dry", "Combination", "Normal"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSkinType(type)}
                    className={`py-4 px-6 rounded-xl border transition-all duration-200 ${
                      skinType === type
                        ? "bg-[#8B9A8D] text-white border-[#8B9A8D]"
                        : "bg-white text-[#111827] border-[#0B0B0B]/10 hover:border-[#8B9A8D]/50"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-[#111827]">Sensitivity Level</label>
              <div className="grid grid-cols-3 gap-3">
                {["Low", "Medium", "High"].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setSensitivity(level)}
                    className={`py-4 px-6 rounded-xl border transition-all duration-200 ${
                      sensitivity === level
                        ? "bg-[#B8A9D4] text-white border-[#B8A9D4]"
                        : "bg-white text-[#111827] border-[#0B0B0B]/10 hover:border-[#B8A9D4]/50"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-[#111827]">Primary Skin Concern</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Acne",
                  "Dark Spots",
                  "Fine Lines",
                  "Redness",
                  "Dullness",
                  "Large Pores",
                ].map((concernOption) => (
                  <button
                    key={concernOption}
                    type="button"
                    onClick={() => setConcern(concernOption)}
                    className={`py-4 px-6 rounded-xl border transition-all duration-200 ${
                      concern === concernOption
                        ? "bg-[#D4806A] text-white border-[#D4806A]"
                        : "bg-white text-[#111827] border-[#0B0B0B]/10 hover:border-[#D4806A]/50"
                    }`}
                  >
                    {concernOption}
                  </button>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={!skinType || !sensitivity || !concern || isLoading}
              className="w-full py-5 bg-gradient-to-r from-[#8B9A8D] to-[#A8D5BA] text-white rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                  Analyzing...
                </>
              ) : (
                "Get Recommendation"
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

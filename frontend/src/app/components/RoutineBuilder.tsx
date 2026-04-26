import { motion } from "motion/react";

interface RoutineBuilderProps {
  skinType?: string;
  sensitivity?: string;
  concern?: string;
}

const routineSteps = [
  {
    time: "AM",
    steps: [
      { order: 1, name: "Gentle Cleanser", duration: "1 min" },
      { order: 2, name: "Niacinamide Serum", duration: "30 sec" },
      { order: 3, name: "Hyaluronic Acid", duration: "30 sec" },
      { order: 4, name: "Moisturizer", duration: "1 min" },
      { order: 5, name: "SPF 50", duration: "1 min" },
    ],
  },
  {
    time: "PM",
    steps: [
      { order: 1, name: "Oil Cleanser", duration: "2 min" },
      { order: 2, name: "Water-Based Cleanser", duration: "1 min" },
      { order: 3, name: "Retinol Treatment", duration: "30 sec" },
      { order: 4, name: "Night Cream", duration: "1 min" },
    ],
  },
];

export function RoutineBuilder({ skinType, sensitivity, concern }: RoutineBuilderProps) {
  // TODO: Call API to fetch personalized routine based on skinType, sensitivity, concern
  // For now, using static routine
  
  return (
    <section className="py-24 px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-5xl text-[#0B0B0B] mb-4 text-center">
          Your Daily Routine
        </h2>
        <p className="text-[#6B7280] text-center mb-16 max-w-2xl mx-auto">
          A science-backed skincare routine tailored to your profile
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {routineSteps.map((routine, routineIndex) => (
            <motion.div
              key={routine.time}
              initial={{ opacity: 0, x: routineIndex === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F8F7F5] rounded-2xl p-10 border border-[#0B0B0B]/5"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
                  routine.time === "AM"
                    ? "bg-gradient-to-br from-[#F5C7A9] to-[#D4806A]"
                    : "bg-gradient-to-br from-[#B8A9D4] to-[#8B9A8D]"
                }`}>
                  {routine.time}
                </div>
                <h3 className="text-2xl text-[#0B0B0B]">
                  {routine.time === "AM" ? "Morning" : "Evening"} Routine
                </h3>
              </div>

              <div className="space-y-4">
                {routine.steps.map((step, stepIndex) => (
                  <motion.div
                    key={stepIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + stepIndex * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-white border flex items-center justify-center text-sm text-[#0B0B0B] transition-all duration-300 ${
                      routineIndex === 0
                        ? "border-[#D4806A]/20 group-hover:bg-gradient-to-br group-hover:from-[#F5C7A9] group-hover:to-[#D4806A] group-hover:text-white group-hover:border-transparent"
                        : "border-[#B8A9D4]/20 group-hover:bg-gradient-to-br group-hover:from-[#B8A9D4] group-hover:to-[#8B9A8D] group-hover:text-white group-hover:border-transparent"
                    }`}>
                      {step.order}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-[#0B0B0B] mb-1">{step.name}</p>
                      <p className="text-sm text-[#6B7280]">{step.duration}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

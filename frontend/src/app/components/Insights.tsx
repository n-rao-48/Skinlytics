import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const dataPoints = [
  { name: "Niacinamide", value: 94 },
  { name: "Retinol", value: 87 },
  { name: "Vitamin C", value: 82 },
  { name: "Hyaluronic", value: 79 },
  { name: "Peptides", value: 71 },
];

const insights = [
  {
    metric: "Skin Compatibility",
    value: "98%",
    description: "Based on your profile analysis",
  },
  {
    metric: "Ingredient Efficacy",
    value: "94%",
    description: "Clinical study success rate",
  },
  {
    metric: "Profile Matches",
    value: "2,847",
    description: "Similar users in our database",
  },
];

export function Insights() {
  return (
    <section className="py-24 px-8 bg-[#F8F7F5]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-5xl text-[#0B0B0B] mb-4 text-center">
          Data-Driven Insights
        </h2>
        <p className="text-[#6B7280] text-center mb-16 max-w-2xl mx-auto">
          Advanced analytics powering your personalized recommendations
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {insights.map((insight, index) => {
            const gradients = [
              "from-[#8B9A8D]/10 to-[#A8D5BA]/10 border-[#8B9A8D]/20",
              "from-[#D4806A]/10 to-[#F5C7A9]/10 border-[#D4806A]/20",
              "from-[#B8A9D4]/10 to-[#B8A9D4]/10 border-[#B8A9D4]/20"
            ];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${gradients[index]} rounded-2xl p-8 border`}
              >
                <p className="text-sm text-[#6B7280] mb-2 uppercase tracking-wider">
                  {insight.metric}
                </p>
                <p className="text-4xl text-[#0B0B0B] mb-2">{insight.value}</p>
                <p className="text-sm text-[#6B7280]">{insight.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-10 border border-[#0B0B0B]/5"
        >
          <h3 className="text-2xl text-[#0B0B0B] mb-8">
            Ingredient Match Scores
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataPoints} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 14 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 14 }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {dataPoints.map((entry, index) => {
                  const colors = ["#8B9A8D", "#D4806A", "#B8A9D4", "#A8D5BA", "#F5C7A9"];
                  return (
                    <Cell
                      key={`cell-${entry.name}-${index}`}
                      fill={colors[index]}
                    />
                  );
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </motion.div>
    </section>
  );
}

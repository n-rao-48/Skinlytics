import { useRef, useState } from "react";
import * as api from "../services/api";
import { mapConcern, mapSensitivity, mapSkinType } from "../utils/mappers";
import { AnalysisForm } from "./components/AnalysisForm";
import { Hero } from "./components/Hero";
import { Insights } from "./components/Insights";
import { ProductRecommendations } from "./components/ProductRecommendations";
import { Results } from "./components/Results";
import { RoutineBuilder } from "./components/RoutineBuilder";

export default function App() {
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysisData, setAnalysisData] = useState({
    ingredient: "Niacinamide",
    cluster: "Type A - Balanced",
    confidence: 94,
  });
  const [formData, setFormData] = useState({
    skinType: "",
    sensitivity: "",
    concern: "",
  });
  const analysisRef = useRef<HTMLDivElement>(null);

  const handleAnalyzeClick = () => {
    analysisRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = async (data: {
    skinType: string;
    sensitivity: string;
    concern: string;
  }) => {
    setIsLoading(true);
    setError(null);
    setFormData(data);

    try {
      const mappedSensitivity = mapSensitivity(data.sensitivity);
      const mappedConcern = mapConcern(data.concern);
      const mappedSkinType = mapSkinType(data.skinType);

      console.log("FORM DATA:", data);
      console.log("Mapped sensitivity:", mappedSensitivity);
      console.log("Mapped concern:", mappedConcern);
      console.log("Mapped skin type:", mappedSkinType);

      // Call the predict API
      const response = await api.predictSkin({
        skin_type: mappedSkinType,
        sensitivity: mappedSensitivity,
        concern: mappedConcern,
      });

      if (response.success) {
        setAnalysisData({
          ingredient: response.ingredient,
          cluster: response.cluster_label,
          confidence: Math.round(response.confidence * 100),
        });
        setShowResults(true);
        setTimeout(() => {
          document.querySelector("#results")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        throw new Error(response.error || "Prediction failed");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      console.error("Form submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F5]">
      <Hero onAnalyzeClick={handleAnalyzeClick} />

      <div ref={analysisRef}>
        <AnalysisForm
          onSubmit={handleFormSubmit}
          isLoading={isLoading}
          error={error}
        />
      </div>

      {error && (
        <div className="mx-auto max-w-2xl px-8 py-6 bg-red-50 border border-red-200 rounded-lg text-red-800 mb-4">
          <p className="font-semibold">Error: {error}</p>
          <p className="text-sm mt-2">Make sure the backend is running at {import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"}</p>
        </div>
      )}

      {showResults && (
        <div id="results">
          <Results
            ingredient={analysisData.ingredient}
            cluster={analysisData.cluster}
            confidence={analysisData.confidence}
          />
          <ProductRecommendations
            concern={formData.concern}
            skinType={formData.skinType}
          />
          <RoutineBuilder
            skinType={formData.skinType}
            sensitivity={formData.sensitivity}
            concern={formData.concern}
          />
          <Insights />
        </div>
      )}

      <footer className="py-16 px-8 bg-[#0B0B0B] text-center">
        <p className="text-[#F8F7F5] text-sm">
          © 2026 Skinlytix — AI-Powered Skincare Intelligence
        </p>
      </footer>
    </div>
  );
}
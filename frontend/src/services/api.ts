/**
 * Skinlytix API Service
 * Handles all communication with the FastAPI backend
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface PredictRequest {
  skin_type: string;
  sensitivity: string;
  concern: string;
}

export interface PredictResponse {
  success: boolean;
  ingredient: string;
  cluster_label: string;
  cluster_number: number;
  confidence: number;
  ingredient_confidence: number;
  cluster_confidence: number;
  error?: string;
}

export interface RecommendRequest {
  skin_type: string;
  concerns: string[];
  age: number;
  preferences?: Record<string, any>;
}

export interface Recommendation {
  ingredient: string;
  score: number;
  reasoning: string;
}

export interface RecommendResponse {
  success: boolean;
  recommendations: Recommendation[];
  count: number;
  error?: string;
}

export interface RoutineRequest {
  skin_type: string;
  sensitivity: string;
  concern: string;
  routine_type?: string;
  routine_focus?: string;
}

export interface RoutineStep {
  order: number;
  name: string;
  duration: string;
}

export interface RoutineResponse {
  success: boolean;
  morning_routine: RoutineStep[];
  evening_routine: RoutineStep[];
  tips: string[];
  error?: string;
}

// ============================================================================
// API FUNCTIONS
// ============================================================================

/**
 * Call the predict endpoint to get skin analysis
 */
export async function predictSkin(data: PredictRequest): Promise<PredictResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.detail || `Prediction failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Prediction API error:", error);
    throw error;
  }
}

/**
 * Call the recommend endpoint to get product recommendations
 */
export async function getRecommendations(
  data: RecommendRequest
): Promise<RecommendResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/recommend`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.detail || `Recommendation failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Recommendation API error:", error);
    throw error;
  }
}

/**
 * Call the routine endpoint to get personalized skincare routine
 */
export async function getRoutine(data: RoutineRequest): Promise<RoutineResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/routine`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.detail || `Routine generation failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Routine API error:", error);
    throw error;
  }
}

/**
 * Health check to verify backend is running
 */
export async function healthCheck(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.ok;
  } catch (error) {
    console.error("Health check failed:", error);
    return false;
  }
}

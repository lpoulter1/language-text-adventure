import { NextResponse } from "next/server";
import { ELEVENLABS_CONFIG } from "../../../config";

export async function POST(request: Request) {
  try {
    const { text, voiceId, modelId, stability, similarityBoost } =
      await request.json();

    // Check if API key is available
    if (!ELEVENLABS_CONFIG.API_KEY) {
      return NextResponse.json(
        { error: "ElevenLabs API key is missing" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `${ELEVENLABS_CONFIG.API_URL}/text-to-speech/${
        voiceId || ELEVENLABS_CONFIG.ITALIAN_VOICE_ID
      }`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": ELEVENLABS_CONFIG.API_KEY,
        },
        body: JSON.stringify({
          text,
          model_id: modelId || ELEVENLABS_CONFIG.MODEL_ID,
          voice_settings: {
            stability: stability || ELEVENLABS_CONFIG.STABILITY,
            similarity_boost:
              similarityBoost || ELEVENLABS_CONFIG.SIMILARITY_BOOST,
            speed: 0.8,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        {
          error: `ElevenLabs API error: ${response.status} - ${
            errorData.detail || "Unknown error"
          }`,
        },
        { status: response.status }
      );
    }

    // Get the audio as an ArrayBuffer
    const audioBuffer = await response.arrayBuffer();

    // Return the audio with proper content type
    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("Error generating speech:", error);
    return NextResponse.json(
      { error: "Failed to generate speech" },
      { status: 500 }
    );
  }
}

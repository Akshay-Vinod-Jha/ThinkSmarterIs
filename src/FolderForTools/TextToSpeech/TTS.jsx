import React from "react";
import { HfInference } from "@huggingface/inference";
const TTS = () => {
  const HF_TOKEN = "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";
  const inference = new HfInference(HF_TOKEN);
  const fun = async () => {
    const response = await inference.translation({
      model: "t5-base",
      inputs: "My name is Wolfgang and I live in Berlin",
    });
    console.log(response.translation_text);
  };
  fun();
  return <div>hello world</div>;
};

export default TTS;

import React from "react";
import { HfInference } from "@huggingface/inference";
const Chatbot = () => {
  const HF_TOKEN = "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";
  const inference = new HfInference(HF_TOKEN);
  const callMe = async () => {
    const data = await inference.textGeneration({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      inputs: "supercars in india",
    });
    console.log(data.generated_text);
  };
  callMe();
  return <div></div>;
};

export default Chatbot;

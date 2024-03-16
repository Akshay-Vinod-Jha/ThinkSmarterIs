import React from "react";

const TTC = () => {
  function callApi(requestString) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYjg5ZDY4ODAtNGU0ZC00MGVjLWE4MDktZGE1YjgyNzc2MmNjIiwidHlwZSI6ImFwaV90b2tlbiJ9.onYRvxjLlSM7eYAObKF97w1YLJ5npJ9XEPcghdoMI5g",
      },
      body: JSON.stringify({
        providers: "openai",
        prompt: "",
        instruction: requestString,
        temperature: 0.1,
        max_tokens: 500,
        fallback_providers: "",
      }),
    };

    fetch("https://api.edenai.run/v2/text/code_generation", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  callApi("hello world in javascript");
  return <div></div>;
};

export default TTC;

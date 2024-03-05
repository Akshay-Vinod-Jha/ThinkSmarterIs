import React from "react";
import ToolsBox from "./ToolsBox";

function AllParent(props) {
  const arrayOfTools = [
    {
      name: "visualize AI",
      imageUrl: "../../images/texttoimage.png",
      slogan:
        "This tool is designed to <span className='text-[#fc0001]'>visualize an image</span> based on provided text.",
      slogan2:
        "This tool is designed for students working on projects where obtaining diverse images may be challenging. It facilitates the generation of images based on specified descriptions provided by the students",
      advantages: [
        "Complimentary service.",
        "Creates images based on prompts.",
        "Operates efficiently, minimizing time consumption.",
        "Provides accurate outputs.",
      ],
    },

    {
      name: "Vision verbalizer",
      imageUrl: "../../images/Image-to-text-converter.webp",
      slogan:
        "This tool is intended to <span className='text-[#fc0001]'>generate visual representations of text</span> that corresponds to a provided image.",
      slogan2:
        "This tool, tailored for students, addresses the occasional need for detailed descriptions of specific images. Our tool facilitates the generation of image descriptions based on provided input.",
      advantages: [
        "Generates textual content based on supplied images.",
        "Complimentary service.",
        "Offers a straightforward means to comprehend the meaning of images.",
        "Additionally, enables text extraction from the provided image.",
      ],
    },
    {
      name: "AI Transcribe Tube",
      imageUrl: "../../images/YouTube-Auto-Translate-not-working-iphone.png",
      slogan:
        "This tool is designed to <span className='text-[#fc0001]'>transcribe YouTube videos<span> into textual content.",
      slogan2:
        "This tool is purpose-built for academic use, allowing students to efficiently grasp the content of a video without the need to watch or listen to the entire duration. By simply providing the video link, the tool generates text, enabling students to read and comprehend the information swiftly",
      advantages: [
        "Translates YouTube videos into text format.",
        "Efficiently handles lengthy topics in a timely manner.",
        "Available to everyone as a complimentary service.",
        "Eliminates the necessity to watch and listen to the video",
      ],
    },
    {
      name: "AI Brief Buddy",
      imageUrl: "../../images/aibriefbuddy.png",
      slogan:
        "This tool is designed to <span className='text-[#fc0001]'>condense lengthy text</span> into a more comprehensible form.",
      slogan2:
        "This tool serves educational objectives, facilitating efficient comprehension of lengthy topics for students. In a short time span, the tool generates concise summaries of provided extensive text, aiding swift understanding.",
      advantages: [
        "Condenses extensive topics into a comprehensible format.",
        "Universally accessible without any associated costs.",
        "Demonstrates time efficiency, particularly in addressing complex subjects.",
        "Offers the simplest and most straightforward approach to understanding lengthy topics.",
      ],
    },
    {
      name: "Inquiry Response",
      imageUrl: "../../images/1453716.png",
      slogan:
        "This tool is engineered to provide <span className='text-[#fc0001]'>rapid responses to questions</span> based on the provided context.",
      slogan2:
        "This tool is designed for academic purposes, enabling students to comprehend complex topics without the necessity of reading the entire length. By presenting questions aligned with the context, the tool provides precise answers to aid in understanding the topic efficiently.",
      advantages: [
        "Users can pose questions within the provided context.",
        "Delivers accurate responses to user queries.",
        "A complimentary service.",
        "Presents the most accessible method for comprehending lengthy topics.",
      ],
    },
    {
      name: "Spell checker",
      imageUrl: "../../images/spellchecker.png",
      slogan:
        "This tool can <span className='text-[#fc0001]'>check spellings</span>, identify grammatical errors, and correct them.",
      slogan2:
        "This tool is tailored to enhance students' English proficiency. By submitting sentences, students can utilize the tool to identify and correct spelling and grammatical errors, fostering an improved understanding of language conventions.",
      advantages: [
        "Provide a complimentary tool",
        "Highlight spelling errors.",
        "Identify grammatical mistakes.",
        "Specify error locations from start to end.",
        "Suggest correct spellings and grammatically sound alternatives.",
      ],
    },
    {
      name: "Text To Code",
      imageUrl: "../../images/texttocode.png",
      slogan:
        "This tool is designed to <span className='text-[#fc0001]'>generate code</span> in the selected programming language based on the provided text",
      slogan2:
        "This tool assists students in the field of computer science by facilitating the generation of code in any programming language. Users only need to accurately specify the desired output through provided text",
      advantages: [
        "Beneficial for programming students.",
        "Complimentary service.",
        "Supports the selection of multiple programming languages.",
        "Generates accurate code based on the provided prompt.",
      ],
    },
    {
      name: "ChatBot",
      imageUrl: "../../images/chatbot.png",
      slogan:
        "An automated conversational agent designed to simulate <span className='text-[#fc0001]'>human-like interaction</span> through text or voice interfaces.",
      slogan2:
        "Chatbots can be invaluable tools for students, providing instant access to information, assistance, and guidance. Whether it's answering questions about coursework, providing study tips, or offering support for mental health and well-being, chatbots offer a convenient and accessible resource for students to enhance their learning experience. With their ability to quickly respond to inquiries and adapt to individual needs, chatbots can help students navigate academic challenges more effectively and efficiently.",
      advantages: [
        "Deliver responses based on the entered prompt.",
        "Ensure time efficiency in the generation process.",
        "Preserve a comprehensive history for repeated utilization.",
        "Provide a feature to easily copy the generated result.",
      ],
    },
  ];
  const arrayOfSteps = [
    [
      "Input the prompt to generate the desired output image.",
      "click on generate image button.",
      "Await the completion of the output generation process.",
      "View the output image in the designated output box.",
      "Additionally, copy the generated image for integration into your project.",
    ],
    [
      "Provide the image input functionality with the option to either drag and drop, copy and paste, or browse from the local disk for additional feature incorporation.",
      "Await the completion of the output generation process.",
      "Observe the generated text displayed in the output box.",
      "Additionally, utilize the option to copy the generated text for further use in your project.",
    ],
    [
      "Input the YouTube video URL into the designated input area.",
      "Initiate the output generation process by clicking the corresponding 'Generate' button.",
      "Exercise patience while awaiting the completion of the output generation.",
      "Observe the output displayed in the designated area; if the output is extensive, utilize the scrolling function for thorough review.",
      "Employ the copy button located below the output area to efficiently duplicate the generated output for further use.",
    ],
    [
      "Input the context into the designated input area.",
      "Initiate the generation of summarized text by clicking the corresponding button.",
      "Patiently await the completion of the output generation process.",
      "Review the generated summarized text displayed in the designated output area.",
      "Utilize the copy button to efficiently copy the summarized text for further use.",
    ],
    [
      "Input the context into the designated input area.",
      "Pose a question pertaining to the provided context in the designated question box.",
      "Initiate the answer retrieval process by clicking the 'Answer' button.",
      "Exercise patience while awaiting the generation of the answer.",
      "Observe the provided answer displayed in the answer box; if the response is extensive, utilize the scrolling feature for comprehensive reading.",
    ],
    [
      "Input a sentence or context into the designated input area.",
      "Initiate the spelling and grammar verification process by clicking the 'Check' button.",
      "Identify errors through the display of a squiggly line beneath the affected sentences.",
      "Upon clicking the erroneous sentence, the starting and ending points are indicated below.",
      "In the replacement box, the accurate spelling or sentence is presented upon selecting a specific error.",
      "Utilize the provided copy button to efficiently replicate the correct answer.",
    ],
    [
      "Input a prompt relevant to the desired output.",
      "Choose the programming language from the provided selection box.",
      "Initiate the output generation process by clicking the 'Generate' button.",
      "Exercise patience while awaiting the completion of the output generation.",
      "Observe the generated output displayed in the designated output area.",
      "Utilize the button located below the output area to efficiently copy the generated code for further use.",
    ],
    [
      "Input the prompt to generate the desired output.",
      "Initiate the output generation process by clicking the arrow icon.",
      "Exercise patience while awaiting the completion of the output generation.",
      "Observe the generated output displayed on the screen.",
      "Utilize the copy button to efficiently duplicate the output for further use.",
    ],
  ];
  return (
    <div className="w-[100%] rounded-xl md:grid-rows-4 grid-rows-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center place-items-center gap-2 md:gap-3 lg:gap-10 p-1 md:p-2 lg:p-10 my-10">
      {arrayOfTools.map((value, index) => {
        return (
          <ToolsBox
            toolName={value.name}
            slogan={value.slogan}
            imageUrl={value.imageUrl}
            style={{}}
            onClick={() => {
              props.updateState();
              props.updateClicked({
                ...arrayOfTools[index],
                slogan: arrayOfTools[index].slogan2,
                steps: arrayOfSteps[index],
              });
            }}
          ></ToolsBox>
        );
      })}
    </div>
  );
}

export default AllParent;

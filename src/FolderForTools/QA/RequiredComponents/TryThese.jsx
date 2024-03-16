import { TbBulb } from "react-icons/tb";
import classes from "./TryThese.module.css";
import QA1 from "../../../../images/QA1.png";
import QA2 from "../../../../images/QA2.jpg";
import QA3 from "../../../../images/QA3.webp";
import QA4 from "../../../../images/QA4.webp";

const viaDocumentSamples = [
  {
    src: QA1,
    question:
      "What is one reason why electric cars are expected to become more prevalent in the auto industry according to the paragraph?",
  },
  {
    src: QA2,
    question: "What is a paragraph?",
  },
  {
    src: QA3,
    question:
      "What essential skills are required for effectively writing about descriptive essay topics according to the paragraph?",
  },
  {
    src: QA4,
    question:
      "What essential skills are required for effectively writing about descriptive essay topics according to the paragraph?",
  },
];

const samples = [
  {
    context: `In a bustling city, a group of friends gathers in a cozy café after work. They sip on steaming cups of coffee and share stories about their day. Among them, one friend excitedly talks about a new book they've started reading.`,
    question: `What genre of book might the friend be discussing?`,
  },
  {
    context: `In a lush garden, a family spends their Sunday afternoon planting flowers and vegetables. The children giggle as they play in the dirt, while their parents carefully tend to the young sprouts. Nearby, a butterfly flits from bloom to bloom.`,
    question: `How does gardening benefit both the family and the environment?`,
  },
  {
    context: `A classroom buzzes with the energy of learning as students eagerly participate in a science experiment. They mix colorful liquids and observe the mesmerizing reactions, their faces lighting up with wonder and curiosity.`,
    question: `What scientific principle might the students be exploring through the experiment?`,
  },
  {
    context: `Underneath a starry night sky, a group of friends gathers around a crackling campfire. They roast marshmallows on sticks and share ghost stories, their laughter echoing through the quiet forest around them.`,
    question: `How does spending time outdoors enhance social bonds among friends?`,
  },
];

const TryThese = ({
  trythisHandler,
  display,
  getAnswerFromImage,
  setSrc,
  questionRef,
}) => {
  const imagesHandler = async (val) => {
    const data = await fetch(val.src);
    const blob = await data.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      setSrc(reader.result);
      questionRef.current.value = val.question;
      getAnswerFromImage(reader.result, val.question);
    };
  };
  const images = viaDocumentSamples.map((val, ind) => {
    return (
      <div
        key={`viaDocument${ind}`}
        className={classes.imageContainer}
        onClick={() => imagesHandler(val)}
      >
        <img src={val.src} />
        <p>Question : {val.question}</p>
      </div>
    );
  });
  const context = samples.map((val, ind) => {
    return (
      <div
        key={`samples${ind}`}
        className={classes.sample}
        onClick={() => {
          trythisHandler(val.context, val.question);
        }}
      >
        <p>Context: {val.context}</p>
        <p>Question: {val.question}</p>
      </div>
    );
  });

  const content = display === "textarea" ? context : images;
  return (
    <div className={classes.tryThisCantainer}>
      <h1>
        <TbBulb color="yellow" fontSize="1.5rem" />
        Don’t have idea ? Try these!
      </h1>
      <div className={classes["samples-container"]}>{content}</div>
    </div>
  );
};

export default TryThese;

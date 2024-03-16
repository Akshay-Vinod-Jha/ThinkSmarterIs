import React from "react";
import YoutubeTitle from "./YoutubeTitle";
import Description from "./Description";
import ALanguages from "./ALanguages";
import ThumbNails from "./ThumbNails";
import Trancription from "./Trancription";
const ParentYt = (props) => {
  return (
    <div className="w-full mt-4 flex flex-col justify-start items-start gap-8 font-lexend text-[12px] md:text-base lg:text-lg text-white">
      {props.value.title && <YoutubeTitle title={props.value.title} />}
      {props.value.thumbnails && props.value.thumbnails.length !== 0 && (
        <ThumbNails value={props.value.thumbnails}></ThumbNails>
      )}
      {props.value.availableLangs &&
        props.value.availableLangs.length !== 0 && (
          <ALanguages value={props.value.availableLangs} />
        )}
      {props.value.transcription && props.value.transcription.length !== 0 && (
        <Trancription
          value={props.value.transcription}
          copyText={props.copyText}
          setCopyText={props.setCopyText}
        />
      )}
      {props.value.lengthInSeconds && (
        <div className="w-full flex justify-between items-center">
          <h1>Duartion Of video</h1>
          <h1 className="text-[#fc0001] ml-2 underline underline-offset-8 decoration-[#fc0001]">
            {props.value.lengthInSeconds} seconds
          </h1>
        </div>
      )}
      {props.value.description && props.value.description.length !== 0 && (
        <Description des={props.value.description}></Description>
      )}
    </div>
  );
};

export default ParentYt;

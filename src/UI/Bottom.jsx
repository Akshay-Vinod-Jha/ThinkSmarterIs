import React from "react";
import OrangeButton from "./OrangeButton";
import { useNavigate } from "react-router-dom";
const Bottom = ({ label, navigateTo, userId }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full p-2 flex justify-end items-center">
      <div className="md:w-max w-full">
        <OrangeButton
          onClick={() => navigate(navigateTo, { state: { userId: userId } })}
        >
          {label}
        </OrangeButton>
      </div>
    </div>
  );
};

export default Bottom;

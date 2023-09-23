import React from "react";
import { CustomSVGProps } from "@/lib/types";

const QuestionMark: React.FC<CustomSVGProps & { onClick?: () => void }> = ({
  width,
  height,
  className,
  color,
  onClick,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 184 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M92 175.333C138.024 175.333 175.333 138.024 175.333 92C175.333 45.9763 138.024 8.66667 92 8.66667C45.9762 8.66667 8.66663 45.9763 8.66663 92C8.66663 138.024 45.9762 175.333 92 175.333Z"
        stroke={color}
        strokeWidth="16.6667"
      />
      <path
        d="M75.3333 62.7C79.4999 54.45 83.6666 50.3333 91.9999 50.3333C102.383 50.3333 108.667 58.575 108.667 66.8167C108.667 75.0583 104.5 79.175 91.9999 87.425V100.333M91.9999 129.5V133.667"
        stroke={color}
        strokeWidth="16.6667"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default QuestionMark;

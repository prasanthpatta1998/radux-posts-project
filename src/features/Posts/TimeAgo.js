import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ time }) => {
  let timeAgo = "";
  if (time) {
    const date = parseISO(time);
    const calculateTime = formatDistanceToNow(date);
    timeAgo = `${calculateTime} ago`;
  }

  return <div>{timeAgo}</div>;
};

export default TimeAgo;

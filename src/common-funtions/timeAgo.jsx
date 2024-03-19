import { parseISO, formatDistanceToNow } from "date-fns";
export const timeAgo = (date) => {
  const datee = parseISO(date);
  const timeperiod = formatDistanceToNow(datee);
  return `${timeperiod} ago`;
};

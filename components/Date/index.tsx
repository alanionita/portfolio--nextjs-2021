import { format, toDate } from "date-fns";
import { TDateProps } from "../../types/props";

export function Date({ dateString }: TDateProps) {
  const dateObject = toDate(dateString!);
  return (
    <time dateTime={String(dateString)}>
      {format(dateObject, "EEEE, do LLLL, yyyy")}
    </time>
  );
}

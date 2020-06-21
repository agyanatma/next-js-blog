import { parseISO, format } from "date-fns";

const DateFormatter = ({ value }) => {
    const date = parseISO(value);
    return <time dateTime={value}>{format(date, "EEEE, d MMMM yyyy")}</time>;
};

export default DateFormatter;

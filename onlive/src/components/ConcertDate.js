import { padStart, monthName } from 'utils';

export default ({ date }) => {
    const d = new Date(date);
    return `${monthName(d.getMonth())} ${d.getDate()}, ${d.getHours()}: ${padStart(d.getMinutes(), 2)}`;
};
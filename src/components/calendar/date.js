import { eachDayOfInterval } from 'date-fns';

const may = eachDayOfInterval({
  start: new Date(2024, 3, 29),
  end: new Date(2024, 5, 2),
});
const june = eachDayOfInterval({
  start: new Date(2024, 4, 27),
  end: new Date(2024, 5, 30),
});
const jule = eachDayOfInterval({
  start: new Date(2024, 6, 1),
  end: new Date(2024, 7, 4),
});
const august = eachDayOfInterval({
  start: new Date(2024, 6, 29),
  end: new Date(2024, 8, 1),
});
export const period = [may, june, jule, august];

// const result = formatISO(new Date(2019, 8, 18, 19, 0, 52));
//=> '2019-09-18T19:00:52Z'

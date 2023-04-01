const defaultLocaleDateTimeFn = (date: string, time: string) => {
  const [day, month, year] = date.split('.').map((el, idx, arr) => {
    if (idx === arr.length - 1) {
      return el;
    }
    return `0${el}`.slice(-2);
  });
  return `${day}.${month}.${year} ${time}`;
};

export const getLocaleDateTime = (
  localDateTimeWrapper: (
    date: string,
    time: string,
  ) => string = defaultLocaleDateTimeFn,
) => {
  const [date, time] = new Date()
    .toLocaleString()
    .split(',')
    .map(el => el.trim());
  return localDateTimeWrapper(date, time);
};

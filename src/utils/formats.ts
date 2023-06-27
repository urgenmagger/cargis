export const getFormatDate = (date: string): string => {
  const date_ = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  };
  const formattedDate = date_.toLocaleDateString('en', options);
  const [day, month, year] = formattedDate.split('/');
  return `${day}.${month}.${year}`;
};

export function getDate(date: Date): string {
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}

export function getTime(date: Date): string {
  return date.getHours() + ":" + date.getMinutes();
}

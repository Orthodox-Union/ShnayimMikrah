export function parseRange(range: string) {
  const operative = range.split(' ')[1].split('-');
  const start = operative[0].split(':').map(Number);
  const end = operative[1]?.split(':').map(Number);
  if (end?.length === 1) {
    end.unshift(start[0]);
  }
  return { start, end }
}
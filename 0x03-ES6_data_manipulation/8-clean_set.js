export default function cleanSet (set, startString) {
  const newList = [];
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  for (const item of set) {
    if ((typeof item === 'string') && (item.startsWith(startString))) {
      newList.push(item.slice(startString.length));
    }
  }
  return newList.join('-');
};

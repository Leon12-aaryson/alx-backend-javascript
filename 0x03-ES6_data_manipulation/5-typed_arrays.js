export default function createInt8TypedArray (length, position, value) {
  if (position > length) {
    throw Error('Position outside range');
  }
  const bufferArray = new ArrayBuffer(length);
  const apiView = new DataView(bufferArray);
  apiView.setInt8(position, value);
  return apiView;
};

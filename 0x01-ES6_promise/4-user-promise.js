export default function uploadPhoto (fileName) {
  return new Promise((resolve, reject) => {
    const isProcessed = Math.random() < 0.5;

    if (isProcessed) {
      resolve(`Photo ${fileName} has been successfully processed`);
    } else {
      reject(new Error(`Error: ${fileName} cannot be processed`));
    }
  });
};

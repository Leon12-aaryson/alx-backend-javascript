import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser () {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return { photo, user };
  } catch (error) {
    console.error('Error:', error.message);
    return { photo: null, user: null };
  }
}

asyncUploadUser().then((result) => {
  console.log(result);
});

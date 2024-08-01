import {
  getFirestore,
  getDocs,
  collection,
  getDoc,
  doc,
  query,
  where,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import app from "./init";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const firestore = getFirestore(app);
const storage = getStorage();

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function retrieveDataByField(
  collectionName: string,
  field: string,
  value: string
) {
  const q = query(
    collection(firestore, collectionName),
    where(field, "==", value)
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function addData(collectionName: string, data: any) {
  try {
    await addDoc(collection(firestore, collectionName), data);
    return {
      status: true,
      statusCode: 200,
      message: "Data added successfully",
    };
  } catch (err) {
    console.log(err);
  }
}

export async function updateData(collectionName: string, id: any, data: any) {
  try {
    await updateDoc(doc(firestore, collectionName, id), data);
    return {
      status: true,
      statusCode: 200,
      message: "Data updated successfully",
    };
  } catch (error) {
    console.log(error);
  }
}

export async function deleteById(collectionName: string, id: any) {
  try {
    await deleteDoc(doc(firestore, collectionName, id));
    return {
      status: true,
      statusCode: 200,
      message: "Data deleted successfully",
    };
  } catch (error) {
    console.log(error);
  }
}

export async function uploadImage(fileName: string, image: any) {
  return new Promise(async (resolve, reject) => {
    try {
      const storageRef = ref(storage, `images/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        // (snapshot) => {
        //   const progress =
        //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //   console.log("Upload is " + progress + "% done");
        //   switch (snapshot.state) {
        //     case "paused":
        //       console.log("Upload is paused");
        //       break;
        //     case "running":
        //       console.log("Upload is running");
        //       break;
        //   }
        // },
        (error) => {
          console.log(error);
          reject(error);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          resolve({
            status: true,
            statusCode: 200,
            message: "Uploaded a blob or file!",
            url,
          });
        }
      );
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

export async function deleteImage(fileName: string) {
  let storageRef = ref(storage, `images/${fileName}`);
  await deleteObject(storageRef);
  return {
    status: true,
    statusCode: 200,
    message: "Image deleted successfully",
  };
}

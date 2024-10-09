import React, { useEffect, useState } from 'react';
import { getFirestore, collection, addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { useAuth } from '../../AuthContext';
import { v4 as uuidv4 } from 'uuid';

const db = getFirestore();
const storage = getStorage();
const allowedUIDs = ["VhdL12OuVJT5LPWZ57xlWHf1R333", "client-uid-2"];

const Media = () => {
  const { user } = useAuth();
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'media'), (snapshot) => {
      const imagesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setImages(imagesData);
    });
    return () => unsubscribe();
  }, []);

  const isAdmin = user && allowedUIDs.includes(user.uid);

  const handleImageUpload = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.error("No file selected.");
      return;
    }

    const file = e.target.files[0];
    setUploading(true);
    const uniqueName = uuidv4() + '-' + file.name;
    const storageRef = ref(storage, `media/${uniqueName}`);

    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      await addDoc(collection(db, 'media'), { url: downloadURL, createdBy: user.uid });
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteImage = async (id, imageUrl) => {
    try {
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
      await deleteDoc(doc(db, 'media', id));
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div className="p-8 max-w-[1240px] mx-auto">
      <h1 className="text-3xl font-bold mb-4">Media Gallery</h1>
      {isAdmin && (
        <div className="mb-4">
          <input type="file" onChange={handleImageUpload} disabled={uploading} />
          <button onClick={handleImageUpload} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">Upload Image</button>
        </div>
      )}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <div key={image.id} className="relative group border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <img src={image.url} alt="Gallery" className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-105" />
            {isAdmin && (
              <button
                onClick={() => handleDeleteImage(image.id, image.url)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg">Image Caption Here</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;

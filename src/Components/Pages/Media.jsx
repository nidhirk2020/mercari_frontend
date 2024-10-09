import React, { useEffect, useState } from 'react';
import { getFirestore, collection, addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { useAuth } from '../../AuthContext';
import { v4 as uuidv4 } from 'uuid';
import Masonry from 'react-masonry-css';

const db = getFirestore();
const storage = getStorage();
const allowedUIDs = ["VhdL12OuVJT5LPWZ57xlWHf1R333", "client-uid-2"];

const Media = () => {
  const { user } = useAuth();
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'media'), (snapshot) => {
      const imagesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setImages(imagesData);
    });
    return () => unsubscribe();
  }, []);

  const isAdmin = user && allowedUIDs.includes(user.uid);

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) {
      console.error("No files selected.");
      return;
    }

    setUploading(true);
    try {
      const uploadPromises = files.map(async (file) => {
        const uniqueName = uuidv4() + '-' + file.name;
        const storageRef = ref(storage, `media/${uniqueName}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        return addDoc(collection(db, 'media'), { url: downloadURL, createdBy: user.uid });
      });
      await Promise.all(uploadPromises);
    } catch (error) {
      console.error('Error uploading images:', error);
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

  const openImageViewer = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  const showNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const showPrevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div className="p-4 sm:p-8 max-w-[1240px] mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Media Gallery</h1>
      {isAdmin && (
        <div className="mb-4">
          <input type="file" multiple onChange={handleImageUpload} disabled={uploading} />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">Upload Images</button>
        </div>
      )}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto"
        columnClassName="masonry-column"
      >
        {images.map((image, index) => (
          <div key={image.id} className="relative group mb-4 sm:mb-6 border border-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={() => openImageViewer(index)}>
            <img src={image.url} alt="Gallery" className="w-full object-cover transition-transform duration-300 transform group-hover:scale-105" />
            {isAdmin && (
              <button
                onClick={(e) => { e.stopPropagation(); handleDeleteImage(image.id, image.url); }}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </Masonry>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button onClick={closeImageViewer} className="absolute top-4 right-4 text-white text-xl">X</button>
          <div className="relative flex items-center justify-center max-w-[90vw] max-h-[80vh] p-4 sm:p-8">
            <button onClick={showPrevImage} className="absolute left-2 sm:left-6 text-white text-3xl sm:text-4xl">&lt;</button>
            <img src={selectedImage.url} alt="Full view" className="max-w-full max-h-full object-contain" />
            <button onClick={showNextImage} className="absolute right-2 sm:right-6 text-white text-3xl sm:text-4xl">&gt;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;

import React, { useEffect, useState } from 'react';
import { auth } from '../../config/firebase';
import { getFirestore, collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const db = getFirestore();
const storage = getStorage();

const CreateBlogs = () => {
  const [title, setTitle] = useState('');
  const [paragraphs, setParagraphs] = useState(['']);
  const [images, setImages] = useState([]);
  const [author, setAuthor] = useState('');
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const fetchAuthor = async () => {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setAuthor(userDoc.data().name); // Adjust field name based on Firestore structure
        }
      };
      fetchAuthor();
    }
  }, [user]);

  const handleImageUpload = async (files) => {
    const uploadedImageUrls = [];
    for (const file of files) {
      const imageRef = ref(storage, `blogs/${file.name}`);
      await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(imageRef);
      uploadedImageUrls.push(downloadURL);
    }
    return uploadedImageUrls;
  };

  const createBlog = async () => {
    if (title.trim() === '' || paragraphs.some(paragraph => paragraph.trim() === '')) return;

    const imageUrls = await handleImageUpload(images);
    await addDoc(collection(db, 'blogs'), {
      title,
      content: paragraphs,
      images: imageUrls,
      author,
      createdBy: user.uid,
      timestamp: new Date(),
    });

    setTitle('');
    setParagraphs(['']);
    setImages([]);
  };

  const addParagraph = () => setParagraphs([...paragraphs, '']);
  const removeParagraph = (index) => setParagraphs(paragraphs.filter((_, i) => i !== index));
  const updateParagraph = (index, value) => {
    const newParagraphs = [...paragraphs];
    newParagraphs[index] = value;
    setParagraphs(newParagraphs);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Blog Post</h1>
      <div className="mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Title"
          className="w-full border p-2 mb-2"
        />
        {paragraphs.map((paragraph, index) => (
          <div key={index} className="flex items-start mb-2">
            <textarea
              value={paragraph}
              onChange={(e) => updateParagraph(index, e.target.value)}
              placeholder={`Paragraph ${index + 1}`}
              className="w-full border p-2"
            />
            {paragraphs.length > 1 && (
              <button
                onClick={() => removeParagraph(index)}
                className="bg-red-500 text-white px-2 py-1 ml-2 rounded"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button onClick={addParagraph} className="bg-gray-300 px-2 py-1 mb-2 rounded">
          Add Paragraph
        </button>
        <input
          type="file"
          multiple
          onChange={(e) => setImages(Array.from(e.target.files))}
          className="mb-4"
        />
        <button onClick={createBlog} className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Blog
        </button>
      </div>
    </div>
  );
};

export default CreateBlogs;

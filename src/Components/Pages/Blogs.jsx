import React, { useEffect, useState } from 'react';
import { auth } from '../../config/firebase';
import { getFirestore, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const db = getFirestore();
const allowedUIDs = ["VhdL12OuVJT5LPWZ57xlWHf1R333", "client-uid-2"]; // Replace with authorized UIDs

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'blogs'), (snapshot) => {
      const blogsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setBlogs(blogsData);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && allowedUIDs.includes(user.uid)) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  const deleteBlog = async (id) => {
    await deleteDoc(doc(db, 'blogs', id));
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Blogs</h1>
        {isLoggedIn && (
          <button
            onClick={() => navigate('/create')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create Post
          </button>
        )}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 rounded shadow-lg">
            <img
              src={blog.images[0]} // Display the first image
              alt="Blog"
              className="h-40 w-full object-cover rounded mb-2"
            />
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-gray-700">
              {blog.content[0].substring(0, 100)}... {/* Show a preview of the first paragraph */}
            </p>
            {isLoggedIn && blog.createdBy === auth.currentUser?.uid && (
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => navigate(`/edit/${blog.id}`)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteBlog(blog.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

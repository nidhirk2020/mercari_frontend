import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore();

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogDoc = await getDoc(doc(db, 'blogs', id));
      if (blogDoc.exists()) {
        setBlog(blogDoc.data());
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-800">{blog.title}</h1>
      <p className="text-sm text-gray-500 text-center mb-8">Written by {blog.author}</p>
      
      {/* Render each content block with subheading, paragraph, bullet points, and images */}
      {blog.contentBlocks.map((block, index) => (
        <div key={index} className="space-y-4 mb-8">
          {block.subHeading && (
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{block.subHeading}</h2>
          )}
          {block.paragraph && (
            <p className="text-lg text-gray-700 leading-relaxed">{block.paragraph}</p>
          )}
          
          {block.bulletPoints && block.bulletPoints.length > 0 && (
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-5">
              {block.bulletPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
          
          {block.image && (
            <img
              src={block.image}
              alt={`Blog Image ${index + 1}`}
              className="w-full rounded-lg shadow-lg object-cover my-4"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogDetail;

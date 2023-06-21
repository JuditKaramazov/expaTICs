import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

export const WikiContext = createContext();

export function WikiContextProvider(props) {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "locations"));
        const articlesData = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setArticles(articlesData);
      } catch (error) {
        console.error("Error fetching articles:", error);
        // Handle the error appropriately
      }
    };

    fetchArticles();
  }, [editingIndex]); // Add 'editingIndex' as a dependency

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const docRef = await addDoc(collection(db, "locations"), {
        title: title,
        content: content,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ["historic", "restaurant", "cafe", "library", "party"],
      });
  
      console.log("Document written with ID: ", docRef.id);
  
      setTitle("");
      setContent("");
  
      // Update articles state immediately after creating a new article
      setArticles((prevArticles) => [
        ...prevArticles,
        {
          id: docRef.id,
          title: title,
          content: content,
        },
      ]);
    } catch (error) {
      console.error("Error creating document:", error);
      // Handle the error appropriately
    }
  };

  const handleEdit = (index) => {
    if (index === -1) {
      setEditingIndex(-1);
      setTitle("");
      setContent("");
    } else {
      setEditingIndex(index);
      setTitle(articles[index].title);
      setContent(articles[index].content);
    }
  };

  const handleUpdate = async () => {
    try {
      const articleToUpdate = articles[editingIndex];
      const articleRef = doc(db, "locations", articleToUpdate.id);
      await updateDoc(articleRef, {
        title: title,
        content: content,
        updatedAt: new Date(),
      });
      setEditingIndex(-1);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error updating document:", error);
      // Handle the error appropriately
    }
  };

  const handleDelete = async (index) => {
    try {
      const articleToDelete = articles[index];
      const articleRef = doc(db, "locations", articleToDelete.id);
      await deleteDoc(articleRef);
  
      // Update articles state immediately after deleting an article
      setArticles((prevArticles) =>
        prevArticles.filter((_, i) => i !== index)
      );
    } catch (error) {
      console.error("Error deleting document:", error);
      // Handle the error appropriately
    }
  };

  return (
    <WikiContext.Provider
      value={{
        articles: articles,
        title,
        setTitle,
        content,
        setContent,
        handleSubmit,
        handleEdit,
        handleUpdate,
        handleDelete,
        editingIndex,
      }}
    >
      {props.children}
    </ WikiContext.Provider>
  );
}

export default WikiContextProvider;

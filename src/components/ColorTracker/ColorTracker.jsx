import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ColorTracker = () => {
  const { currentUser } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [colorMap, setColorMap] = useState({});

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    setColorMap((prevColorMap) => ({
      ...prevColorMap,
      [selectedDate.toISOString().split('T')[0]]: selectedColor,
    }));
  };

  const tileClassName = ({ date }) => {
    const formattedDate = date.toISOString().split('T')[0];
    const color = colorMap[formattedDate];
    return color ? `selected-color-${color}` : null;
  };

  const tileContent = ({ date }) => {
    const formattedDate = date.toISOString().split('T')[0];
    const color = colorMap[formattedDate];
    if (color) {
      const style = {
        backgroundColor: color,
        color: 'transparent',
        borderRadius: '50%',
        padding: '0.25rem',
      };
      return (
        <div className="selected-color-content" style={style}>
          {date.getDate()}
        </div>
      );
    }
    return null;
  };

  useEffect(() => {
    const fetchColorMap = async () => {
      if (currentUser) {
        try {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            setColorMap(userData.colorMap || {});
          }
        } catch (error) {
          console.error("Error fetching user color map:", error);
        }
      }
    };

    fetchColorMap();
  }, [currentUser]);

  const updateColorMap = async () => {
    if (currentUser) {
      try {
        const userDocRef = doc(db, "users", currentUser.uid);
        if (Object.keys(colorMap).length > 0) {
          await setDoc(userDocRef, { colorMap: colorMap }, { merge: true });
        }
      } catch (error) {
        console.error("Error updating user color map:", error);
      }
    }
  };

  useEffect(() => {
    updateColorMap();
  }, [colorMap]);

  return {
    selectedDate,
    handleDateChange,
    handleColorChange,
    tileClassName,
    tileContent,
    colorMap,
  };
};

export default ColorTracker;

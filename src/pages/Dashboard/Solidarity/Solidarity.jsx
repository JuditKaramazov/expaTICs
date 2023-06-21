import React, { useEffect, useContext, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { AuthContext } from "../../../context/AuthContext";
import { CoffeeContext } from "../../../context/CoffeeContext";
import { coffeeTypes, messageTemplates } from "../../../utils/coffeeData";

const Solidarity = () => {
  const {
    selectedCoffeeType,
    setSelectedCoffeeType,
    selectedMessageTemplate,
    setSelectedMessageTemplate,
    hostCountry,
    setHostCountry,
    sendCoffeeGift,
    getNotifications,
    notifications,
  } = useContext(CoffeeContext);

  const { currentUser } = useContext(AuthContext);

  const [selectedCoffeeGift, setSelectedCoffeeGift] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        await getNotifications(currentUser.uid); // Call the getNotifications function
      } catch (error) {
        console.error("Error fetching notifications:", error);
        // Handle the error appropriately
      }
    };

    fetchNotifications();
  }, [currentUser, getNotifications]);

  const handleNotificationClick = async (notificationId) => {
    try {
      const coffeeGiftDocRef = doc(db, "coffeeGifts", notificationId);
      const coffeeGiftDoc = await getDoc(coffeeGiftDocRef);

      if (coffeeGiftDoc.exists()) {
        const coffeeGiftData = coffeeGiftDoc.data();
        setSelectedCoffeeGift(coffeeGiftData);
      } else {
        console.log("Coffee Gift Document does not exist.");
      }
    } catch (error) {
      console.error("Error handling notification click:", error);
      // Handle the error appropriately
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendCoffeeGift();

    setSelectedCoffeeType("");
    setSelectedMessageTemplate("");
    setHostCountry("");
  };

  return (
    <div>
      <h1>Solidarity</h1>
      <div>
      {notifications.length > 0 && notifications[0] && (
          <div>
            <span style={{ marginRight: "5px" }}>📬</span>
            <span style={{ color: "red" }}>New Notification!</span>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Select Coffee Type:
          <select
            value={selectedCoffeeType}
            onChange={(e) => setSelectedCoffeeType(e.target.value)}
          >
            <option value="">Select Coffee Type</option>
            {coffeeTypes.map((coffeeType) => (
              <option key={coffeeType} value={coffeeType}>
                {coffeeType}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Select Message Template:
          <select
            value={selectedMessageTemplate}
            onChange={(e) => setSelectedMessageTemplate(e.target.value)}
          >
            <option value="">Select Message Template</option>
            {messageTemplates.map((template) => (
              <option key={template} value={template}>
                {template}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Host Country (Optional):
          <input
            type="text"
            value={hostCountry}
            onChange={(e) => setHostCountry(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Send Coffee Gift</button>
      </form>
      <div>
      {notifications && notifications.map((notification) => (
          <div key={notification.id}>
    <p>{notification.coffeeGiftId}</p>
    <button onClick={() => handleNotificationClick(notification.id)}>
      View
    </button>
  </div>
))}

      </div>
      {selectedCoffeeGift && (
        <div>
          <h3>Coffee Received:</h3>
          <p>{selectedCoffeeGift.coffeeType}</p>
          <h3>Message:</h3>
          <p>{selectedCoffeeGift.messageTemplate}</p>
          {selectedCoffeeGift.hostCountry && (
            <>
              <h3>Country:</h3>
              <p>{selectedCoffeeGift.hostCountry}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Solidarity;

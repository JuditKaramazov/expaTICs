import React, { useContext } from "react";
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
  } = useContext(CoffeeContext);

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
    </div>
  );
};

export default Solidarity;

import { coffeeTypes, messageTemplates } from "@/src/utils/coffeeData";

const CoffeeGift = () => {
    return (
        <div id="modal">
          <div className="coffee-gift">
            <h1 id="message">Hey, dear:</h1>
            <h2> Here's a cup of</h2>
            <img src="/coffeeTemplate.png" style={{width: "150px"}} alt="Cup of coffee visual." />
            <h3>{coffeeTypes[Math.floor(Math.random() * coffeeTypes.length)]}</h3>
            <q className="description">{messageTemplates[Math.floor(Math.random() * messageTemplates.length)]}</q>
          </div>
        </div>
    );
};

export default CoffeeGift;
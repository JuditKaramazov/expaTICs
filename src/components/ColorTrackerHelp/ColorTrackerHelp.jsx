import { GiFlowerPot } from 'react-icons/gi';

const ColorTrackerHelp = () => {
    return (
      <div id="modal">
        <div className="color-tracker-help">
          <h1 style={{ fontSize: "2.2rem" }}>Color tracker usage: </h1>
          <h2>You decide what to do with it.</h2>
          <p>As stated before, we're trying our best to keep your data
            safe and sound, which means that no data will be collected;
            colors are unique to each individual, and only 
            <br/><b>you</b><br/> 
            can give them a valid meaning in your life.</p>
            <GiFlowerPot size={60} />
            <p>However, I'd kindly suggest you to analyze the 
            <br/> - <b>patterns</b>,  
            <br/> - <b>anomalies</b>, 
            <br/> - and significant <b>changes</b>
            <br/> in order to get a deeper understanding of your own persona. 
            Stay safe
            <br/>&hearts;
          </p>
        </div>
      </div>
    );
  };
  
  export default ColorTrackerHelp;
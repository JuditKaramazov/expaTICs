const ChatHelp = () => {
    return (
      <div id="modal">
        <div className="chat-help">
          <h1 style={{ fontSize: "2.2rem" }}>AI usage guidelines: </h1>
          <h2>Ask whatever could be relevant for you to know.</h2>
          <p>Even though this little tool is not as powerful as others, 
            it still can provide you with information you might ignore.
            <br/>Here's a real example:</p>
            <br/><q><em>What's Engelhartszell's (Upper Austria) nearest hospital?</em></q>
            <br/><q><em>The nearest hospital to Engelhartszell in Upper Austria is 
            <br/><b>Krankenhaus Schärding</b>, located approximately 20 minutes away by car.</em></q>
            <br/>
            <br/><p>The answer is <b>correct</b>.
            <br/>Please, remember to thoroughly inform yourself, compare sites, and don't be
            scared of asking; none of us knows everything.
          </p>
        </div>
      </div>
    );
  };
  
export default ChatHelp;

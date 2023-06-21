import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import { LoadingOutlined } from "@ant-design/icons";
import sounds from "../../utils/sounds";

const AmbientSounds = () => {
  const [cachedSound] = useState({});
  const [active, setActive] = useState([]);
  const [loading, setLoading] = useState(null);

  const play = (id) => {
    const soundName = sounds.filter((sound) => sound.id === id)[0].sound;

    if (typeof cachedSound[id] === "undefined") {
      setLoading(id);
      cachedSound[id] = new Howl({
        src: [`/sounds/${soundName}.mp3`],
        loop: true,
        onload: function () {
          setActive((prev) => [...prev, id]);
          setLoading(null);
          cachedSound[id].play();
        },
      });
    } else {
      if (cachedSound[id].playing()) {
        cachedSound[id].fade(1, 0, 1000);
        setTimeout(function () {
          cachedSound[id].pause();
          setActive((prev) => prev.filter((i) => i !== id));
        }, 1000);
      } else {
        cachedSound[id].play();
        cachedSound[id].fade(0, 0.8, 1000);
        setActive((prev) => [...prev, id]);
      }
    }
  };

  useEffect(() => {
    return () => {
      for (let sound in cachedSound) {
        cachedSound[sound].stop();
      }
    };
  }, []);

  return (
    <div id="modal">
      <div className="ambient-sounds">
        <h1 id="message">Ambient Sounds</h1>
        <p className="description">Give them a try, even if just for some minutes.
        <br/>
        After it, just keep on keeping on.
        <br/>
        &hearts;
        </p>
        <div className="sound-list">
  {sounds.map((sound) => (
    <div
      className={`sound-item ${active.includes(sound.id) && "active"} ${loading === sound.id && "loading"}`}
      key={sound.id}
      onClick={() => play(sound.id)}
    >
      {sound.sound.split("-").join(" ")}
      {loading === sound.id && <LoadingOutlined className="loading-icon" />}
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default AmbientSounds;

import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import { useEffect, useState } from "react";

const config = {
  id: 0, // important
  colorSlice: "#E91E63"
};

const Loadingbar = ({ visible, setVisible }) => {
  const [opacity, setopacity] = useState(false);
  const [update, setUpdate] = useState(config);

  useEffect(() => {
    setUpdate({
      ...config,
      id: 0,
      percent: 100,
      colorSlice: "#fff",
      fontColor: "#fff",
      fontSize: "1.2rem",
      fontWeight: 700
    });

    setTimeout(() => {
      setopacity(true);
      
      setTimeout(() => {
        setVisible(false);
      }, 600);
    }, 3000);
  }, [setVisible]);

  const newObject = { ...config, ...update };
  console.log(visible);
  if (!visible) return null;

  return (
    <div className={`loading ${opacity ? 'opacity' : ''}`}>
      <div className="loading-circle">
        <CircularProgressBar {...newObject} />
      </div>
    </div>
  );
};

export default Loadingbar;

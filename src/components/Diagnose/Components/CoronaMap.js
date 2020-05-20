import React from "react";

// Material UI
import Button from "@material-ui/core/Button";

// Styles
import "../diagnose.css"

// Components
import CoronaMapTitle from "./CoronaMapTitle";
const CoronaMap = () => {
  return (
    <div className="cardDiv">
      <div className="contentDiv">
        <Button color="primary">
          <a style={{color: "#232323"}} rel="noopener noreferrer" href="https://coronamap.site" target="_blank"><CoronaMapTitle title="코로나맵으로 확진자 동선확인하기!" /></a>
        </Button>
      </div>
    </div>
  );
}

export default CoronaMap;
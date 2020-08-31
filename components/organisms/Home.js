import React from "react";
import { useMachine } from "@xstate/react";
import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import HomeStyles from "../../styles/homeStyles.module.css";
//  MACHINE IMPORTS
import { ScreenGrabMachine } from "../../machines/screenGrabMachine";
// COMPONENT IMPORTS
// CSS IMPORTS

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [state, send] = useMachine(ScreenGrabMachine);

  const iosURLArray = [
    "/images/pqNative/pqNative0.png",
    "/images/pqNative/pqNative1.png",
    "/images/pqNative/pqNative2.png",
    "/images/pqNative/pqNative3.png",
    "/images/pqNative/pqNative4.png",
  ];
  // console.log(state.value);
  // console.log(Object.keys(state.value)[0]);
  React.useEffect(() => {
    setIsLoading(false);
  });
  if (isLoading) return <div />;
  return (
    <div className={HomeStyles.projectContainer}>
      <div className={HomeStyles.projectInfoContainer}>
        <div className={HomeStyles.projectDetailsList}>
          <h4>Title: Pushquery</h4>
          <h4>Platform: iOS, Android, and Web</h4>
          <h4>What Did We Build?</h4>
          <li>An application that works across iOS, Android, and Web</li>
          <li>
            Responsive design that works across Mobile, Tablet, and Desktop
          </li>
          <li>Authentication &amp; user account creatation / management</li>
          <li>
            Healthy social context with community guidelines &amp; best
            practices
          </li>
          <div style={{ alignSelf: "center" }}>
            <a href="#slideshow">
              {Object.keys(state.value)[0] == "pause" ? (
                <button onClick={() => send("PLAY")}>
                  <PlayCircleOutlined
                    style={{
                      fontSize: "4rem",
                      marginBottom: "0.5rem",
                    }}
                  />
                  <p className="buttonText">Play Slideshow</p>
                </button>
              ) : (
                <button onClick={() => send("PAUSE")}>
                  <PauseCircleOutlined
                    style={{
                      fontSize: "4rem",
                      marginBottom: "0.5rem",
                    }}
                    className="button"
                  />
                  <p>Pause Slideshow</p>
                </button>
              )}
            </a>
          </div>
          <div>
            <h4>Technology Used:</h4>
            <li>React &amp; React Native</li>
            <li>Firebase Authentication</li>
            <li>CSS / Styled Components</li>
            <li>XState / State Machines</li>
            <li>React Navigation</li>
            <li>Cloud Firestore</li>
            <li>Next.js</li>
            <li>Expo</li>
            <h4>Links:</h4>
          </div>
          <a className="links" href="https://pushquery.com">
            Website
          </a>
          <a
            className="links"
            href="https://apps.apple.com/us/app/pushquery-app/id1515332528"
          >
            Apple App Store
          </a>
          <a
            className="links"
            href="https://play.google.com/store/apps/details?id=pushquery.app"
          >
            Google Play Store
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          src={iosURLArray[state.value.view || state.value.pause]}
          className={HomeStyles.screenGrab}
          id="slideshow"
        />
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import "./App.css";

function App() {
    const [songTitle, setSongTitle] = React.useState("Music Title");
    const [songArtist, setSongArtist] = React.useState("Artist Name");
    const [imgUrl, setImgUrl] = React.useState("");
    useEffect(() => {
        const random_id = Math.floor(Math.random() * 100);
        const url = `https://picsum.photos/id/${random_id}/300`;
        setImgUrl(url);
    }, []);

    const callback = () => {
        const response = fetch("http://localhost:5000/", {
            method: "GET",
        });
        console.log(response);
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="music-player">
                    <div
                        className="song-info music-card"
                        style={{
                            backgroundImage: `url(${imgUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <div className="song-info-status">
                        <div className="song-info-status-title">
                            <h3>{songTitle}</h3>
                            <p>{songArtist}</p>
                        </div>
                        <div className="song-info-status-bar">
                            <span style={{ width: "50%" }}></span>
                        </div>
                    </div>
                    <div className="controls">
                        <div
                            className="controls-btn controls-btn-prev"
                            onClick={callback}
                        ></div>
                        <div
                            className="controls-btn controls-btn-play-pause"
                            onClick={() => {
                                window.alert("playing");
                            }}
                        ></div>
                        <div
                            className="controls-btn controls-btn-next"
                            onClick={() => {
                                window.alert("playing");
                            }}
                        ></div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;

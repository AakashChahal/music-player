import React, { useEffect } from "react";
import "./App.css";

function App() {
    const [songTitle, setSongTitle] = React.useState("Music Title");
    const [songArtist, setSongArtist] = React.useState("Artist Name");
    const [imgUrl, setImgUrl] = React.useState("");
    const [search, setSearch] = React.useState("");
    useEffect(() => {
        const random_id = Math.floor(Math.random() * 100);
        const url = `https://picsum.photos/id/${random_id}/300`;
        setImgUrl(url);
    }, []);

    const callback = async () => {
        setSearch(search.trim());
        const response = await fetch(`/${encodeURIComponent(search)}`, {
            method: "GET",
        });
        const data = await response.json();
        console.log(data);
        setSongArtist(data.result);
        setSearch("");
        // setSongArtist(data);
    };

    return (
        <div className="App">
            <div className="music-player">
                <div className="search">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="search-btn" onClick={callback}></div>
                </div>
                <div className="music-card">
                    <div
                        className="music-card-img"
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
                            onClick={() => {
                                console.log("previous");
                            }}
                        ></div>
                        <div
                            className="controls-btn controls-btn-play-pause"
                            onClick={() => {
                                console.log("play/pause");
                            }}
                        ></div>
                        <div
                            className="controls-btn controls-btn-next"
                            onClick={() => {
                                console.log("next");
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

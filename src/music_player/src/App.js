import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="music-player">
                    <div className="song-info">
                        <p>Song Title</p>
                        <p>Artist Name</p>
                    </div>
                    <div className="controls">
                        <button
                            onClick={() => {
                                window.alert("playing");
                            }}
                        >
                            Play
                        </button>
                        <button
                            onClick={() => {
                                window.alert("playing");
                            }}
                        >
                            Pause
                        </button>
                        <button
                            onClick={() => {
                                window.alert("playing");
                            }}
                        >
                            Stop
                        </button>
                        <button
                            onClick={() => {
                                window.alert("playing");
                            }}
                        >
                            Next
                        </button>
                        <button
                            onClick={() => {
                                window.alert("playing");
                            }}
                        >
                            Previous
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;

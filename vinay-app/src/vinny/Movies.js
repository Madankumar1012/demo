import React from "react";

function Movies() {
  return (
    <div>
      <table className="sita">
        <thead>
          <tr>
            <th>sita ramam❤️</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <mark>CAST :</mark>
            </td>
            <td>Dulquer Salmaan</td>
            <td>Mrunal Thakur</td>
            <td>rashmika manandanna</td>
          </tr>
        </tbody>
      </table>
      <audio className="music" src="./audio/inthandham.mp3" controls></audio>
      <br></br>
      <audio
        className="music"
        src="./audio/Oh sita hey rama.mp3"
        controls></audio>{" "}
      <br></br>
      <audio className="rama" src="./audio/rama.mp3" controls></audio>
      <video
        title="movie trailer"
        className="video"
        src="./video/sita ram.mp4"
        controls
        autoPlay
        muted></video>
      <h3>
        {" "}
        <mark>sita ramam❤️</mark> mp3 songs♪♬🎼 :
      </h3>
      <div className="leo">
        <h4>LEO movie / song♪♬</h4>

        <iframe
          className="youtube"
          src="https://www.youtube.com/embed/szvt1vD0Uug"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default Movies;

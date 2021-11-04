import ReactPlayer from "react-player";

export default function MediaPlayer({ url }) {
  return (
    <div className="media-player-container">
      <ReactPlayer
        url={url}
        controls={true}
        width="100%"
        height="40px"
        config={{
          file: {
            forceAudio: true,
          },
        }}
      />
    </div>
  );
}

import ReactPlayer from "react-player";

export default function MediaPlayer({ url }) {
  const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

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
            forceHLS: !(isSafari || iOS),
          },
        }}
      />
    </div>
  );
}

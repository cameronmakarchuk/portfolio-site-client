import React from "react";
import "./YouTubeEmbed.scss";

interface YouTubeEmbedProps {
  embedId: string;
}

export default function YouTubeEmbed({
  embedId,
}: YouTubeEmbedProps): JSX.Element {
  return (
    <div className="video-responsive">
      <iframe
        className="video-responsive__video"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

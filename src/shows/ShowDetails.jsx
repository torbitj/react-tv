import { useState } from "react";
import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails(show) {
  const [selectedEpisode, setSelectedEpisode] = useState({})
  if (!show.title) {
    return <p>Please select a show!</p>
  }
  return (
    <div className="show-details">
      <EpisodeList  />
      <EpisodeDetails />
    </div>
  );
}

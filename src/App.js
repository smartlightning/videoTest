import "./styles.css";
import { VideoCard } from "material-ui-player";

export default function App() {
  return (
    <div className="App">
      <h1>Example video</h1>
      <VideoCard
        src={
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/mediaeventapp/rcvr.html"
        }
      />
    </div>
  );
}

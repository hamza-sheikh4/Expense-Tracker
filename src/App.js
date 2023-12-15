import Expense from "./Expense";
import Income from "./Income";
import Main from "./Main";
import "./index.css";

function App() {
  return (
    <div>
      <div className="fixed -z-50 h-screen w-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full"
          src="./video/bgVideo.mp4"
        ></video>
      </div>
      <div className="flex justify-between items-center gap-[50px] px-10 border-2 min-h-[100vh]">
        <Income />
        <Main />
        <Expense />
      </div>
    </div>
  );
}

export default App;

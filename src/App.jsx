import { Camera } from "lucide-react";

function App() {
  return (
    <>
      <div className="flex justify-around items-center">
        <h1 className="bg-amber-200 px-1.5 py-1.5">Ahmed Gamil</h1>
        <Camera color="red" size={48} />
      </div>
      <div className="flex w-52 flex-col gap-4 m-auto mt-3">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </>
  );
}

export default App;

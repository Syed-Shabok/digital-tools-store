import { Suspense } from "react";
import "./App.css";
import Tools from "./components/tools/Tools";

const fetchToolsData = async () => {
  const res = await fetch("../public/toolsData.json");

  return res.json();
};

function App() {
  const toolsPromise = fetchToolsData();

  return (
    <>
      <Suspense
        fallback={
          <div className="w-full flex justify-center min-h-[50vh]">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <Tools toolsPromise={toolsPromise} />
      </Suspense>
    </>
  );
}

export default App;

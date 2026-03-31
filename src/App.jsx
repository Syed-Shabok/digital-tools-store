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
      <div className="container mx-auto  px-5 lg:px-10">
        <Suspense
          fallback={
            <div className="w-full flex justify-center min-h-[50vh]">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <Tools toolsPromise={toolsPromise} />
        </Suspense>
      </div>
    </>
  );
}

export default App;

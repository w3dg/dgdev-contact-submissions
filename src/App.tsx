import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import SubmissionEntry from "./components/SubmissionEntry";

import { type SubmissionData } from "./interfaces/Submission";

function App() {
  const [submissionData, setSubmissionData] = useState<SubmissionData>(undefined);

  return (
    <>
      <div className="w-full bg-slate-950 text-slate-300">
        <h1 className="pt-10 text-3xl font-bold text-center">DGDev Contact Submissions</h1>
        {!submissionData ? (
          <LoginForm setDataFn={setSubmissionData} />
        ) : (
          <div className="grid w-10/12 max-w-2xl pb-32 mx-auto mt-12 gap-y-8">
            <p className="text-xl">{submissionData.length} Submissions</p>
            {submissionData.map((entry, index) => (
              <SubmissionEntry {...entry} key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;

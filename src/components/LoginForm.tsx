import { ChangeEvent, FormEvent, useState } from "react";
import { LuArrowRight } from "react-icons/lu";

import { type SubmissionData } from "../interfaces/Submission";

interface LoginFormProps {
  setDataFn: React.Dispatch<React.SetStateAction<SubmissionData>>;
}

const LoginForm = ({ setDataFn }: LoginFormProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const API_URL = window.location.hostname === "localhost" ? "http://localhost:5000" : "https://personal-website-contact-server.onrender.com";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/v1/submissions`, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": password,
        },
      });

      if (!response.ok) throw new Error("Wrong Credentials. Try Again");

      const json = await response.json();
      setDataFn(json);
      setError("");
    } catch (e) {
      const error = e as Error;
      setError(error.message);
    }

    setPassword("");
  };

  return (
    <div className="flex flex-col w-9/12 max-w-lg gap-6 py-8 mx-auto">
      <h1 className="text-xl font-medium text-center">Login to view Submissions</h1>
      {error ? <div className="p-2 text-center rounded-md bg-red-800/70">{error}</div> : <></>}
      <form className="grid grid-cols-[85%_15%] w-full my-4 rounded-lg overflow-hidden" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="apiKey" className="sr-only">
          Password
        </label>
        <input
          id="apiKey"
          type="password"
          value={password}
          className="flex-1 p-3 bg-slate-800 focus:outline focus:outline-slate-100 placeholder:text-neutral-500 placeholder:font-mono"
          placeholder="supersecret"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center p-3 border-l hover:bg-slate-600 focus:bg-slate-600 focus:outline focus:outline-slate-600 bg-slate-800 border-l-slate-700"
        >
          <LuArrowRight />
        </button>
      </form>
    </div>
  );
};
export default LoginForm;

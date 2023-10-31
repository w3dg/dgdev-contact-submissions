import { IconContext } from "react-icons";
import { RxAvatar } from "react-icons/rx";
import { type Submission } from "../interfaces/Submission";

const SubmissionEntry = ({ name, email, message }: Submission) => {
  return (
    <IconContext.Provider value={{ className: "text-slate-400", size: "2.5rem" }}>
      <div className="grid p-6 border shadow-lg bg-slate-900 rounded-2xl border-slate-700 gap-y-1 shadow-slate-900">
        <div className="flex items-center gap-6 mb-3">
          <RxAvatar></RxAvatar>
          <div>
            <h2 className="text-lg font-bold text-slate-400">{name}</h2>
            <p className="italic text-slate-200">{email}</p>
          </div>
        </div>
        <p className="text-lg">{message}</p>
      </div>
    </IconContext.Provider>
  );
};
export default SubmissionEntry;

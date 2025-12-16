import { useEffect, useState } from "react";
import { getAllJobs } from "../Services/JobService";
import JobCards from "./JobCards";
import Sort from "./Sort";

const Jobs = () => {
  const [jobList, setJobList] = useState<any[]>([]);

 useEffect(() => {
  getAllJobs()
  .then((data) => {
    console.log("API DATA 👉", data); // ✅
    setJobList(Array.isArray(data) ? data : []);
  });
}, []);

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Recommended Jobs</div>
        <Sort />
      </div>

      <div className="m-12 flex flex-wrap gap-9">
        {jobList.map((job) => (
          <JobCards key={job.id ?? Math.random()} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs
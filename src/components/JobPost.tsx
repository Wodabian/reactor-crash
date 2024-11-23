import { Link } from "react-router-dom";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

interface props {
  jobType: any;
  jobTitle: any;
  jobDescription: any;
  jobSalary: any;
  jobLocation: any;
  JobID: any;
}

const JobPost = ({
  jobType,
  jobTitle,
  jobDescription,
  jobSalary,
  jobLocation,
  JobID,
}: props) => {
  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);

  let description = jobDescription;

  {
    !showFullDescription
      ? (description = description.substring(0, 90) + "...")
      : (description = description);
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{jobType}</div>
          <h3 className="text-xl font-bold">{jobTitle}</h3>
        </div>

        <div className="mb-5">{description}</div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hober:text-indigo-700"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className="text-indigo-500 mb-2">{jobSalary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <i className="fa-solid fa-location-dot text-lg"></i>
            <FaMapMarker className="inline text-lg mr-1 mb1" />
            {jobLocation}
          </div>
          <Link
            to={`/jobs/${JobID}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobPost;

import React, { useReducer, useRef } from "react";
import { addJob, deleteJob, setJob } from "./actions";
import reducer, { initState } from "./reducer";

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, initState);

  const { job, jobs } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div
      style={{
        padding: "0 20px",
        textAlign: "center",
      }}
    >
      <h1>To do App With Reducer</h1>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}{" "}
            <span
              onClick={() => {
                dispatch(deleteJob(index));
              }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

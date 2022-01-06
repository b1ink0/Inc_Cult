import React from "react";
import "./Input.scss";

export default function Input({ state, setState, name, type }: any) {
  return (
    <div
      className={`input_wrapper flex justify-center items-start flex-col relative w-4/5 ${
        type === "textarea" ? "h-36" : "h-14"
      } mt-4`}
    >
      {type === "text" || type === "email" ? (
        <input
          className={`absolute w-full h-full bottom-0 pl-4 pr-4 text-left ${
            state !== "" && "input-focus"
          }`}
          type={type}
          title={name}
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      ) : (
        <textarea
          className={`absolute w-full h-32 bottom-0 pl-4 pr-4 text-left overflow-hidden ${
            state !== "" && "textarea-focus"
          }`}
          title={name}
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      )}
      <label
        className={`absolute ml-4 text-lg font-medium pointer-events-none ${
          type === "textarea" && "top-0 mt-3"
        } ${state !== "" && "input-focus-label"}`}
      >
        {name}
      </label>
    </div>
  );
}

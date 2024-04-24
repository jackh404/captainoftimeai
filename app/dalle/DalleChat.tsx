"use client";
import { useState } from "react";
import { callDallE } from "./callDallE";

const DalleChat = () => {
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState<string[]>([]);
  async function handleSubmit(e: any) {
    e.preventDefault();
    const image = await callDallE(prompt);
    if (image) setImages([...images, image]);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="text"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
          className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <button
          type="submit"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Generate
        </button>
      </form>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full"
              src={image}
              alt={`Generated for prompt: ${prompt}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DalleChat;

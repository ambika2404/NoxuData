import React from "react";

const ChatSection: React.FC = () => {
  return (
    <div
      className="py-4 border border-transparent"
      style={{
        width: "800px",
        height: "144px",
        padding: "32px",
        gap: "32px",
      }}
    >
      <div
        className="container-2 border border-transparent w-800px h-452px gap-16"
        style={{
          marginLeft: "32px",
        }}
      >
        <div className="flex gap-4">
          {[
            "Suggestion Question 1",
            "Suggestion Question 2",
            "Suggestion Question 3",
          ].map((question, index) => (
            <button
              key={index}
              className="border border-gray-400 rounded-md text-black text-sm px-2 py-1"
            >
              {question}
            </button>
          ))}
        </div>

        <div className="flex items-center mt-4">
          <img
            src="https://d29fhpw069ctt2.cloudfront.net/icon/image/38266/preview.svg"
            alt="Chat Logo"
            className="border border-gray-300 h-10 w-10 "
          />

          <input
            type="text"
            placeholder="Type your message..."
            className="border border-gray-300 px-4 py-2 w-full"
          />
          <button className=" text-black px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="border border-gray-300 h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
          <button className="px-10 py-1 text-xs text-red-500 border border-red-500 rounded-md">
            End Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;

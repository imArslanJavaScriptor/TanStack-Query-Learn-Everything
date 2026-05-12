import React from "react";

const Loader = ({loadingMessage}) => {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-14 h-14 border-4 border-zinc-700 border-t-blue-500 rounded-full animate-spin mx-auto"></div>

          <p className="text-zinc-300 text-lg font-medium">
            {loadingMessage}...
          </p>
        </div>
      </div>
  );
};

export default Loader;

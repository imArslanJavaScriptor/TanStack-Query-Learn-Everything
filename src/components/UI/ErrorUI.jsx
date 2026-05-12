import React from 'react'

const ErrorUI = ({error}) => {
  return (
     <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">
        <div className="bg-zinc-900 border border-red-500/30 rounded-2xl p-8 max-w-lg w-full text-center">
          <div className="text-5xl mb-4">⚠️</div>

          <h2 className="text-2xl font-bold text-red-400 mb-3">
            Request Failed
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            {error?.message || "Something went wrong!"}
          </p>
        </div>
      </div>
  )
}

export default ErrorUI
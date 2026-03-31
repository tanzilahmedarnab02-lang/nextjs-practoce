"use client"

import { useState } from "react"

export default function CounterPage() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-8">

      <h1 className="text-3xl font-bold text-cyan-400">
        Counter App
      </h1>

      <div className="text-8xl font-black">
        {count}
      </div>

      <div className="flex gap-4">

        <button
          onClick={() => setCount(count - 1)}
          className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white text-2xl font-bold rounded-xl"
        >
          -
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white text-xl font-bold rounded-xl"
        >
          Reset
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white text-2xl font-bold rounded-xl"
        >
          +
        </button>

      </div>

    </main>
  )
}
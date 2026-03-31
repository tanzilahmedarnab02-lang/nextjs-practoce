import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-8 p-8">

      <h1 className="text-5xl font-bold text-cyan-400">
        Ornab Dev Lab
      </h1>

      <p className="text-gray-400 text-lg">
        Next.js Day 1 Complete
      </p>

      <div className="flex flex-col gap-4 w-full max-w-sm">

        <Link
          href="/counter"
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-center py-4 rounded-xl transition-colors"
        >
          Counter App →
        </Link>

        <Link
          href="/users"
          className="bg-gray-800 hover:bg-gray-700 text-cyan-400 font-bold text-center py-4 rounded-xl transition-colors"
        >
          Users List →
        </Link>

      </div>

    </main>
  )
}

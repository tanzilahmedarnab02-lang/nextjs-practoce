"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"

export default function UserDetailPage() {
  const { id } = useParams()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        const found = data.users.find((u: any) => u.id === Number(id))
        setUser(found)
        setLoading(false)
      })
  }, [id])

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-6 p-8">

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : user ? (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 w-full max-w-sm flex flex-col gap-4">

          <p className="text-gray-500 text-sm">User #{user.id}</p>

          <h1 className="text-3xl font-bold text-white">
            {user.name}
          </h1>

          <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm w-fit">
            {user.role}
          </span>

        </div>
      ) : (
        <p className="text-red-400">User পাওয়া যায়নি</p>
      )}

      <Link
        href="/users"
        className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
      >
        ← Back to Users
      </Link>

    </main>
  )
}
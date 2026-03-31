"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function UsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    loadUsers()
  }, [])

  function loadUsers() {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users)
        setLoading(false)
      })
  }

  async function handleAddUser() {
    if (!name || !role) {
      setMessage("Name আর Role দুটোই লিখো!")
      return
    }

    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, role }),
    })

    const data = await res.json()

    if (data.success) {
      setMessage(`${data.user.name} add হয়েছে!`)
      setName("")
      setRole("")
      loadUsers()
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-6 p-8">

      <h1 className="text-3xl font-bold text-cyan-400">
        Users List
      </h1>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-full max-w-md flex flex-col gap-3">

        <p className="text-gray-400 text-sm font-semibold">
          নতুন User যোগ করো
        </p>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <button
          onClick={handleAddUser}
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 rounded-lg transition-colors"
        >
          Add User
        </button>

        {message && (
          <p className="text-green-400 text-sm text-center">{message}</p>
        )}

      </div>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <div className="flex flex-col gap-3 w-full max-w-md">
          {users.map((user: any) => (
            <Link
              key={user.id}
              href={`/users/${user.id}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex justify-between hover:border-cyan-500 transition-colors"
            >
              <p className="font-semibold">{user.name}</p>
              <p className="text-cyan-400 text-sm">{user.role}</p>
            </Link>
          ))}
        </div>
      )}

    </main>
  )
}
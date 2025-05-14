"use client"
import { Open_Sans } from "next/font/google"
import { useState } from "react"

const openSans = Open_Sans({subsets: ["latin"]})

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ name, email, message })
  }

  return (
    <section className={`w-full py-8 ${openSans.className} bg-white`}>
      <form onSubmit={handleSubmit} className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-[#e32c22] focus:ring-opacity-20 transition-all outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-[#e32c22] focus:ring-opacity-20 transition-all outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <textarea
            id="message"
            placeholder="Message"
            rows={5}
            className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-[#e32c22] focus:ring-opacity-20 transition-all outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-[#e32c22] text-white font-medium rounded hover:bg-[#c52218] active:bg-[#a91e15] transition-colors duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}
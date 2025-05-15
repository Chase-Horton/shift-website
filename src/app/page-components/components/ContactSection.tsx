"use client"
import { Open_Sans } from "next/font/google"
import { useForm } from "react-hook-form"
import { ContactFormFields, ContactFormSchema, } from "./schemas"
import { zodResolver } from "@hookform/resolvers/zod"

const openSans = Open_Sans({subsets: ["latin"]})
export function ContactForm() {
  const {
    register,
    handleSubmit: handleSubmit,
    formState: {errors, },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(ContactFormSchema)
  })
  const onSubmit = (data:ContactFormFields) => {
    console.log(data)
  }
  return (
    <section className={`w-full py-8 ${openSans.className} bg-white`}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-7xl mx-auto px-4">
        <h1 className="text-left text-2xl mb-4">Interested? Questions? Contact Us:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-[#e32c22] focus:ring-opacity-20 transition-all outline-none"
              required
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-[#e32c22] focus:ring-opacity-20 transition-all outline-none"
              required
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <textarea
            id="message"
            placeholder="Message"
            rows={5}
            className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-[#e32c22] focus:ring-opacity-20 transition-all outline-none"
            required
            {...register("message")}
          />
            {errors.message && (
              <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
            )}
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
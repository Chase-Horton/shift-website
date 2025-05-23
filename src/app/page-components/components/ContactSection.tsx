"use client"
import { useForm } from "react-hook-form"
import { ContactFormFields, ContactFormSchema, } from "./schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { ContactOnSubmit } from "./ServerActions"

export function ContactForm() {
  const {
    register,
    handleSubmit: handleSubmit,
    formState: {errors, },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(ContactFormSchema)
  })
  return (
    <div className={`w-full py-8 bg-white`}>
      <form onSubmit={handleSubmit(ContactOnSubmit)} className="w-full max-w-7xl mx-auto px-4">
        <h1 className="text-left text-2xl mb-4">Interested? Questions? Contact Us:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <input
              id="fullname"
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-[#e32c22] focus:ring-opacity-20 transition-all outline-none"
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
            {...register("message")}
          />
            {errors.message && (
              <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
            )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-[#e32c22] text-white font-medium rounded hover:bg-[#c52218] active:bg-[#a91e15] hover:scale-105 ease-in-out duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
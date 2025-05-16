import {z} from "zod"

export const ContactFormSchema = z.object({
  name:z.string({required_error:"Name is required"}).min(2, "Name must be at least 2 characters").max(100, "Name cannot be longer than 100 characters"),
  email:z.string().email(),
  message:z.string().min(5, "Message must be at least 5 characters").max(3000, "Message cannot be longer than 3000 characters") //500 words
})
export type ContactFormFields = z.infer<typeof ContactFormSchema>
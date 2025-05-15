import {z} from "zod"

export const ContactFormSchema = z.object({
  name:z.string().min(2).max(100),
  email:z.string().email(),
  message:z.string().min(3).max(3000) //500 words
})
export type ContactFormFields = z.infer<typeof ContactFormSchema>
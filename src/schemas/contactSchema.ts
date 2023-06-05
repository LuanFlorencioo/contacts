import { z } from "zod";

export const contactSchema = z.object({
  id: z.string(),
  full_name: z.string().min(5).max(127),
  email: z.string().email().max(50),
  phone: z.string().max(25),
  created_at: z.date(),
})

export const contactSchemaRequest = contactSchema.omit({
  id: true,
  created_at: true,
})

export const contactSchemaUpdate = contactSchemaRequest.partial();

export const contactSchemaArray = z.object({
  contacts: contactSchema.array()
})

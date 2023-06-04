import { z } from "zod";
import { contactSchema } from "./contactSchema";

export const clientSchema = z.object({
  id: z.number(),
  full_name: z.string().nonempty().min(5).max(127),
  email: z.string().email().max(50),
  password: z.string().min(6).max(16),
  phone: z.string().nonempty().max(25),
  created_at: z.date(),
})

export const clientRequestSchema = clientSchema.omit({
  id: true,
  created_at: true,
})

export const clientResponseSchema = clientSchema.omit({
  password: true,
})

export const clientRetrieveSchema = clientResponseSchema.extend({
  contacts: z.array(contactSchema),
})

export const clientLoginSchema = clientSchema.pick({
  email: true,
  password: true,
})

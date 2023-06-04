import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaUpdate,
  contactSchemaArray,
} from "@/schemas";

export type iContact = z.infer<typeof contactSchema>;
export type iContactRequest = z.infer<typeof contactSchemaRequest>;
export type iContactUpdate = z.infer<typeof contactSchemaUpdate>;
export type iContactArray = z.infer<typeof contactSchemaArray>;

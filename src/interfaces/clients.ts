import { z } from "zod";
import {
  clientSchema,
  clientLoginSchema,
  clientRequestSchema,
  clientResponseSchema,
} from "@/schemas";

export type iClient = z.infer<typeof clientSchema>;
export type iLogin = z.infer<typeof clientLoginSchema>;
export type iClientRequest = z.infer<typeof clientRequestSchema>;
export type iClientResponse = z.infer<typeof clientResponseSchema>;

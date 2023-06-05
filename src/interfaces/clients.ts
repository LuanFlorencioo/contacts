import { z } from "zod";
import {
  clientSchema,
  clientLoginSchema,
  clientRequestSchema,
  clientResponseSchema,
  clientUpdateSchema,
  clientRetrieveSchema,
} from "@/schemas";

export type iClient = z.infer<typeof clientSchema>;
export type iLogin = z.infer<typeof clientLoginSchema>;
export type iClientRequest = z.infer<typeof clientRequestSchema>;
export type iClientResponse = z.infer<typeof clientResponseSchema>;
export type iClientRetrieve = z.infer<typeof clientRetrieveSchema>;
export type iClientUpdate = z.infer<typeof clientUpdateSchema>;


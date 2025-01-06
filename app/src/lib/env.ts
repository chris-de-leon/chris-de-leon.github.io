import { z } from "zod";

export const env = {
  NEXT_PUBLIC_GTAG: z
    .string()
    .optional()
    .parse(process.env["NEXT_PUBLIC_GTAG"]),
};

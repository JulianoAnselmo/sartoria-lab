import { z } from 'zod';

export const briefingSchema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  empresa: z.string().optional(),
  mensagem: z.string().min(10),
});

export type Briefing = z.infer<typeof briefingSchema>;

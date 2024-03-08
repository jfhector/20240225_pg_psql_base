import { z } from 'zod';

const todoSchema = z.object({
  name: z.string().min(2, "A name is required to add a todo"),
  done: z.optional(z.boolean()),
});

type ToDo = z.infer<typeof todoSchema>

export {todoSchema, ToDo};
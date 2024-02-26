import { z } from 'zod';

const todoSchema = z.object({
  name: z.string().min(2, "A name is required to add a todo"),
  done: z.boolean(),
});

// type ToDo = TODO

export {todoSchema};
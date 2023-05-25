import { string, z } from "zod";


export const todoCreateSchema = z.object({
    title: string().nonempty("Title may not be empty!"),
    description: string().nonempty("Description may not be empty!"),
});

export const todoParamSchema = z.object({
    id: z.string().uuid().nonempty("Id cannot be empty!")
})
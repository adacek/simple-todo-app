import { Request, Response } from "express"
import { todoCreateSchema } from "../../utils/schemas"
import { handleError, handleSuccess } from "../../utils/responseUtils";
import { prisma } from "../../client";

export const todoCreate = async (req: Request, res: Response) => {
    const parsedBody = todoCreateSchema.safeParse(req.body);
    if (!parsedBody.success) {
        return handleError(res, 400, parsedBody.error.name, "Invalid request body");
    }
    // I would have used @badrap/result in more complex api calls
    try {
        const todo = await prisma.todo.create({
            data: {
                ...parsedBody.data
            }
        });
        return handleSuccess(res, 201, todo, "Todo created successfully");
    } catch (error) {
        return handleError(res, 500, error, "Error happened");
    }
};
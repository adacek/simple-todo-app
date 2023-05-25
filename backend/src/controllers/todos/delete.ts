import { Request, Response } from "express";
import { todoParamSchema } from "../../utils/schemas";
import { handleError, handleSuccess } from "../../utils/responseUtils";
import { prisma } from "../../client";

export const deleteTodo = async (req: Request, res: Response) => {
    const parsedParams = todoParamSchema.safeParse(req.params);
    if (!parsedParams.success) {
        return handleError(res, 400, parsedParams.error.name, "Invalid request params");
    }
    try {
        const todo = await prisma.todo.update({
            data: {
                deletedAt: new Date()
            },
            where: {
                ...parsedParams.data
            }
        });
        if (!todo) {
            return handleError(res, 404, "Error", "No Todo found");
        }
        return handleSuccess(res, 200, todo, "Todo deleted successfully");
    } catch (error) {
        return handleError(res, 500, "Error", "Error happened");
    }
};
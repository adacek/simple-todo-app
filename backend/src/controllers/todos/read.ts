import { Request, Response } from "express";
import { handleError, handleSuccess } from "../../utils/responseUtils";
import { prisma } from "../../client";

export const getAll = async (_: Request, res: Response) => {
    try {
        const todos = await prisma.todo.findMany({
            where: {
                deletedAt: null
            }
        });
        if (!todos.length) {
            return handleError(res, 404, "Error", "No todos found");
        }
        return handleSuccess(res, 200, todos, "Todos retrieved successfully");
    } catch (error) {
        return handleError(res, 500, error, "Error happened");
    }
}
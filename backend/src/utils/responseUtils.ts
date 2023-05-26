import { Response } from "express";
import { ApiResponse } from "../controllers/types"

export const handleSuccess = (res: Response, status: number, data: unknown, message: string) => {
    res.status(status).send({
        status: 'success',
        data,
        message
    } as ApiResponse<typeof data>);
}

export const handleError = (res: Response, status: number, error: unknown, message: string) => {
    res.status(status).send({
        status: 'failure',
        data: error,
        message
    } as ApiResponse<typeof error>);
}
export interface ResponseSingle<T> {
    status: "success" | "failure";
    data: T;
    message: string;
};

export interface ResponseMulti<T> {
    status: "success" | "failure";
    data: T[];
    message: string;
}
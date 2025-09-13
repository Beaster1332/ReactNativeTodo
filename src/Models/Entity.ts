
export namespace Entity {
    export namespace Todo {
        export type Status = "new" | "inProcess" | "done"

        export type Todo = {
            id: string;
            title: string;
            description: string;
            status: Status
        }
    }
}
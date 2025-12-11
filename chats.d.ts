export declare module "./chats.js" {
    export type Chats = {
        time: string,
        message: string,
    }

    export const chats: Chats[];

    export function log(chats: Chats[]): void;
}
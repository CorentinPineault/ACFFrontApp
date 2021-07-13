import { Collaborator } from "../collaborator/collaborator";
import { Message } from "../message/message";

export class Client {
    id?: number;
    firstname?: String;
    lastname?: String;
    email?: String;
    folder?: number;
    collaboraterList?: Collaborator[];
    messageList?: Message[];
}

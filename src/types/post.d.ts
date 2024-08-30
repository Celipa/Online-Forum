export type ThreadCategory = "THREAD" | "QNA";

export type User = {
	userName: string;
  userId: number;
}

export interface Thread {
	id: string;
	category: ThreadCategory;
	title: string;
	description: string;
	creationDate: Date;
	creator?: User;
}

export type QNAThread =  Thread & { //Type extension
	category: "QNA";
	isAnswered: boolean;
	commentAnswerId?: number;
}

export type ThreadComment = {
	id: User;
	thread: Thread;
	content: string;
	creator: User
}

export type SubmitForm = {
	title:string,
	description:string
}

type ErrorForm = SubmitForm & {
	selection:string
}

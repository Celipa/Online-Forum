type ThreadCategory = "THREAD" | "QNA";

type User = {
	userName: string;
  userId: number;
}

interface Thread {
	id: string;
	category: ThreadCategory;
	title: string;
	description: string;
	creationDate: Date;
	creator?: User;
}

type QNAThread =  Thread & { //Type extension
	category: "QNA";
	isAnswered: boolean;
	commentAnswerId?: number;
}

type ThreadComment = {
	id: User;
	thread: Thread;
	content: string;
	creator?: User
}

type SubmitForm = {
	title:string,
	description:string
}

type ErrorForm = SubmitForm & {
	selection:string
}

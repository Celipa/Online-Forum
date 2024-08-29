type ThreadCategory = "THREAD" | "QNA";

type User = {
	userName: string;
  userId: number;
}

type Thread = {
  id: number;
	title: string;
	category: ThreadCategory;
	creationDate: string;
	description: string;
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
	creator: User
}

type SubmitForm = {
	title:string,
	description:string
}

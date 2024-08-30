type ThreadCategory = "THREAD" | "QNA";

type User = {
	userName: string;
  userId: number;
}

type Thread = {
  id: string;
	title: string;
	category: ThreadCategory;
	creationDate: Date;
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

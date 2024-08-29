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



//example

// const user1: User = {
//   userName: "Alice",
//   userId: 1
// };

// const user2: User = {
//   userName: "Bob",
//   userId: 2
// };

// const thread1: Thread = {
//   id: 101,
//   title: "General Discussion",
//   category: "THREAD",
//   description: "A place for general discussion",
//   creator: user1
// };

// const qnaThread1: QNAThread = {
//   id: 102,
//   title: "How to use TypeScript?",
//   category: "QNA",
//   description: "Discussion about TypeScript usage",
//   creator: user2,
//   isAnswered: false
// };

// const comment1: ThreadComment = {
//   id: user2,
//   thread: thread1,
//   content: "This is a comment on the general discussion thread.",
//   creator: user2
// };

numbers = ["first", 2, 3, 4, 5, 6, 6, 7, 8, 8, 9];
let [firstElem] = numbers;
console.log(firstElem);

let user = {
  name: "pavel",
  age: 18,
};

let admin = {
  admin: true,
  ...user,
};

console.log(admin);

let store = {
  state: {
    profilePage: {
      posts: [
        { id: 1, message: "hi", likesCount: 12 },
        { id: 2, message: "by", likesCount: 11 },
      ],
      newPostText: "About me",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Valera" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Viktor" },
      ],
      messages: [
        { id: 1, message: "hi" },
        { id: 2, message: "hi hi" },
        { id: 3, message: "hi hi hi" },
      ],
    },
    sidebar: [],
  },
};

let {
  state: {
    profilePage: { posts },
    dialogsPage: { dialogs, messages },
  },
} = store;

posts.forEach((post) => console.log(post.likesCount));

console.log(dialogs.filter((dialog) => dialog.id % 2 === 0));

messages.map((message) => (message.message = "Hello user"));

console.log(store.state.dialogsPage.messages);

let tasks = [
  { id: 1, title: "HTMLCSS", isDone: true },
  { id: 2, title: "JS", isDone: true },
  { id: 3, title: "ReactJS", isDone: false },
  { id: 4, title: "RestAPI", isDone: false },
  { id: 5, title: "GraphQL", isDone: false },
];

tasks = [{ id: 5, title: "NextJS", isDone: false }, ...tasks];

console.log(tasks);

function sumValues(x, y, z) {
  return x + y + z;
}

let arr = [1, 2, 3];

console.log(sumValues(...arr));

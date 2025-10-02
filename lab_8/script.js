function deepClone(obj) {
  if (obj === null || typeof obj != "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  const clonedObj = { ...obj };
  for (let key in clonedObj) {
    if (clonedObj.hasOwnProperty(key)) {
      clonnedObj[key] = deepClone(clonnedObj[key]);
    }
  }
  return clonedObj;
}

let user = {
  name: "Masha",
  age: 21,
};

let numbers = [1, 2, 3];

let user1 = {
  name: "Masha",
  age: 23,
  location: {
    city: "Minsk",
    country: "Belarus",
  },
};

let user2 = {
  name: "Masha",
  age: 28,
  skills: ["HTML", "CSS", "JavaScript", "React"],
};

const array = [
  { id: 1, name: "Vasya", group: 10 },
  { id: 2, name: "Ivan", group: 11 },
  { id: 3, name: "Masha", group: 12 },
  { id: 4, name: "Petya", group: 10 },
  { id: 5, name: "Kira", group: 11 },
];
let user4 = {
  name: "Masha",
  age: 19,
  studies: {
    university: "BSTU",
    speciality: "designer",
    year: 2020,
    exams: {
      maths: true,
      programming: false,
    },
  },
};

let user5 = {
  name: "Masha",
  age: 22,
  studies: {
    university: "BSTU",
    speciality: "designer",
    year: 2020,
    department: {
      faculty: "FIT",
      group: 10,
    },
    exams: [
      { maths: true, mark: 8 },
      { programming: true, mark: 4 },
    ],
  },
};

user5.studies.department.group = 12;
user5.studies.exams[1].programming = 10;

let user6 = {
  name: "Masha",
  age: 21,
  studies: {
    university: "BSTU",
    speciality: "designer",
    year: 2020,
    department: {
      faculty: "FIT",
      group: 10,
    },
    exams: [
      {
        maths: true,
        mark: 8,
        professor: {
          name: "Ivan Ivanov ",
          degree: "PhD",
        },
      },
      {
        programming: true,
        mark: 10,
        professor: {
          name: "Petr Petrov",
          degree: "PhD",
        },
      },
    ],
  },
};

let user7 = {
  name: "Masha",
  age: 20,
  studies: {
    university: "BSTU",
    speciality: "designer",
    year: 2020,
    department: {
      faculty: "FIT",
      group: 10,
    },
    exams: [
      {
        maths: true,
        mark: 8,
        professor: {
          name: "Ivan Petrov",
          degree: "PhD",
          articles: [
            { title: "About HTML", pagesNumber: 3 },
            { title: "About CSS", pagesNumber: 5 },
            { title: "About JavaScript", pagesNumber: 1 },
          ],
        },
      },
      {
        programming: true,
        mark: 10,
        professor: {
          name: "Petr Ivanov",
          degree: "PhD",
          articles: [
            { title: "About HTML", pagesNumber: 3 },
            { title: "About CSS", pagesNumber: 5 },
            { title: "About JavaScript", pagesNumber: 1 },
          ],
        },
      },
    ],
  },
};

const store = {
  state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi", likesCount: 12 },
        { id: 2, message: "By", likesCount: 1 },
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

let user5Copy = deepClone(user5);

user5Copy.studies.department.group = 12;
user5Copy.studies.exams[1].programming = 10;

console.log(user5);
console.log(user5Copy);

let user6Copy = deepClone(user6);
user6Copy.studies.exams[0].professor = "Pavel Beloded";

let user7Copy = deepClone(user7);

user7Copy.studies.exams[1].professor.articles[0].pagesNumber = 3;

function replaceAllMessages(obj, targetKey = "message", newValue = "Hello") {
  if (Array.isArray(obj)) {
    return obj.map((item) => replaceAllMessages(item, targetKey, newValue));
  }

  if (obj && typeof obj === "object") {
    const result = {};

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (key === targetKey && typeof obj[key] === "string") {
          result[key] = newValue;
        } else {
          result[key] = replaceAllMessages(obj[key], targetKey, newValue);
        }
      }
    }

    return result;
  }

  return obj;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter((number) => number >= 5);
// console.log(filteredNumbers);


const furniture = ['стол', 'стул', 'диван', 'шкаф', 'кровать'];

const includedFurniture = furniture.includes('стол');
// console.log(includedFurniture);


const reversedNumbers = numbers.reverse();
// console.log(reversedNumbers);

const reversedFurniture = furniture.reverse();
// console.log(reversedFurniture);


import { comments } from "./comments.js";

const comMail = comments.filter(comment => comment.email.includes(".com"));
// console.log(comMail);


const updatedComments = comments.map((comment) => ({ ...comment, postId: comment.id <= 5 ? 1 : 2 }));
// console.log(updatedComments)


const simpleComments = comments.map((comment) => ({ name: comment.name, email: comment.email }));
// console.log(simpleComments);


const invalidComments = comments.map(comment => ({ ...comment, isInvalid: comment.body.length > 180 ? true : false }));
console.log(invalidComments);


const emailsReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
    return acc;
}, []);
console.log(emailsReduce);

const emailsMap = comments.map(comment => comment.email);
console.log(emailsMap);


const emailsToString = emailsMap.join(', ');
console.log(emailsToString);


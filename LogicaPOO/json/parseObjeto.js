let user = '{ "name": "Gustavo", "age": 21, "isAdmin": false, "friends": [0,1,2,3] }';

user = JSON.parse(user);
console.log(user.friends[0]);
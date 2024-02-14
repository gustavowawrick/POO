var json = '{ "name":"Gustavo Nunes", "birth":"2002-03-14T11:00:00.000Z", "city":"Canoas"}';

var obj = JSON.parse(json, function (key, value) {
    if (key == "birth") {
        return new Date(value);
    }
    return value;
});

console.log("Nome:  " + obj.name);
console.log("Data de nascimento: " + obj.birth);
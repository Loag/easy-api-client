/*
** required fields 'name' and 'url' with object of optional params **
*/

let client = Client();

client.add({name: 'demo', url: 'https://jsonplaceholder.typicode.com/posts/1'});

client.demo().then(function(result) {
 console.log('Yay we got: ' + JSON.stringify(result));
});



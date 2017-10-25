# easy-api-client
The point of this is a quick dropin, zero dependency, frontend api client
that is easily extendable and uses fetch

## usage:
```
let client = Client();

client.add({name: 'demo', url: 'https://jsonplaceholder.typicode.com/posts/1'});

client.demo().then(function(result) {
 console.log('Yay we got: ' + JSON.stringify(result));
});
```

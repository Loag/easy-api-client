/*
We are adding our api methods to our global object so we
can declare all of our methods once and call them wherever
we want in our program and also giving them a very simple 
readable interface.
*/

(function(global) {
 
   let APIClient = function() {
     return new APIClient.init();
   }

   APIClient.prototype =(function() {

     let run = function (defaults, input) {
      if (Array.isArray(input) === false) { // just cast to array to save else
        input = [input];
      }

      input.forEach(function(item) {
        if (item) {
          if ('name' in item === false || 'url' in item === false) { throw 'object must have name and url fields'};
          // default options
          let options = createOptions(defaults, item.opts);
          APIClient.prototype[item.name] = function(){
            return req(item.url, options);
          } // returns data
        }
      });
    }

    let createOptions = function (defaults, opts) {
      // default
      let options = {
        mode: defaults.mode,
        method: defaults.method,
        headers: defaults.headers,
        cache: defaults.cache
      };

      if (opts) {
        Object.keys(opts).forEach(function(key) {
          // first go through any items that were placed on opts

          switch (key) {
            case 'mode':
              options.mode = opts.mode;
            break;
            case 'headers':
              options.headers = opts.mode;
            break;
            case 'cache':
              options.cache = opts.cache;
            break;
            case 'method':
              options.method = opts.method;
            break;
            default:
            break;
          }
        });
      }
      return options;
    }
    
    let req = function (url, opts) {
      // taken from 
      return fetch(url, opts).then(
        (response) => response.json())
        .catch(function(error) {
          console.log(error);
        });
    }

    return {
     add: function(item) {
       run(this, item)  
     }   
    };
   })();
 
   APIClient.init = function() {
     // defaults
     this.mode = 'cors';
     this.headers = new Headers();
     this.method = 'GET';
     this.cache = 'default';
   }
 
   APIClient.init.prototype = APIClient.prototype;
 
   global.Client = APIClient;
 
 })(this);
function checkNumber(param1){
  var type = typeof(param1);

  if(type === 'string') {
   console.log('Your variable is string');
  }

  else if(type === "undefined") {
   console.log('Your variable is undefined');
  }

  else if(type === "object") {
   console.log('Your variable is object');
  }

  else if(type === "boolean") {
   console.log('Your variable is boolean');
  }

  else {
    console.log('Your variable is really number');
  }
}

function countSomething() {
 var foo = true;
 console.log(foo);
 checkNumber(foo);

 var bar = "lalalala";
 console.log(bar);
 checkNumber(bar);

 var baz = null;
 console.log(baz);
 checkNumber(baz);

 var arr = [1,2,4,5];
 console.log(arr);
 checkNumber(arr);

 var num = 3;
 console.log(num);
 checkNumber(num);

 var und = undefined;
 console.log(und);
 checkNumber(und);
}

countSomething();

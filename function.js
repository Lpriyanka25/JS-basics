const person = {
 name: 'Alice',
  greet: function() {
   setTimeout(() =>{
       console.log("Hello, " + this.name);
   }, 1000);
  }
};

person.greet();

const person = {
  name: 'John',
  greet: () => {
    console.log(this.name);
  }
};
person.greet();

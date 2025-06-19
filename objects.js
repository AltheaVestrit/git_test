/* >>> array of objects: <<< */
let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

/* >>> add new key/value pair to object by 
using the following notation:
obj["key"] = "value" */
function groupById(array) {
    array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
};

let usersById = groupById(users);

  /*
  // after the call we should have:
  
  >>> Object containing objects as values: <<<
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
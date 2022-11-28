function allTheArgs(func, ...args) {
  // Your code here
  const newFunc = (args2, ...args3) =>{
    if(args2){
      args.push(args2);
      if(args3.length > 0){
        args = args.concat(args3);
      }
    }
  return func.apply(args[0],args);
}
return newFunc;
}
const bow = (...names) => {
  let nameArr = Array.from(names);
  return "You bowed to " + names.join(" and ");
};

console.log(bow("Sandy")) // prints "You bowed to Sandy"

let bowSandy = allTheArgs(bow, "Sandy");
console.log(bowSandy()); // prints "You bowed to Sandy"
console.log(bowSandy("Joe", "Nico")); 
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
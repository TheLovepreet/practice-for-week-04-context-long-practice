function boundFuncTimer(obj, func, delay) {
  // Your code here
  let bounded = func.bind(obj);
  return setTimeout(bounded,delay);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
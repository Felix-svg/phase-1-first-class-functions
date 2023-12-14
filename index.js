function receivesAFunction (call) {
    return call();
}

function returnsANamedFunction () {
    let namedFunction = returnsANamedFunction;
    return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function() {
    
  }
}

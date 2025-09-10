function parent() {
  let a = 10;
  function child() {
      console.log(a);
    function grand() {
      let b = 100;
      console.log(`From grand ${a}`);
      console.log(`From grand ${b}`);
    }

    grand();
  }
  child();
}
parent();

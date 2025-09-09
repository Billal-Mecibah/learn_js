let Age, Name, Status;
let sentence;
function showDetails(...sk) {
  for (let i = 0; i < sk.length; i++) {
    if (typeof sk[i] === "string") {
      Name = sk[i];
    }
    if (typeof sk[i] === "number") {
      Age = sk[i];
    }
    if (typeof sk[i] === "boolean" && sk[i] === true) {
      Status = sk[i];
      sentence = "You Are Available for Hire";
    }
    if (typeof sk[i] === "boolean" && sk[i] === false) {
      Status = sk[i];
      sentence = "You Are Not Available for Hire";
    }
  }
  console.log(`Hello ${Name} ,Your Age Is ${Age}, ${sentence}`);
}

showDetails("Bilal", 20, true);
showDetails(20, "Bilal", true);
showDetails(true, 20, "Bilal");
showDetails(false, "Bilal", 20);

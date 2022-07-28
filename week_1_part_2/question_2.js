//Question 2//

function calculate({ n1, n2, op }) {
    if (op == "+") {
      return n1 + n2;
    } else if (op == "-") {
      return n1 - n2;
    } else {
      return "Not supported";
    }
  }
  
  console.log(calculate({ n1: 2, n2: 3, op: "+" }));
  console.log(calculate({ n1: 5, n2: 2, op: "-" }));
  console.log(calculate({ n1: 1, n2: 6, op: "x" }));
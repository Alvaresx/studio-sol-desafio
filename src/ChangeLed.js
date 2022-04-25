export const handleChangeLed = (data) => {
  console.log(data.length);
  const positionOne = data.substr(0, 1);
  const positionTwo = data.substr(1, 1);
  const positionThree = data.substr(2, 3);

  const oneSegmentA = document.getElementById("01-segment-a");
  const oneSegmentB = document.getElementById("01-segment-b");
  const oneSegmentC = document.getElementById("01-segment-c");
  const oneSegmentD = document.getElementById("01-segment-d");
  const oneSegmentE = document.getElementById("01-segment-e");
  const oneSegmentF = document.getElementById("01-segment-f");
  const oneSegmentG = document.getElementById("01-segment-g");

  const twoSegmentA = document.getElementById("02-segment-a");
  const twoSegmentB = document.getElementById("02-segment-b");
  const twoSegmentC = document.getElementById("02-segment-c");
  const twoSegmentD = document.getElementById("02-segment-d");
  const twoSegmentE = document.getElementById("02-segment-e");
  const twoSegmentF = document.getElementById("02-segment-f");
  const twoSegmentG = document.getElementById("02-segment-g");

  const threeSegmentA = document.getElementById("03-segment-a");
  const threeSegmentB = document.getElementById("03-segment-b");
  const threeSegmentC = document.getElementById("03-segment-c");
  const threeSegmentD = document.getElementById("03-segment-d");
  const threeSegmentE = document.getElementById("03-segment-e");
  const threeSegmentF = document.getElementById("03-segment-f");
  const threeSegmentG = document.getElementById("03-segment-g");

  for (let i = 0; i < data.length; i++) {
    console.log(data[i])
  }

  

  if (positionOne !== "") {
    if (positionOne === "1") {
      oneSegmentA.classList.remove("active");
      oneSegmentB.classList.add("active");
      oneSegmentC.classList.add("active");
      oneSegmentD.classList.remove("active");
      oneSegmentE.classList.remove("active");
      oneSegmentF.classList.remove("active");
      oneSegmentG.classList.remove("active");
    } else if (positionOne === "2") {
      oneSegmentA.classList.add("active");
      oneSegmentB.classList.add("active");
      oneSegmentC.classList.remove("active");
      oneSegmentD.classList.add("active");
      oneSegmentE.classList.add("active");
      oneSegmentF.classList.remove("active");
      oneSegmentG.classList.add("active");
    } else if (positionOne === "3") {
      oneSegmentA.classList.add("active");
      oneSegmentB.classList.add("active");
      oneSegmentC.classList.add("active");
      oneSegmentD.classList.add("active");
      oneSegmentE.classList.remove("active");
      oneSegmentF.classList.remove("active");
      oneSegmentG.classList.add("active");
    } else if (positionOne === "4") {
      oneSegmentA.classList.remove("active");
      oneSegmentB.classList.add("active");
      oneSegmentC.classList.add("active");
      oneSegmentD.classList.remove("active");
      oneSegmentE.classList.remove("active");
      oneSegmentF.classList.add("active");
      oneSegmentG.classList.add("active");
    } else if (positionOne === "5") {
      oneSegmentA.classList.add("active");
      oneSegmentB.classList.remove("active");
      oneSegmentC.classList.add("active");
      oneSegmentD.classList.add("active");
      oneSegmentE.classList.remove("active");
      oneSegmentF.classList.add("active");
      oneSegmentG.classList.add("active");
    } else if (positionOne === "6") {
      oneSegmentA.classList.add("active");
      oneSegmentB.classList.remove("active");
      oneSegmentC.classList.add("active");
      oneSegmentD.classList.add("active");
      oneSegmentE.classList.add("active");
      oneSegmentF.classList.add("active");
      oneSegmentG.classList.add("active");
    } else if (positionOne === "7") {
      oneSegmentA.classList.add("active");
      oneSegmentB.classList.add("active");
      oneSegmentC.classList.add("active");
      oneSegmentD.classList.remove("active");
      oneSegmentE.classList.remove("active");
      oneSegmentF.classList.remove("active");
      oneSegmentG.classList.remove("active");
    } else if (positionOne === "8") {
      oneSegmentA.classList.add("active");
      oneSegmentB.classList.add("active");
      oneSegmentC.classList.add("active");
      oneSegmentD.classList.add("active");
      oneSegmentE.classList.add("active");
      oneSegmentF.classList.add("active");
      oneSegmentG.classList.add("active");
    } else if (positionOne === "9") {
      oneSegmentA.classList.add("active");
      oneSegmentB.classList.add("active");
      oneSegmentC.classList.add("active");
      oneSegmentD.classList.remove("active");
      oneSegmentE.classList.remove("active");
      oneSegmentF.classList.add("active");
      oneSegmentG.classList.add("active");
    }
  }

  if (positionTwo !== "") {
    if (positionTwo === "1") {
      twoSegmentB.classList.add("active");
      twoSegmentC.classList.add("active");
    } else if (positionTwo === "2") {
      twoSegmentA.classList.add("active");
      twoSegmentB.classList.add("active");
      twoSegmentC.classList.remove("active");
      twoSegmentD.classList.add("active");
      twoSegmentE.classList.add("active");
      twoSegmentF.classList.remove("active");
      twoSegmentG.classList.add("active");
    } else if (positionTwo === "3") {
      twoSegmentA.classList.add("active");
      twoSegmentB.classList.add("active");
      twoSegmentC.classList.add("active");
      twoSegmentD.classList.add("active");
      twoSegmentE.classList.remove("active");
      twoSegmentF.classList.remove("active");
      twoSegmentG.classList.add("active");
    } else if (positionTwo === "4") {
      twoSegmentA.classList.remove("active");
      twoSegmentB.classList.add("active");
      twoSegmentC.classList.add("active");
      twoSegmentD.classList.remove("active");
      twoSegmentE.classList.remove("active");
      twoSegmentF.classList.add("active");
      twoSegmentG.classList.add("active");
    } else if (positionTwo === "5") {
      twoSegmentA.classList.add("active");
      twoSegmentB.classList.remove("active");
      twoSegmentC.classList.add("active");
      twoSegmentD.classList.add("active");
      twoSegmentE.classList.remove("active");
      twoSegmentF.classList.add("active");
      twoSegmentG.classList.add("active");
    } else if (positionTwo === "6") {
      twoSegmentA.classList.add("active");
      twoSegmentB.classList.remove("active");
      twoSegmentC.classList.add("active");
      twoSegmentD.classList.add("active");
      twoSegmentE.classList.add("active");
      twoSegmentF.classList.add("active");
      twoSegmentG.classList.add("active");
    } else if (positionTwo === "7") {
      twoSegmentA.classList.add("active");
      twoSegmentB.classList.add("active");
      twoSegmentC.classList.add("active");
      twoSegmentD.classList.remove("active");
      twoSegmentE.classList.remove("active");
      twoSegmentF.classList.remove("active");
      twoSegmentG.classList.remove("active");
    } else if (positionTwo === "8") {
      twoSegmentA.classList.add("active");
      twoSegmentB.classList.add("active");
      twoSegmentC.classList.add("active");
      twoSegmentD.classList.add("active");
      twoSegmentE.classList.add("active");
      twoSegmentF.classList.add("active");
      twoSegmentG.classList.add("active");
    } else if (positionTwo === "9") {
      twoSegmentA.classList.add("active");
      twoSegmentB.classList.add("active");
      twoSegmentC.classList.add("active");
      twoSegmentD.classList.remove("active");
      twoSegmentE.classList.remove("active");
      twoSegmentF.classList.add("active");
      twoSegmentG.classList.add("active");
    }
  }

  if (positionThree !== "") {
    if (positionThree === "1") {
      threeSegmentB.classList.add("active");
      threeSegmentC.classList.add("active");
    } else if (positionThree === "2") {
      threeSegmentA.classList.add("active");
      threeSegmentB.classList.add("active");
      threeSegmentC.classList.remove("active");
      threeSegmentD.classList.add("active");
      threeSegmentE.classList.add("active");
      threeSegmentF.classList.remove("active");
      threeSegmentG.classList.add("active");
    } else if (positionThree === "3") {
      threeSegmentA.classList.add("active");
      threeSegmentB.classList.add("active");
      threeSegmentC.classList.add("active");
      threeSegmentD.classList.add("active");
      threeSegmentE.classList.remove("active");
      threeSegmentF.classList.remove("active");
      threeSegmentG.classList.add("active");
    } else if (positionThree === "4") {
      threeSegmentA.classList.remove("active");
      threeSegmentB.classList.add("active");
      threeSegmentC.classList.add("active");
      threeSegmentD.classList.remove("active");
      threeSegmentE.classList.remove("active");
      threeSegmentF.classList.add("active");
      threeSegmentG.classList.add("active");
    } else if (positionThree === "5") {
      threeSegmentA.classList.add("active");
      threeSegmentB.classList.remove("active");
      threeSegmentC.classList.add("active");
      threeSegmentD.classList.add("active");
      threeSegmentE.classList.remove("active");
      threeSegmentF.classList.add("active");
      threeSegmentG.classList.add("active");
    } else if (positionThree === "6") {
      threeSegmentA.classList.add("active");
      threeSegmentB.classList.remove("active");
      threeSegmentC.classList.add("active");
      threeSegmentD.classList.add("active");
      threeSegmentE.classList.add("active");
      threeSegmentF.classList.add("active");
      threeSegmentG.classList.add("active");
    } else if (positionThree === "7") {
      threeSegmentA.classList.add("active");
      threeSegmentB.classList.add("active");
      threeSegmentC.classList.add("active");
      threeSegmentD.classList.remove("active");
      threeSegmentE.classList.remove("active");
      threeSegmentF.classList.remove("active");
      threeSegmentG.classList.remove("active");
    } else if (positionThree === "8") {
      threeSegmentA.classList.add("active");
      threeSegmentB.classList.add("active");
      threeSegmentC.classList.add("active");
      threeSegmentD.classList.add("active");
      threeSegmentE.classList.add("active");
      threeSegmentF.classList.add("active");
      threeSegmentG.classList.add("active");
    } else if (positionThree === "9") {
      threeSegmentA.classList.add("active");
      threeSegmentB.classList.add("active");
      threeSegmentC.classList.add("active");
      threeSegmentD.classList.remove("active");
      threeSegmentE.classList.remove("active");
      threeSegmentF.classList.add("active");
      threeSegmentG.classList.add("active");
    }
  }
};

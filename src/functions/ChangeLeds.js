export const handleChangeLed = (data, type) => {
  const dataStringfy = data.toString();
  let array = [];

  const handleIndentifyNumber = (data, type) => {
    if (data === "1") {
      let object01 = {
        a: "not_active",
        b: type,
        c: type,
        d: "not_active",
        e: "not_active",
        f: "not_active",
        g: "not_active",
      };
      array.push(object01);
    } else if (data === "2") {
      let object02 = {
        a: type,
        b: type,
        c: "not_active",
        d: type,
        e: type,
        f: "not_active",
        g: type,
      };
      array.push(object02);
    } else if (data === "3") {
      let object03 = {
        a: type,
        b: type,
        c: type,
        d: type,
        e: "not_active",
        f: "not_active",
        g: type,
      };
      array.push(object03);
    } else if (data === "4") {
      let object04 = {
        a: "not_active",
        b: type,
        c: type,
        d: "not_active",
        e: "not_active",
        f: type,
        g: type,
      };
      array.push(object04);
    } else if (data === "5") {
      let object05 = {
        a: type,
        b: "not_active",
        c: type,
        d: type,
        e: "not_active",
        f: type,
        g: type,
      };
      array.push(object05);
    } else if (data === "6") {
      let object06 = {
        a: type,
        b: "not_active",
        c: type,
        d: type,
        e: type,
        f: type,
        g: type,
      };
      array.push(object06);
    } else if (data === "7") {
      let object07 = {
        a: type,
        b: type,
        c: type,
        d: "not_active",
        e: "not_active",
        f: "not_active",
        g: "not_active",
      };
      array.push(object07);
    } else if (data === "8") {
      let object08 = {
        a: type,
        b: type,
        c: type,
        d: type,
        e: type,
        f: type,
        g: type,
      };
      array.push(object08);
    } else if (data === "9") {
      let object09 = {
        a: type,
        b: type,
        c: type,
        d: "not_active",
        e: "not_active",
        f: type,
        g: type,
      };
      array.push(object09);
    } else if (data === "0") {
      let object00 = {
        a: type,
        b: type,
        c: type,
        d: type,
        e: type,
        f: type,
        g: "not_active",
      };
      array.push(object00);
    }
  };

  for (let i = 0; i < dataStringfy.length; i++) {
    handleIndentifyNumber(dataStringfy[i], type);
  }

  return array;
};

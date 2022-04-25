export const handleChangeLed = (data) => {
  const containerSegments = document.getElementById("container_segments");
  containerSegments.innerText = "";

  const handleIndentifyNumber = (data) => {
    if (data === "1") {
      return `<div>
      <div id="segment-a" class="segment"></div>
      <div id="segment-b" class="segment active"></div>
      <div id="segment-c" class="segment active"></div>
      <div id="segment-d" class="segment"></div>
      <div id="segment-e" class="segment"></div>
      <div id="segment-f" class="segment"></div>
      <div id="segment-g" class="segment"></div>
      </div>
      `;
    } else if (data === "2") {
      return `<div>
      <div id="segment-a" class="segment active"></div>
      <div id="segment-b" class="segment active"></div>
      <div id="segment-c" class="segment"></div>
      <div id="segment-d" class="segment active"></div>
      <div id="segment-e" class="segment active"></div>
      <div id="segment-f" class="segment"></div>
      <div id="segment-g" class="segment active"></div>
      </div>`;
    } else if (data === "3") {
      return `<div>
      <div id="segment-a" class="segment active"></div>
      <div id="segment-b" class="segment active"></div>
      <div id="segment-c" class="segment active"></div>
      <div id="segment-d" class="segment active"></div>
      <div id="segment-e" class="segment"></div>
      <div id="segment-f" class="segment"></div>
      <div id="segment-g" class="segment active"></div>
      </div>`;
    } else if (data === "4") {
      return `<div>
      <div id="segment-a" class="segment"></div>
      <div id="segment-b" class="segment active"></div>
      <div id="segment-c" class="segment active"></div>
      <div id="segment-d" class="segment"></div>
      <div id="segment-e" class="segment"></div>
      <div id="segment-f" class="segment active"></div>
      <div id="segment-g" class="segment active"></div>
      </div>`;
    } else if (data === "5") {
      return `<div>
      <div id="segment-a" class="segment active"></div>
      <div id="segment-b" class="segment"></div>
      <div id="segment-c" class="segment active"></div>
      <div id="segment-d" class="segment active"></div>
      <div id="segment-e" class="segment"></div>
      <div id="segment-f" class="segment active"></div>
      <div id="segment-g" class="segment active"></div>
      </div>`;
    } else if (data === "6") {
      return `<div>
      <div id="segment-a" class="segment active"></div>
      <div id="segment-b" class="segment"></div>
      <div id="segment-c" class="segment active"></div>
      <div id="segment-d" class="segment active"></div>
      <div id="segment-e" class="segment active"></div>
      <div id="segment-f" class="segment active"></div>
      <div id="segment-g" class="segment active"></div>
      </div>`;
    } else if (data === "7") {
      return `<div>
      <div id="segment-a" class="segment active"></div>
      <div id="segment-b" class="segment active"></div>
      <div id="segment-c" class="segment active"></div>
      <div id="segment-d" class="segment"></div>
      <div id="segment-e" class="segment"></div>
      <div id="segment-f" class="segment"></div>
      <div id="segment-g" class="segment"></div>
      </div>`;
    } else if (data === "8") {
      return `<div>
      <div id="segment-a" class="segment active"></div>
      <div id="segment-b" class="segment active"></div>
      <div id="segment-c" class="segment active"></div>
      <div id="segment-d" class="segment active"></div>
      <div id="segment-e" class="segment active"></div>
      <div id="segment-f" class="segment active"></div>
      <div id="segment-g" class="segment active"></div>
      </div>`;
    } else if (data === "9") {
      return `<div>
      <div id="segment-a" class="segment active"></div>
      <div id="segment-b" class="segment active"></div>
      <div id="segment-c" class="segment active"></div>
      <div id="segment-d" class="segment"></div>
      <div id="segment-e" class="segment"></div>
      <div id="segment-f" class="segment active"></div>
      <div id="segment-g" class="segment active"></div>
      </div>`;
    } else if (data === "0") {
      return `<div>
      <div id="segment-a" class="segment active"></div>
      <div id="segment-b" class="segment active"></div>
      <div id="segment-c" class="segment active"></div>
      <div id="segment-d" class="segment active"></div>
      <div id="segment-e" class="segment active"></div>
      <div id="segment-f" class="segment active"></div>
      <div id="segment-g" class="segment"></div>
      </div>`;
    }
  };

  for (let i = 0; i < data.length; i++) {
    const div = document.getElementById("container_segments");
    div.innerHTML += handleIndentifyNumber(data[i]);
  }
};

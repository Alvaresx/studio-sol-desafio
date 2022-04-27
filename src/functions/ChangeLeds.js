export const handleChangeLed = (data, type) => {
  const dataStringfy = data.toString();
  const containerSegments = document.getElementById("container_segments");
  containerSegments.innerText = "";

  const handleIndentifyNumber = (data, type) => {
    if (data === "1") {
      return `<div data-testid="div_segments">
      <div id="segment-a" class="segment"></div>
      <div id="segment-b" class="segment ${type}"></div>
      <div id="segment-c" class="segment ${type}"></div>
      <div id="segment-d" class="segment"></div>
      <div id="segment-e" class="segment"></div>
      <div id="segment-f" class="segment"></div>
      <div id="segment-g" class="segment"></div>
      </div>
      `;
    } else if (data === "2") {
      return `<div data-testid="div_segments">
      <div id="segment-a" class="segment ${type}"></div>
      <div id="segment-b" class="segment ${type}"></div>
      <div id="segment-c" class="segment"></div>
      <div id="segment-d" class="segment ${type}"></div>
      <div id="segment-e" class="segment ${type}"></div>
      <div id="segment-f" class="segment"></div>
      <div id="segment-g" class="segment ${type}"></div>
      </div>`;
    } else if (data === "3") {
      return `<div data-testid="div_segments">
      <div id="segment-a" class="segment ${type}"></div>
      <div id="segment-b" class="segment ${type}"></div>
      <div id="segment-c" class="segment ${type}"></div>
      <div id="segment-d" class="segment ${type}"></div>
      <div id="segment-e" class="segment"></div>
      <div id="segment-f" class="segment"></div>
      <div id="segment-g" class="segment ${type}"></div>
      </div>`;
    } else if (data === "4") {
      return `<div data-testid="div_segments">
      <div id="segment-a" class="segment"></div>
      <div id="segment-b" class="segment ${type}"></div>
      <div id="segment-c" class="segment ${type}"></div>
      <div id="segment-d" class="segment"></div>
      <div id="segment-e" class="segment"></div>
      <div id="segment-f" class="segment ${type}"></div>
      <div id="segment-g" class="segment ${type}"></div>
      </div>`;
    } else if (data === "5") {
      return `<div data-testid="div_segments">
      <div id="segment-a" class="segment ${type}"></div>
      <div id="segment-b" class="segment"></div>
      <div id="segment-c" class="segment ${type}"></div>
      <div id="segment-d" class="segment ${type}"></div>
      <div id="segment-e" class="segment"></div>
      <div id="segment-f" class="segment ${type}"></div>
      <div id="segment-g" class="segment ${type}"></div>
      </div>`;
    } else if (data === "6") {
      return `<div data-testid="div_segments">
      <div id="segment-a" class="segment ${type}"></div>
      <div id="segment-b" class="segment"></div>
      <div id="segment-c" class="segment ${type}"></div>
      <div id="segment-d" class="segment ${type}"></div>
      <div id="segment-e" class="segment ${type}"></div>
      <div id="segment-f" class="segment ${type}"></div>
      <div id="segment-g" class="segment ${type}"></div>
      </div>`;
    } else if (data === "7") {
      return `<div data-testid="div_segments">
      <div id="segment-a" class="segment ${type}"></div>
      <div id="segment-b" class="segment ${type}"></div>
      <div id="segment-c" class="segment ${type}"></div>
      <div id="segment-d" class="segment"></div>
      <div id="segment-e" class="segment"></div>
      <div id="segment-f" class="segment"></div>
      <div id="segment-g" class="segment"></div>
      </div>`;
    } else if (data === "8") {
      return `<div data-testid="div_segments">
      <div id="segment-a" class="segment ${type}"></div>
      <div id="segment-b" class="segment ${type}"></div>
      <div id="segment-c" class="segment ${type}"></div>
      <div id="segment-d" class="segment ${type}"></div>
      <div id="segment-e" class="segment ${type}"></div>
      <div id="segment-f" class="segment ${type}"></div>
      <div id="segment-g" class="segment ${type}"></div>
      </div>`;
    } else if (data === "9") {
      return `<div data-testid="div_segments">
      <div id="segment-a" class="segment ${type}"></div>
      <div id="segment-b" class="segment ${type}"></div>
      <div id="segment-c" class="segment ${type}"></div>
      <div id="segment-d" class="segment"></div>
      <div id="segment-e" class="segment"></div>
      <div id="segment-f" class="segment ${type}"></div>
      <div id="segment-g" class="segment ${type}"></div>
      </div>`;
    } else if (data === "0") {
      return `<div data-testid="div_segments">
      <div id="segment-a" class="segment ${type}"></div>
      <div id="segment-b" class="segment ${type}"></div>
      <div id="segment-c" class="segment ${type}"></div>
      <div id="segment-d" class="segment ${type}"></div>
      <div id="segment-e" class="segment ${type}"></div>
      <div id="segment-f" class="segment ${type}"></div>
      <div id="segment-g" class="segment"></div>
      </div>`;
    }
  };

  for (let i = 0; i < dataStringfy.length; i++) {
    const div = document.getElementById("container_segments");
    div.innerHTML += handleIndentifyNumber(dataStringfy[i], type);
  }
};

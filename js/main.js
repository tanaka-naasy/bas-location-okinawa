import { getBusData } from "./busdata.js";
import { renderBusList } from "./render.js";
import { selectDisplayBuses } from "./busdata.js";

fetch("data/sample_bus.json")
  .then(res => res.json())
  .then(data => {
    const displayBuses = selectDisplayBuses(data.buses);
    renderBuses(displayBuses);
  });

async function init() {
  const busData = await getBusData();
  renderBusList(busData);
}

init();

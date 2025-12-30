import { getBusData } from "./busdata.js";
import { renderBusList } from "./render.js";

async function init() {
  const busData = await getBusData();
  renderBusList(busData);
}

init();

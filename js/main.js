import { selectDisplayBuses } from "./busdata.js";
import { renderBusList } from "./render.js";

async function init() {
  try {
    const res = await fetch("data/sample_bus.json");
    const json = await res.json();

    const displayBuses = selectDisplayBuses(json.buses);
    renderBusList(displayBuses);
  } catch (error) {
    console.error("初期化エラー:", error);
  }
}

init();

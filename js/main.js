async function init() {
  try {
    console.log("init start");

    const res = await fetch("data/sample_bus.json");
    const json = await res.json();
    console.log("json loaded", json);

    const displayBuses = selectDisplayBuses(json.buses);
    console.log("selected buses", displayBuses);

    renderBusList(displayBuses);
    console.log("render called");

  } catch (error) {
    console.error("初期化エラー:", error);
  }
}

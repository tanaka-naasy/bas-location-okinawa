export function renderBusList(busData) {
  const busListEl = document.getElementById("bus-list");

  if (!busData || !busData.buses || busData.buses.length === 0) {
    busListEl.textContent = "バス情報が取得できません。";
    return;
  }

  // 一旦クリア
  busListEl.innerHTML = "";

  busData.buses.forEach(bus => {
    const busItem = document.createElement("div");
    busItem.className = "bus-item";

    busItem.innerHTML = `
      <div class="route-name">
        ${bus.route_name}（${bus.direction}）
      </div>
      <div class="bus-section">
        ${bus.from_stop} → ${bus.to_stop}
      </div>
    `;

    busListEl.appendChild(busItem);
  });

  // 更新時刻表示
  const updatedTime = document.createElement("div");
  updatedTime.className = "updated-time";
  updatedTime.textContent = `更新：${formatUpdatedTime(busData.updated_at)}`;

  busListEl.appendChild(updatedTime);
}

// 更新時刻を「○分前」に変換
function formatUpdatedTime(updatedAt) {
  const updatedDate = new Date(updatedAt);
  const now = new Date();
  const diffMin = Math.floor((now - updatedDate) / 60000);

  if (diffMin <= 0) return "たった今";
  return `${diffMin}分前`;
}

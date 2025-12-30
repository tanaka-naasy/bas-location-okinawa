// buslogic.js

// 仮距離付与（後でGPSに置換）
export function addDummyDistance(buses) {
  return buses.map(bus => ({
    ...bus,
    distance: Math.random() * 1000
  }));
}

// 近い路線
export function getNearbyRoutes(buses, limit) {
  return [...buses]
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
}

// 主要路線
export function getMajorRoutes(buses, selected, limit) {
  return buses
    .filter(b => b.is_major)
    .filter(b => !selected.some(s => s.route_id === b.route_id))
    .slice(0, limit);
}

// お気に入り（仮）
function getFavoriteRouteIds() {
  return ["OKI_120"];
}

export function getFavoriteRoutes(buses, selected, limit) {
  const favorites = getFavoriteRouteIds();

  return buses
    .filter(b => favorites.includes(b.route_id))
    .filter(b => !selected.some(s => s.route_id === b.route_id))
    .slice(0, limit);
}

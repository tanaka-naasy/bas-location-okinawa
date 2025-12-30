// busdata.js
import {
  addDummyDistance,
  getNearbyRoutes,
  getMajorRoutes,
  getFavoriteRoutes
} from "./buslogic.js";

export const displayRule = {
  nearby: 5,
  major: 1,
  favorite: 1,
  max: 7
};

export function selectDisplayBuses(rawBuses) {
  const buses = addDummyDistance(rawBuses);
  const selected = [];

  selected.push(
    ...getNearbyRoutes(buses, displayRule.nearby)
  );

  selected.push(
    ...getMajorRoutes(buses, selected, displayRule.major)
  );

  selected.push(
    ...getFavoriteRoutes(buses, selected, displayRule.favorite)
  );

  if (selected.length < displayRule.max) {
    const rest = buses.filter(
      b => !selected.some(s => s.route_id === b.route_id)
    );
    selected.push(
      ...rest.slice(0, displayRule.max - selected.length)
    );
  }

  return selected.slice(0, displayRule.max);
}

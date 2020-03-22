const resultsKey = "test-station-results";

export function save(data) {
  localStorage.setItem(resultsKey, JSON.stringify(data));
}

export function restore() {
  let data = {};
  try {
    data = JSON.parse(localStorage.getItem(resultsKey)) || {};
  } catch {
    // no action - wrong JSON data, return {}
  }

  return data;
}

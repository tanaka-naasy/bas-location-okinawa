export async function getBusData() {
  try {
    const response = await fetch("data/sample_bus.json");

    if (!response.ok) {
      throw new Error("データ取得失敗");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
    return null;
  }
}

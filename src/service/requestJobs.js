export const requestJob = async () => {
  const response = await fetch("./data.json");
  const data = await response.json()
  return data;
}


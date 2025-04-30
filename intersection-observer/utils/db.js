export const fetchData = async (page = 1) => {
  const url = "/intersection-observer/utils/db.json";
  const response = await fetch(url)
    .then((response) => response.json())
    .then((data) => data);
  const startIndex = (page - 1) * 10;
  const endIndex = page * 10;
  return response.slice(startIndex, endIndex);
};

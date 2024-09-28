export const fetchServerData = async (url: any) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

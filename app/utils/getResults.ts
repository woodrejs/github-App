export const getResults = (
  arr: {
    checked: boolean;
    name: string;
    fetchData: () => Promise<void>;
  }[]
) => {
  for (const obj of arr) if (obj.checked) obj.fetchData();
};

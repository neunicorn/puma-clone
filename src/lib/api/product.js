export const getProduct = async () => {
  return await fetch("/data/product.json", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
};

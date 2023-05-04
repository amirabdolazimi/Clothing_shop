export const useSplitProducts = (products, category) => {
  return products.filter((p) => p.category === category);
};

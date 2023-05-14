// this customized Hook return products base on category
export const useSplitProducts = (products, category) => {
  return products?.filter((p) => p.category === category);
};

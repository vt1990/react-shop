import get from "lodash.get";

export default function generateProductNameFromAlias(product) {
  if (get(product, "name").length) {
    return product;
  }
  const { aliases = [] } = product;
  const name = aliases.join(" ");
  return {
    ...product,
    name
  };
}

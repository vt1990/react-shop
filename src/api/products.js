import compose from "../utils/compose";
import generateProductNameFromAlias from "../utils/generateProductNameFromAlias";
import setProductUrlById from "../utils/setProductUrlById";

const adaptProduct = compose(
    generateProductNameFromAlias,
    setProductUrlById
);

export function getProducts(options) {
  return fetch("https://yalantis-react-school.herokuapp.com/api/v1", options)
    .then(result => result.json())
    .then(results => results.map(adaptProduct))
    .catch(error => {
      console.log("Fetch of products failed:", error);
    });
}

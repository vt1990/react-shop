import getUrlId from "./getUrlId";
import { routes } from "../constants/routes";

export default function setProductUrlById(entity) {
  const id = getUrlId(entity.url);
  const { products } = routes;
  return {
    ...entity,
    url: products.getProductUrl(id),
    id
  };
}

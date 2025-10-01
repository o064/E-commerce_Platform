import type { Category } from "../types";
import Button from "./Button";

type  collectionItemProps ={
  category : Category;
  description : string;
}
export function CollectionItem({  description , category}: collectionItemProps) {
  return (
    <li>
      <h2>{category} shoes collection</h2>
      <p>{description}</p>
      <Button>
        shop {category}
      </Button>
    </li>
  )
}
export default CollectionItem
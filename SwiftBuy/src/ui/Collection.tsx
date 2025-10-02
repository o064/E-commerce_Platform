import CollectionItem from "./CollectionItem";

const collectionCategories = [
  {
    id: "1",
    category: "men",
    description: "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.",
  },
  {
    id: "2",
    category: "women",
    description: "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.",
  },
  {
    id: "3",
    category: "kids",
    description: "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.",
  }
] as const;
function Collection() {
  return (
    <section>
    <ul>
      {collectionCategories.map(({ id, category, description }) => <CollectionItem category={category} description={description} key={id} />
      )}
    </ul>
    </section>
  );
}
export default Collection

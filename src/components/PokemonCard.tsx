import styles from "./PokemonCard.module.css";

type PokemonCardProps = {
  pokemon: { name: string; imgSrc?: string };
};

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <figure className={styles.pokemonCard}>
      {pokemon.imgSrc !== undefined ? (
        <img className={styles.image} src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;

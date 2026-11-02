import styles from "./PokemonCard.module.css";

type Pokemon = {
  name: string;
  imgSrc?: string;
};
type NavBarProps = {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
};

function NavBar({ pokemonList, setPokemonName }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((onePokemonFromTheList) => (
        <button
          className={styles.button}
          key={onePokemonFromTheList.name}
          type="button"
          onClick={() => setPokemonName(onePokemonFromTheList.name)}
        >
          {onePokemonFromTheList.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;

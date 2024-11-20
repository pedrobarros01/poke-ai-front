import PokemonInBattle from "@/components/PokemonInBattle";

export default function Home() {
  const Pikachu = {
    nome: "Pikachu",
    vida: 19,
    type1: "Electric",
    type2: "None",
    imageUrl: "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
    moveset: [
      { name: "Thunderbolt", type: "Electric", damage: 40 },
      { name: "Quick Attack", type: "Normal", damage: 30 },
      { name: "Iron Tail", type: "Steel", damage: 50 },
      { name: "Electro Ball", type: "Electric", damage: 60 },
    ],
  };

  const Chimchar = {
    nome: "Chimchar",
    vida: 73,
    type1: "Fire",
    type2: "Fighting",
    imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/390.png",
    moveset: [
      { name: "Flamethrower", type: "Fire", damage: 40 },
      { name: "Mach Punch", type: "Fighting", damage: 30 },
      { name: "Scratch", type: "Normal", damage: 20 },
      { name: "Fire Spin", type: "Fire", damage: 50 },
    ],
  };

  return (
    <div className="flex flex-col xl:flex-row items-center justify-evenly min-h-full bg-white">
      <PokemonInBattle pokemon={Pikachu} />
      <PokemonInBattle pokemon={Chimchar} />
    </div>
  );
}

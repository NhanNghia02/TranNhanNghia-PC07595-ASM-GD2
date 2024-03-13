//Bài 1
let isCheck: boolean;
let role: number = 1;
let msg: string;

if (role === 1) {
  isCheck = true;
  msg = "Bạn là admin.";
  console.log(msg);
} else {
  isCheck = false;
  msg = "Bạn không phải là admin.";
  console.log(msg);
}

//Bài 2
interface Person {
  id: number;
  name: string;
  address: string;
  birthday: Date;
  phone: string;
}

let person: Person = {
  id: 1,
  name: "Trần Nhân Nghĩa",
  address: "Vĩnh Long",
  birthday: new Date("2002-07-20"),
  phone: "033-8433-630",
};
console.log(person);

//Bài 3
interface Pokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  const pokemons: Pokemon[] = data.results.map(
    (result: any, index: number) => ({
      id: index + 1,
      name: result.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
      type: "unknown",
    })
  );
  return pokemons;
}

async function shufflePokemons(): Promise<void> {
  const pokemons = await fetchPokemons();
  const shuffledPokemons = shuffle(pokemons);
  displayPokemons(shuffledPokemons);
}

function shuffle(array: any[]): any[] {
  return array.sort(() => Math.random() - 0.5);
}

//Get dữ liệu
function displayPokemons(pokemons: Pokemon[]): void {
  const container = document.getElementById("pokemon-container");
  if (container) {
    container.innerHTML = "";
    pokemons.forEach((pokemon) => {
      const pokemonElement = document.createElement("div");
      pokemonElement.classList.add("pokemon");
      pokemonElement.innerHTML = `
            <div class="container" id="pokemon-container">
                <div class="row justify-content-center">
                  <div class="col-md-8">
                    <div class="row">
                    <div class="col-lg-2 col-md-3 col-sm-4 mb-4">
                      <div class="pokemon-card" onclick="handleCardClick(this)">
                          <img src="${pokemon.image}" alt="${pokemon.name}">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
      container.appendChild(pokemonElement);
      console.log(pokemonElement);
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  shufflePokemons();
});

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

// Bài 2
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

// Xáo trộn hình ảnh
interface Pokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await response.json();

  // Lấy ra danh sách các Pokemon từ dữ liệu nhận được
  const pokemonList = data.results.map((result: any, index: number) => ({
    id: index + 1,
    name: result.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`,
    type: "unknown",
  }));

  // Tạo mảng mới chứa mỗi Pokemon hai lần
  const pokemons: Pokemon[] = [];
  for (const pokemon of pokemonList) {
    pokemons.push(pokemon, { ...pokemon });
  }
  return pokemons;
}

async function shufflePokemons(): Promise<void> {
  const pokemons = await fetchPokemons();
  const shuffledPokemons = shuffle(pokemons);
  const randomPokemons = shuffledPokemons.slice(0, 20); // Hiển thị 20 con pokemon
  displayPokemons(randomPokemons);
}

function shuffle<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

// Get dữ liệu
function displayPokemons(pokemons: Pokemon[]): void {
  const container = document.getElementById("pokemon-container");
  if (container) {
    container.innerHTML = "";
    pokemons.forEach((pokemon) => {
      const pokemonElement = document.createElement("div");
      pokemonElement.classList.add("pokemon");
      pokemonElement.innerHTML = `
          <div class="pokemon-card" data-id="${pokemon.id}">
            <img src="${pokemon.image}" alt="${pokemon.name}">
          </div>
        `;
      container.appendChild(pokemonElement);
      console.log(pokemonElement);
      pokemonElement.addEventListener("click", () =>
        handlePokemonClick(pokemonElement, pokemon.id)
      );
    });
  }
}

// Xữ lý matched và unmatched
let selectedPokemonElement: HTMLDivElement | null = null;
let selectedPokemonId: number | null = null;

function handlePokemonClick(element: HTMLDivElement, id: number): void {
  if (selectedPokemonId === null) {
    selectedPokemonId = id;
    selectedPokemonElement = element;
    selectedPokemonElement.classList.add("selected");
  } else {
    if (selectedPokemonId === id && selectedPokemonElement !== element) {
      console.log("Chọn đúng hình!");
      element.classList.add("selected");
      element.classList.add("matched"); // Tương tác matched
      selectedPokemonElement?.classList.add("matched");
      selectedPokemonId = null;
      selectedPokemonElement = null;

      } else {
        console.log("Chọn sai hình!");
        element.classList.add("wrong");
        setTimeout(() => {
          element.classList.remove("wrong");
          selectedPokemonElement?.classList.remove("selected");
          selectedPokemonId = null;
          selectedPokemonElement = null;
        }, 1000);
      }
    }
  }

window.addEventListener("DOMContentLoaded", () => {
  shufflePokemons();
});

// Nhận dữ liệu người dùng, bắt lỗi, hủy, load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm") as HTMLFormElement;
  const cancelButton = document.getElementById(
    "cancelButton"
  ) as HTMLFormElement;
  const reloadLink = document.getElementById("reloadLink") as HTMLFormElement;

  form.addEventListener("submit", handleSubmit);
  cancelButton.addEventListener("click", handleCancel);
  reloadLink.addEventListener("click", handleReload);

  function handleSubmit(event: Event) {
    event.preventDefault();
    const usernameInput = document.getElementById(
      "username"
    ) as HTMLInputElement;
    const username = usernameInput.value.trim();

    if (username.length === 0) {
      displayErrorMessage("Tên người dùng không được để trống.");
      return;
    } else if (/[^a-zA-Z0-9]/.test(username)) {
      displayErrorMessage("Tên người dùng không được chứa ký tự đặc biệt.");
      return;
    } else if (username.length === 1) {
      displayErrorMessage("Tên người dùng không được chỉ chứa một ký tự.");
      return;
    }

    displayErrorMessage(username);
    displayUsername(username);
  }

  //Xữ lý hiển thị
  function displayUsername(username: string) {
    const usernameDisplay = document.getElementById("usernameDisplay");
    if (usernameDisplay) {
      usernameDisplay.innerText = `Xin chào, ${username} welcome to the Pikachu game !!!`;
    }
  }

  function displayErrorMessage(message: string) {
    var errorMessage = document.getElementById("errorMessage");
    if (errorMessage) {
      errorMessage.innerText = message;
    }
  }

  // Thoát ra index
  function handleCancel() {
    window.location.href = "index.html";
  }

  // Loading lại dữ liệu
  function handleReload() {
    window.location.reload();
  }
});

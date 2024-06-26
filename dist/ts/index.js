"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//Bài 1
var isCheck;
var role = 1;
var msg;
if (role === 1) {
    isCheck = true;
    msg = "Bạn là admin.";
    console.log(msg);
}
else {
    isCheck = false;
    msg = "Bạn không phải là admin.";
    console.log(msg);
}
var person = {
    id: 1,
    name: "Trần Nhân Nghĩa",
    address: "Vĩnh Long",
    birthday: new Date("2002-07-20"),
    phone: "033-8433-630",
};
console.log(person);
function fetchPokemons() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, pokemonList, pokemons, _i, pokemonList_1, pokemon;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon?limit=10")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    pokemonList = data.results.map(function (result, index) { return ({
                        id: index + 1,
                        name: result.name,
                        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(index + 1, ".png"),
                        type: "unknown",
                    }); });
                    pokemons = [];
                    for (_i = 0, pokemonList_1 = pokemonList; _i < pokemonList_1.length; _i++) {
                        pokemon = pokemonList_1[_i];
                        pokemons.push(pokemon, __assign({}, pokemon));
                    }
                    return [2 /*return*/, pokemons];
            }
        });
    });
}
function shufflePokemons() {
    return __awaiter(this, void 0, void 0, function () {
        var pokemons, shuffledPokemons, randomPokemons;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchPokemons()];
                case 1:
                    pokemons = _a.sent();
                    shuffledPokemons = shuffle(pokemons);
                    randomPokemons = shuffledPokemons.slice(0, 20);
                    displayPokemons(randomPokemons);
                    return [2 /*return*/];
            }
        });
    });
}
function shuffle(array) {
    return array.sort(function () { return Math.random() - 0.5; });
}
// Get dữ liệu
function displayPokemons(pokemons) {
    var container = document.getElementById("pokemon-container");
    if (container) {
        container.innerHTML = "";
        pokemons.forEach(function (pokemon) {
            var pokemonElement = document.createElement("div");
            pokemonElement.classList.add("pokemon");
            pokemonElement.innerHTML = "\n          <div class=\"pokemon-card\" data-id=\"".concat(pokemon.id, "\">\n            <img src=\"").concat(pokemon.image, "\" alt=\"").concat(pokemon.name, "\">\n          </div>\n        ");
            container.appendChild(pokemonElement);
            console.log(pokemonElement);
            pokemonElement.addEventListener("click", function () {
                return handlePokemonClick(pokemonElement, pokemon.id);
            });
        });
    }
}
// Xữ lý matched và unmatched
var selectedPokemonElement = null;
var selectedPokemonId = null;
function handlePokemonClick(element, id) {
    if (selectedPokemonId === null) {
        selectedPokemonId = id;
        selectedPokemonElement = element;
        selectedPokemonElement.classList.add("selected");
    }
    else {
        if (selectedPokemonId === id && selectedPokemonElement !== element) {
            console.log("Chọn đúng hình!");
            element.classList.add("selected");
            element.classList.add("matched"); // Tương tác matched
            selectedPokemonElement === null || selectedPokemonElement === void 0 ? void 0 : selectedPokemonElement.classList.add("matched");
            selectedPokemonId = null;
            selectedPokemonElement = null;
        }
        else {
            console.log("Chọn sai hình!");
            element.classList.add("wrong");
            setTimeout(function () {
                element.classList.remove("wrong");
                selectedPokemonElement === null || selectedPokemonElement === void 0 ? void 0 : selectedPokemonElement.classList.remove("selected");
                selectedPokemonId = null;
                selectedPokemonElement = null;
            }, 1000);
        }
    }
}
window.addEventListener("DOMContentLoaded", function () {
    shufflePokemons();
});
// Nhận dữ liệu người dùng, bắt lỗi, hủy, load
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("myForm");
    var cancelButton = document.getElementById("cancelButton");
    var reloadLink = document.getElementById("reloadLink");
    form.addEventListener("submit", handleSubmit);
    cancelButton.addEventListener("click", handleCancel);
    reloadLink.addEventListener("click", handleReload);
    function handleSubmit(event) {
        event.preventDefault();
        var usernameInput = document.getElementById("username");
        var username = usernameInput.value.trim();
        if (username.length === 0) {
            displayErrorMessage("Tên người dùng không được để trống.");
            return;
        }
        else if (/[^a-zA-Z0-9]/.test(username)) {
            displayErrorMessage("Tên người dùng không được chứa ký tự đặc biệt.");
            return;
        }
        else if (username.length === 1) {
            displayErrorMessage("Tên người dùng không được chỉ chứa một ký tự.");
            return;
        }
        displayErrorMessage(username);
        displayUsername(username);
    }
    //Xữ lý hiển thị
    function displayUsername(username) {
        var usernameDisplay = document.getElementById("usernameDisplay");
        if (usernameDisplay) {
            usernameDisplay.innerText = "Xin ch\u00E0o, ".concat(username, " welcome to the Pikachu game !!!");
        }
    }
    function displayErrorMessage(message) {
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

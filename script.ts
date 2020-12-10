type nameofanimal = "CAT" | "DOG" | "PARROT" | "RABBIT" | "TURTLE";
type charectersticsofanimal = "LOYAL" | "CUNNING" | "SWIMMING";
type statusforadoption = "AVAILABLE" | "NOTAVAILABLE";
class animal {
  name: nameofanimal;
  age: number;
  charecterstics: charectersticsofanimal;
  status: statusforadoption;
  constructor(
    nameof: nameofanimal,
    ageof: number,
    charectersticsof: charectersticsofanimal,
    statusof: statusforadoption
  ) {
    this.name = nameof;
    this.age = ageof;
    this.charecterstics = charectersticsof;
    this.status = statusof;
  }
}
let cat1 = new animal("CAT", 2, "CUNNING", "AVAILABLE");
let cat2 = new animal("CAT", 3, "CUNNING", "NOTAVAILABLE");
let cat3 = new animal("CAT", 1, "CUNNING", "AVAILABLE");
let dog1 = new animal("DOG", 1, "LOYAL", "AVAILABLE");
let dog2 = new animal("DOG", 2, "LOYAL", "NOTAVAILABLE");
let dog3 = new animal("DOG", 0.5, "LOYAL", "AVAILABLE");
let dog4 = new animal("DOG", 1.5, "LOYAL", "AVAILABLE");
let parrot1 = new animal("PARROT", 2, "LOYAL", "AVAILABLE");
let turtle1 = new animal("TURTLE", 1, "SWIMMING", "AVAILABLE");
let arrayofanimals = [];
arrayofanimals.push(cat1, cat2, cat3, dog1, dog2, dog3, dog4, parrot1, turtle1);
let animalsforadoption = [];
let animalsasperenquiry = [];
class requirement {
  listofanimalsforadoption(petadoption) {
    for (let i = 0; i < petadoption.length; i++) {
      if (petadoption[i].status == "AVAILABLE") {
        animalsforadoption.push(petadoption[i]);
      }
    }

    return animalsforadoption;
  }
  list(arrayofanimals) {
    console.log(arrayofanimals);
  }
  getPetsCount(
    petsinthestore
  ): {
    dogs: number;
    cats: number;
    parrots: number;
    turtle: number;
    others: number;
  } {
    let animalCount = { dogs: 0, cats: 0, parrots: 0, turtle: 0, others: 0 };
    petsinthestore.forEach((animal) => {
      switch (animal.name) {
        case "DOG": {
          animalCount.dogs++;
          break;
        }
        case "CAT": {
          animalCount.cats++;
          break;
        }
        case "PARROT": {
          animalCount.parrots++;
          break;
        }
        case "TURTLE": {
          animalCount.turtle++;
          break;
        }
        default: {
          animalCount.others++;
          break;
        }
      }
    });

    return animalCount;
  }
  request(petsyouwant) {
    for (let i = 0; i < animalsforadoption.length; i++) {
      for (let j = 0; j < petsyouwant.length; j++) {
        if (animalsforadoption[i].name == petsyouwant[j]) {
          animalsasperenquiry.push(animalsforadoption[i]);
        }
      }
    }
    return animalsasperenquiry;
  }
}
let myenquirey = new requirement();
console.log(
  "The Count Of Pets in the store",
  myenquirey.getPetsCount(arrayofanimals)
);
console.log(
  "The List Of Pets available for adoption",
  myenquirey.listofanimalsforadoption(arrayofanimals)
);
console.log(
  "The Count Of Pets in ths store available for adoption",
  myenquirey.getPetsCount(animalsforadoption)
);
console.log(
  "The List Of Pets as per your enquiry",
  myenquirey.request(["DOG", "PARROT", "rat"])
);
console.log(
  "The Count Of Pets as per enquiry",
  myenquirey.getPetsCount(animalsasperenquiry)
);

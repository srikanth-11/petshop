var animal = /** @class */ (function () {
    function animal(nameof, ageof, charectersticsof, statusof) {
        this.name = nameof;
        this.age = ageof;
        this.charecterstics = charectersticsof;
        this.status = statusof;
    }
    return animal;
}());
var cat1 = new animal("CAT", 2, "CUNNING", "AVAILABLE");
var cat2 = new animal("CAT", 3, "CUNNING", "NOTAVAILABLE");
var cat3 = new animal("CAT", 1, "CUNNING", "AVAILABLE");
var dog1 = new animal("DOG", 1, "LOYAL", "AVAILABLE");
var dog2 = new animal("DOG", 2, "LOYAL", "NOTAVAILABLE");
var dog3 = new animal("DOG", 0.5, "LOYAL", "AVAILABLE");
var dog4 = new animal("DOG", 1.5, "LOYAL", "AVAILABLE");
var parrot1 = new animal("PARROT", 2, "LOYAL", "AVAILABLE");
var turtle1 = new animal("TURTLE", 1, "SWIMMING", "AVAILABLE");
var arrayofanimals = [];
arrayofanimals.push(cat1, cat2, cat3, dog1, dog2, dog3, dog4, parrot1, turtle1);
var animalsforadoption = [];
var animalsasperenquiry = [];
var requirement = /** @class */ (function () {
    function requirement() {
    }
    requirement.prototype.listofanimalsforadoption = function (petadoption) {
        for (var i = 0; i < petadoption.length; i++) {
            if (petadoption[i].status == "AVAILABLE") {
                animalsforadoption.push(petadoption[i]);
            }
        }
        return animalsforadoption;
    };
    requirement.prototype.list = function (arrayofanimals) {
        console.log(arrayofanimals);
    };
    requirement.prototype.getPetsCount = function (petsinthestore) {
        var animalCount = { dogs: 0, cats: 0, parrots: 0, turtle: 0, others: 0 };
        petsinthestore.forEach(function (animal) {
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
    };
    requirement.prototype.request = function (petsyouwant) {
        for (var i = 0; i < animalsforadoption.length; i++) {
            for (var j = 0; j < petsyouwant.length; j++) {
                if (animalsforadoption[i].name == petsyouwant[j]) {
                    animalsasperenquiry.push(animalsforadoption[i]);
                }
            }
        }
        return animalsasperenquiry;
    };
    return requirement;
}());
var myenquirey = new requirement();
console.log("The Count Of Pets in the store", myenquirey.getPetsCount(arrayofanimals));
console.log("The List Of Pets available for adoption", myenquirey.listofanimalsforadoption(arrayofanimals));
console.log("The Count Of Pets in ths store available for adoption", myenquirey.getPetsCount(animalsforadoption));
console.log("The List Of Pets as per your enquiry", myenquirey.request(["DOG", "PARROT", "rat"]));
console.log("The Count Of Pets as per enquiry", myenquirey.getPetsCount(animalsasperenquiry));

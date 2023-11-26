const dtoIn = {
    count: 50,
    age: {
        min: 19,
        max: 35
    }
};

// Seznam mužských jmen
const maleNames = [
    "Petr",
    "Jan",
    "Tomáš",
    "Martin",
    "Michal",
    "Jiří",
    "David",
    "Lukáš",
    "Jakub",
    "Pavel",
    "Filip",
    "Ondřej",
    "Marek",
    "Adam",
    "Matěj",
    "Martin",
    "Jiří",
    "Jan",
    "Petr",
    "Daniel",
    "Josef",
    "Václav",
    "Karel",
    "Jan",
    "Alexander",
    "Gabriel",
    "Iva",
    "Tadeáš",
    "Viktor",
    "Adrian",
    "Radek",
    "Michael",
    "Dominik",
    "Patrik",
    "Radek",
    "Ladislav",
    "Zdeněk",
    "Miroslav",
    "Roman",
    "Tadeáš",
    "Vojtěch",
    "Štěpán",
    "Richard",
    "Jaroslav",
    "Vlastimil",
    "Vít",
    "Radim",
    "Kamil",
    "Oliver"
];


// Seznam ženských jmen
const femaleNames = [
    "Anna",
    "Eva",
    "Lucie",
    "Kateřina",
    "Veronika",
    "Karolína",
    "Markéta",
    "Tereza",
    "Barbora",
    "Zuzana",
    "Adéla",
    "Natálie",
    "Kristýna",
    "Simona",
    "Marie",
    "Lenka",
    "Alžběta",
    "Nela",
    "Sára",
    "Gabriela",
    "Iva",
    "Anna",
    "Viktoria",
    "Adriana",
    "Radka",
    "Jitka",
    "Michaela",
    "Dominika",
    "Petra",
    "Martina",
    "Monika",
    "Nikola",
    "Natalie",
    "Linda",
    "Denisa",
    "Ivana",
    "Klára",
    "Šárka",
    "Pavla",
    "Aneta",
    "Hana",
    "Helena",
    "Jana",
    "Olga",
    "Věra",
    "Vendula",
    "Romana"
];


// Seznam příjmení
const surnames = [
    "Novák",
    "Svoboda",
    "Novotný",
    "Dvořák",
    "Černý",
    "Procházka",
    "Kučera",
    "Veselý",
    "Horák",
    "Němec",
    "Marek",
    "Pokorný",
    "Král",
    "Jelínek",
    "Šimek",
    "Bartoš",
    "Liška",
    "Štěpánek",
    "Kříž",
    "Růžička",
    "Bílý",
    "Kovář",
    "Matějka",
    "Pavlík",
    "Urban",
    "Konečný",
    "Hájek",
    "Pospíšil",
    "Vlček",
    "Kolář",
    "Fučík",
    "Říha",
    "Švec",
    "Holub",
    "Adam",
    "Bureš",
    "Vaněk",
    "Toman",
    "Sýkora",
    "Beran",
    "Hruška",
    "Kotas",
    "Němcová",
    "Kadlecová",
    "Kučerová",
    "Nováková",
    "Dvořáková",
    "Svobodová",
    "Havlíček",
    "Kuchař",
    "Mach",
    "Čermák"
];


// Seznam pohlaví
const genders = ['male', 'female'];

// Seznam úvazků
const workload = [10, 20, 30, 40];

// Funkce pro získání náhodného prvku z pole
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

// Hlavní funkce pro generování zaměstnanců
const main = (dtoIn) => {
    const { count, age } = dtoIn;
    const { min: minAge, max: maxAge } = age;

    // Funkce pro generování náhodného data
    const getRandomDate = (minAge, maxAge) => {
        const presentDate = new Date();
        const minBirthDate = new Date(
            presentDate.getFullYear() - maxAge - 1,
            presentDate.getMonth(),
            presentDate.getDate() + 1,
            0, 0, 0, 0
        );
        const maxBirthDate = new Date(
            presentDate.getFullYear() - minAge,
            presentDate.getMonth(),
            presentDate.getDate(),
            0, 0, 0, 0
        );
        const randomBirthDate =
            minBirthDate.getTime() +
            Math.random() * (maxBirthDate.getTime() - minBirthDate.getTime());
        const birthDate = new Date(randomBirthDate);
        return birthDate;
    };

    // Pole pro uchování výsledků generování zaměstnanců
    const dtoOut = [];

    // Generování zaměstnanců
    for (let i = 0; i < count; i++) {
        // Náhodné rozhodnutí o pohlaví
        const isMale = getRandomElement(genders) === 'male';

        // Náhodné vybrání jména a příjmení podle pohlaví
        const randomName = isMale
            ? getRandomElement(maleNames)
            : getRandomElement(femaleNames);
        const randomSurname = getRandomElement(surnames);

        // Přidání zaměstnance do výsledného pole
        dtoOut.push({
            gender: isMale ? 'male' : 'female',
            birthdate: getRandomDate(minAge, maxAge),
            name: randomName,
            surname: randomSurname,
            workload: getRandomElement(workload),
        });
    }

    // Vrácení výsledku
    return { employees: dtoOut };
};

// Zavolání funkce main s vstupními daty a výpis výsledku na konzoli
console.log(main(dtoIn));

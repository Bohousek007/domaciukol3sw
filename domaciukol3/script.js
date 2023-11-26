const dtoIn = {
    count: 50,
    age: {
        min: 19,
        max: 35
    }
};

// pohlaví
const genders = ['male', 'female'];

// úvazky
const workload = [10, 20, 30, 40];

// jména
const names = [
    "Anna",
    "Petr",
    "Eva",
    "Jan",
    "Lucie",
    "Tomáš",
    "Kateřina",
    "Martin",
    "Veronika",
    "Michal",
    "Karolína",
    "Jiří",
    "Markéta",
    "David",
    "Tereza",
    "Lukáš",
    "Barbora",
    "Jakub",
    "Zuzana",
    "Pavel",
    "Adéla",
    "Filip",
    "Natálie",
    "Ondřej",
    "Kristýna",
    "Marek",
    "Simona",
    "Adam",
    "Marie",
    "Matěj",
    "Lenka",
    "Martin",
    "Alžběta",
    "Jiří",
    "Nela",
    "Jan",
    "Sára",
    "Petr",
    "Gabriela",
    "Daniel",
    "Iva",
    "Josef",
    "Anna",
    "Václav",
    "Viktoria",
    "Karel",
    "Adriana",
    "Jana",
    "Radek"
  ];

  // příjmení
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
    "Svobodová"
  ];
  


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

const main = (dtoIn) => {
    const { count, age } = dtoIn;
    const { min: minAge, max: maxAge } = age;

    const dtoOut = [];

    for (let i = 0; i < count; i++) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];

        dtoOut.push({
            gender: genders[Math.floor(Math.random() * genders.length)],
            birthdate: getRandomDate(minAge, maxAge),
            name: randomName,
            surname: randomSurname,
            workload: workload[Math.floor(Math.random() * workload.length)],
        });
    }

    return { employees: dtoOut };
};

// console.log("hello from app.js");

/*
console.error("esto es un error");
console.warn("esto es un mensaje de advertencia");

const persons = [
  { firstName: "Wait", lastName: "Wims", phone: "430-460-5690" },
  { firstName: "Ryley", lastName: "Hawarden", phone: "776-634-6301" },
  { firstName: "Umberto", lastName: "Fenne", phone: "187-441-9840" },
  { firstName: "Vick", lastName: "Meineck", phone: "960-940-0021" },
  { firstName: "Nobie", lastName: "Meco", phone: "695-356-9078" },
  { firstName: "Jay", lastName: "Axtens", phone: "373-783-3057" },
  { firstName: "Tristam", lastName: "Velte", phone: "389-639-7308" },
  { firstName: "Isac", lastName: "Sneezem", phone: "611-776-4474" },
  { firstName: "Ivan", lastName: "Milan", phone: "482-118-4074" },
  { firstName: "Dorian", lastName: "Oselton", phone: "280-702-0658" },
  { firstName: "Galven", lastName: "Seawell", phone: "883-896-6329" },
  { firstName: "Bertrand", lastName: "Garey", phone: "485-950-4000" },
  { firstName: "Terence", lastName: "Willcock", phone: "635-311-0409" },
  { firstName: "Hammad", lastName: "Bernardotti", phone: "209-792-3674" },
  { firstName: "Rikki", lastName: "Paulich", phone: "209-693-1979" },
  { firstName: "Hodge", lastName: "Shadfourth", phone: "383-913-0881" },
  { firstName: "Isacco", lastName: "Blythe", phone: "160-927-8376" },
  { firstName: "Colin", lastName: "Haresign", phone: "637-674-1666" },
  { firstName: "Eberhard", lastName: "Bascombe", phone: "495-350-3240" },
  { firstName: "Jeramey", lastName: "Bulpitt", phone: "126-285-9460" },
  { firstName: "Quincey", lastName: "Larcombe", phone: "874-441-4422" },
  { firstName: "Thain", lastName: "Lacky", phone: "137-404-3689" },
  { firstName: "Bartlett", lastName: "Edgeller", phone: "413-260-2729" },
  { firstName: "Jonah", lastName: "Spada", phone: "817-161-2435" },
  { firstName: "Paton", lastName: "Sowerby", phone: "429-791-0586" },
  { firstName: "Gordan", lastName: "Hacard", phone: "848-716-9839" },
  { firstName: "Oswell", lastName: "Caskey", phone: "973-425-7052" },
  { firstName: "Hamilton", lastName: "Clayworth", phone: "327-430-2799" },
  { firstName: "Ximenez", lastName: "Ritmeier", phone: "118-510-2584" },
  { firstName: "Bastian", lastName: "Garrand", phone: "994-942-6346" },
  { firstName: "Nicolas", lastName: "Eilhart", phone: "264-730-5544" },
  { firstName: "Crawford", lastName: "Waller-Bridge", phone: "854-553-9447" },
  { firstName: "Joel", lastName: "Camplen", phone: "171-845-4759" },
  { firstName: "Trip", lastName: "Mineghelli", phone: "492-230-8055" },
  { firstName: "Ky", lastName: "Weir", phone: "107-917-1160" },
  { firstName: "Vaughn", lastName: "Bartelli", phone: "704-140-4365" },
  { firstName: "Kearney", lastName: "Olfert", phone: "509-968-8570" },
  { firstName: "Kimble", lastName: "Spinnace", phone: "212-840-4746" },
  { firstName: "Sergeant", lastName: "Esselen", phone: "163-403-9569" },
  { firstName: "Maxim", lastName: "Ferenc", phone: "201-126-9251" },
  { firstName: "Guy", lastName: "Di Biagio", phone: "465-950-9108" },
  { firstName: "Salvatore", lastName: "Riddick", phone: "890-383-9570" },
  { firstName: "Rochester", lastName: "Farres", phone: "994-561-1629" },
  { firstName: "Paddy", lastName: "Wimpress", phone: "604-283-8947" },
  { firstName: "Demetri", lastName: "Edis", phone: "764-387-0135" },
  { firstName: "Bevon", lastName: "Cressingham", phone: "454-335-4545" },
  { firstName: "Torrey", lastName: "Pabelik", phone: "444-746-8438" },
  { firstName: "Shay", lastName: "Hearsey", phone: "667-765-6519" },
  { firstName: "Gaspard", lastName: "Spoure", phone: "758-375-3925" },
  { firstName: "Cornall", lastName: "Pegler", phone: "145-716-1951" },
  { firstName: "Artie", lastName: "Carine", phone: "847-995-1304" },
  { firstName: "Basilio", lastName: "Purle", phone: "433-575-3898" },
  { firstName: "Garwood", lastName: "Roper", phone: "638-674-1824" },
  { firstName: "West", lastName: "Beaulieu", phone: "168-625-1788" },
  { firstName: "Donall", lastName: "Loving", phone: "222-516-6537" },
  { firstName: "Andrea", lastName: "Spira", phone: "247-959-6855" },
  { firstName: "Jeremiah", lastName: "Goodhay", phone: "399-238-8655" },
  { firstName: "Tucker", lastName: "Cowely", phone: "706-869-8877" },
  { firstName: "Hilarius", lastName: "Rosini", phone: "586-647-8635" },
  { firstName: "Ermanno", lastName: "Nutter", phone: "473-863-8019" },
  { firstName: "Chalmers", lastName: "Kibard", phone: "295-874-1494" },
  { firstName: "Gunner", lastName: "Steffens", phone: "255-119-2653" },
  { firstName: "Tristam", lastName: "Hovert", phone: "174-708-5682" },
  { firstName: "Billie", lastName: "Loughnan", phone: "531-333-0262" },
  { firstName: "Curtice", lastName: "Manktelow", phone: "418-882-3759" },
  { firstName: "Scott", lastName: "Keunemann", phone: "698-814-5938" },
  { firstName: "Lloyd", lastName: "Darville", phone: "655-691-5731" },
  { firstName: "Garrard", lastName: "Flagg", phone: "599-271-0897" },
  { firstName: "Xerxes", lastName: "Christie", phone: "284-538-6554" },
  { firstName: "Dicky", lastName: "Bruckent", phone: "350-867-3403" },
  { firstName: "Minor", lastName: "Senecaux", phone: "409-607-4442" },
  { firstName: "Matias", lastName: "Spelman", phone: "479-469-2740" },
  { firstName: "Bastian", lastName: "Airton", phone: "169-693-1431" },
  { firstName: "Lambert", lastName: "Common", phone: "730-612-0592" },
  { firstName: "Heall", lastName: "Lamswood", phone: "290-805-8250" },
  { firstName: "Gallagher", lastName: "Carreyette", phone: "726-304-0743" },
  { firstName: "Warren", lastName: "Erricker", phone: "458-942-8683" },
  { firstName: "Randolf", lastName: "Schach", phone: "829-313-1497" },
  { firstName: "Kearney", lastName: "Mila", phone: "855-353-0675" },
  { firstName: "Dick", lastName: "Sever", phone: "501-352-7306" },
  { firstName: "Aymer", lastName: "Arlidge", phone: "862-995-1912" },
  { firstName: "Eugenius", lastName: "Corss", phone: "708-209-2431" },
  { firstName: "Mischa", lastName: "Shuttlewood", phone: "568-928-6430" },
  { firstName: "Vernon", lastName: "Jacobsson", phone: "460-520-1937" },
  { firstName: "Bronnie", lastName: "Bordman", phone: "738-712-5465" },
  { firstName: "Ferris", lastName: "Torel", phone: "621-385-3359" },
  { firstName: "Emelen", lastName: "Devas", phone: "673-726-6760" },
  { firstName: "Rutger", lastName: "Tart", phone: "394-357-4592" },
  { firstName: "Christy", lastName: "Abernethy", phone: "463-481-8680" },
  { firstName: "Giovanni", lastName: "Muldowney", phone: "819-572-8637" },
  { firstName: "Ennis", lastName: "Nutbean", phone: "477-750-9164" },
  { firstName: "Casey", lastName: "Millea", phone: "754-300-8584" },
  { firstName: "Eddy", lastName: "Szimoni", phone: "836-575-2331" },
  { firstName: "Giacobo", lastName: "Greenhill", phone: "472-240-2713" },
  { firstName: "Kristo", lastName: "Demsey", phone: "543-846-1416" },
  { firstName: "Archer", lastName: "Huckabe", phone: "318-391-2885" },
  { firstName: "Alex", lastName: "Snaden", phone: "985-259-7866" },
  { firstName: "Jarad", lastName: "Smethurst", phone: "623-295-5562" },
  { firstName: "Frasier", lastName: "Pleming", phone: "796-424-9230" },
  { firstName: "Parke", lastName: "Loder", phone: "513-310-9064" },
];

console.table(persons);
*/

// forma 1. variables
var firstName = "rafael"; // variables - scope super global - muy mala práctica
let lastName = "osorio"; // variable - scope local
const age = 17; // valor no cambia - scope global

/*
function printFullName() {
  let lastName = "aristizabal";
  console.log(lastName); // aristizabal
}
printFullName();
console.log(lastName); // osorio
*/

// concatenación: unir dos o más datos

// forma 1. (+)
const fullName = firstName + " " + lastName;
console.log(fullName);
const fullNameTwo = `este es el nombre completo: ${firstName} ${lastName}`;
console.log(fullNameTwo);

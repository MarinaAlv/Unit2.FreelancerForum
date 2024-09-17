/*
A visitor enters the website and finds a list of available freelancers.
Each freelancer has a name, an occupation, and a starting price for their services.
They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.
The visitor also finds a message that displays the average starting price of all the freelancers. In this example, the average starting price is $40.
A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer and has a starting price of $70. The average starting price is updated to $50.
New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.
*/

const freelancers = [
    {name: "Alice", price: 30, occupation: "writer"},
    {name: "Bob", price: 50, occupation: "teacher"},
    {name: "Carol", price: 70, occupation: "programmer"},
    {name: "Marina", price: 81, occupation: "marketing"},
    {name: "Alma", price: 43, occupation: "administrator"},
    {name: "Pierre", price: 76, occupation: "engineer"},
    {name: "Adriana", price: 47, occupation: "nurse"},
    {name: "Alonso", price: 72, occupation: "boss"},
];

const actualFreelancer = [];

function render (){

    const nameList = document.querySelector("#name");
    const freelancerNames = actualFreelancer.map((person) => {
      const element = document.createElement("li");
      element.textContent = person.name;
      return element;
});
nameList.replaceChildren(...freelancerNames);


const occupationList = document.querySelector("#occupation");
    const freelancerOccupations = actualFreelancer.map((person) => {
      const element = document.createElement("li");
      element.textContent = person.occupation;
      return element;
});
occupationList.replaceChildren(...freelancerOccupations);


const priceList = document.querySelector("#price");
    const freelancerPrices = actualFreelancer.map((person) => {
      const element = document.createElement("li");
      element.textContent = '$${person.price}';
      return element;
});
priceList.replaceChildren(...freelancerPrices);

const totalPrices = actualFreelancer.reduce((total, person) => total + person.price, 0);
const averagePrice = actualFreelancer.length > 0 ? (totalPrices / actualFreelancer.length).toFixed(2) : 0;

const averagePriceElement = document.querySelector("#averagePrice");
if (averagePriceElement) {
    averagePriceElement.textContent = '$${averagePrice}';
}
}

    function selectFreelancer() {
        const free = freelancers[Math.floor(Math.random() * freelancers.length)];
        actualFreelancer.push(free);
        render();
    }


selectFreelancer();

const mapFreelancersToHTML = (arr) => {
  const mapped = arr
    .map((value) => {
      return `
        <section>
        <p>${value.name}</p>
        <p>Hourly Rate: $${value.price.toFixed(2)}</p>
        <p>Occupation: ${value.occupation}</p>
        </section>
        `;
    })
    .join("");
  return mapped;
};

const randomFreelancerObject = () => {
  const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };
  const price = Math.floor(Math.random() * (50 - 15 + 1) + 15);
  const name = names[getRandomIndex(names)];
  const occupation = occupations[getRandomIndex(occupations)];
  const randomFreelancer = {
    name,
    price,
    occupation,
  };
  return randomFreelancer;
};

const render = () => {
  spanCount.innerHTML = freelancers.length;

  let sum = 0;
  freelancers.forEach((value) => {
    sum += value.price;
  });
  averageRate.innerHTML = (sum / freelancers.length).toFixed(2);

  listingSection.innerHTML = mapFreelancersToHTML(freelancers);
};

const spantCount = document.querySelector(".spanCount");
const averageRate = document.querySelector(".averageRate");
const listingSection = document.querySelector(".listingSection");

const names = [
  "Dr. Slice",
  "Dr. Pressure",
  "Prof. Possibility",
  "Prof. Prism",
  "Dr. Impulse",
  "Prof. Spark",
  "Dr. Wire",
  "Prof. Goose",
];

const occupations = ["gardener", "programmer", "teacher", "gardner"];

const freelancers = [];

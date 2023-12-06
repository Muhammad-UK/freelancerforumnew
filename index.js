const mapFreelancersToHTML = (arr) => {
  const mapped = arr
    .map((value) => {
      return `
        <section>
        <p>${value.name}<br>
        Hourly Rate: $${value.price.toFixed(2)}<br>
        Occupation: ${value.occupation}</p>
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

const spanCount = document.querySelector(".spanCount");
const averageRate = document.querySelector(".averageRate");
const listingSection = document.querySelector(".listingSection");
const addButton = document.querySelector(".addButton");

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

addButton.addEventListener("click", () => {
  freelancers.push(randomFreelancerObject());
  render();
});

listingSection.addEventListener("click", (ev) => {
  if (ev.target.tagName === "P") {
    const idx = Array.from(ev.target.parentNode.children).indexOf(ev.target);
    freelancers.splice(idx, 1);
    render();
  }
});

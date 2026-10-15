const members = [
  {
    id: 1,
    name: "israel",
    role: "admin",
    status: "online",
  },
  {
    id: 2,
    name: "ayo",
    role: "member",
    status: "online",
  },
  {
    id: 1,
    name: "solomon",
    role: "admin",
    status: "offline",
  },
];

const selectElementById = document.getElementById("text");
// console.log(selectElementById.textContent);

const selectElementByClass = document.querySelector(".container");
// console.log(selectElementByClass);

const selectMultipleElements = document.querySelectorAll("p");
// console.log(selectMultipleElements);

selectMultipleElements.forEach((text) => {
  //   console.log(text.textContent);
  //   console.log((text.textContent = "I love milkshake"));
});

const addOrRemoveCssClass = document.querySelector(".text");
addOrRemoveCssClass.classList.add("active");

const memberCard = members
  .map((member) => {
    return `
    <div class="user">
        <h2>${member.name}</h2>
        <p>${member.role}</p>
        <span>${member.status}
    </div>
    `;
  })
  .join("");

// document.querySelector(".team_members").innerHTML = memberCard;

// function handleBtn() {
//   addEventListener("click", () => {
//     members.forEach((member) => {
//       member.role = member.role === "member" ? "admin" : "member";
//     });
// });
// handleBtn();
// }

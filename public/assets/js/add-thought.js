const { response } = require("express");

const $thoughtForm = document.querySelector("#thought-form");
const $thoughtSection = document.querySelector("#thought-section");

const handlethoughtSubmit = (event) => {
  event.preventDefault();

  const username = $thoughtForm.querySelector("#username").value;
  const createdBy = $thoughtForm.querySelector("#created-by").value;

  if (!username || !createdBy) {
    return;
  }

  const formData = { thoughtName, createdBy };

  fetch("/api/thought", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((postResponse) => {
      alert("thought created successfully!");
    })
    .catch((err) => {
      console.log(err);
    });
};

$thoughtForm.addEventListener("submit", handlethoughtSubmit);

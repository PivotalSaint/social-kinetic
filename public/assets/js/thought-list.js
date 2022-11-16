const $thoughtList = document.querySelector("#thought-list");

const getThoughtList = () => {
  fetch("/api/thought")
    .then((response) => response.json())
    .then((thoughtListArr) => {
      thoughtListArr.forEach(printThought);
    })
    .catch((err) => {
      console.log(err);
    });
};

const printThought = ({
  _id,
  username,
  thoughtCount,
  createdBy,
  createdAt,
}) => {
  const thoughtCard = `
    <div class="col-12 col-lg-6 flex-row">
      <div class="card w-100 flex-column">
        <h3 class="card-header">${username}</h3>
        <div class="card-body flex-column col-auto">
          <h4 class="text-dark">By ${createdBy}</h4>
          <p>On ${createdAt}</p>
          <p>${thoughtCount} Comments</p>
          <ul>
            ${thoughts
              .map((thought) => {
                return `<li>${thought}</li>`;
              })
              .join("")}
          </ul>
          <a class="btn display-block w-100 mt-auto" href="/thought?id=${_id}">See the discussion.</a>
        </div>
      </div>
    </div>
  `;

  $thoughtList.innerHTML += thoughtCard;
};
getThoughtList();

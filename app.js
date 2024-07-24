dataDisplay = (ele) => {
  //   ele.preventDefault();
  var userName = document.getElementById("userName");
  var userAddress = document.getElementById("userAddress");
  var userEmail = document.getElementById("userEmail");

  card(userName.value, userAddress.value, userEmail.value);
};

card = (userName, userAddress, userEmail) => {
  console.log("lakjsdfaklsdj", userName, userAddress, userEmail);
  var cardDiv = document.getElementById("userData");

  var card = `<div class="card cardUi">
    <div class="card-body d-flex gap-3">
      <h5 class="card-title">${userName}</h5>
      <p class="card-text">${userAddress}</p>
      <p class="card-text">${userEmail}</p>
    </div>
  </div>`;
  cardDiv.innerHTML += card;
};

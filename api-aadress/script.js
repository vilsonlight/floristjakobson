const aadressInput = document.getElementById("aadress");

const aadressiValikud = document.getElementById("aadressiValikud");

aadressInput.addEventListener("input", async function () {
  const otsing = aadressInput.value;

  if (otsing.length < 3) {
    return;
  }

  const apiAadress =
    "https://inaadress.maaamet.ee/inaadress/gazetteer" +
    "?address=" +
    encodeURIComponent(otsing) +
    "&results=5&appartment=1";

  const vastus = await fetch(apiAadress);
  const andmed = await vastus.json();

  aadressiValikud.innerHTML = "";

  andmed.addresses.forEach(function (aadress) {
    const valik = document.createElement("li");

    valik.textContent = aadress.ipikkaadress;

    aadressiValikud.appendChild(valik);
  });
});

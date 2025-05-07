const temakorok = [
    "Élővilág", "Zene", "Földrajz", 
    "Sport", "Nyelv és irodalom", "Film és tv", 
    "Történelem és közélet", "Életmód", "Tudomány és technika", "Bulvár"
  ];

  function valasszTemakorok(csoportMeret = 3, csoportSzam = 3) {
    const másolat = [...temakorok];
    const eredmény = [];

    if (másolat.length < csoportMeret * csoportSzam) {
      document.getElementById("eredmeny").innerText = "Nincs elég témakör!";
      return;
    }

    for (let i = 0; i < csoportSzam; i++) {
      const csoport = [];
      for (let j = 0; j < csoportMeret; j++) {
        const index = Math.floor(Math.random() * másolat.length);
        csoport.push(másolat.splice(index, 1)[0]);
      }
      eredmény.push(csoport);
    }

    megjelenitEredmeny(eredmény);
  }

  function megjelenitEredmeny(csoportok) {
    const container = document.getElementById("eredmeny");
    container.innerHTML = "";

    csoportok.forEach((csoport, index) => {
      const elem = document.createElement("h3");
      elem.textContent = `${index + 1}. témakörök: ${csoport.join(", ")}`;
      container.appendChild(elem);
    });
  }

  function nevbevitel(){
    let első = document.getElementById("Első-input").value;
    let második = document.getElementById("Második-input").value;
    document.getElementById("Első-játékos").textContent = első;
    document.getElementById("Második-játékos").textContent = második;
    const input1 = document.getElementById("Első-input")
    const input2 = document.getElementById("Második-input")
    input1.hidden = true
    input2.hidden = true
    let button = document.getElementById("gomb2")
    button.hidden = true
  };

  let pontok1 = 0
  let pontok2 = 0

  function Pontszám1(){
    pontok1 += 1
    document.getElementById("pontok1").textContent = pontok1
  }

  function Pontszám2(){
    pontok2 += 1
    document.getElementById("pontok2").textContent = pontok2
  } 

  function Nullázás(){
    pontok1 = 0
    pontok2 = 0
    document.getElementById("pontok1").textContent = pontok1
    document.getElementById("pontok2").textContent = pontok2
  }

let count = 10;
let intervalId = null;

function updateDisplay() {
  document.getElementById('timer').textContent = count;
}

function startTimer() {
  if (intervalId !== null) return; // Ne indítsd újra, ha már fut

  intervalId = setInterval(() => {
    if (count > 0) {
      count--;
      updateDisplay();
    } else {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(intervalId);
  intervalId = null;
  count = 10;
  updateDisplay();
}
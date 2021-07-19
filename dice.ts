let button: HTMLButtonElement = document.getElementById("generatedie") as HTMLButtonElement;
let dieContainer: HTMLDivElement = document.getElementById("dieContainer") as HTMLDivElement;
let rollButton: HTMLButtonElement = document.getElementById("rolldie") as HTMLButtonElement;
let sumButton: HTMLButtonElement = document.getElementById("sumdie") as HTMLButtonElement;
let sumContainer: HTMLDivElement = document.createElement("div") as HTMLDivElement;
sumContainer.classList.add("sumContainer");
document.body.appendChild(sumContainer);
let globalarr: Die[] = [];

class Die {
  value: number;
  div: HTMLDivElement;
  constructor() {
    // let value = roll()
    this.div = document.createElement("div") as any;
    this.value = Math.floor(Math.random() * 6) + 1;
    this.div.classList.add("die");
    dieContainer.appendChild(this.div);
    this.roll();
    this.remover()
    this.update();
  };
  roll() {
    globalarr.push(this);
    this.div.append(this.value.toString());
  };

  remover() {
      this.div.addEventListener('dblclick', () => {
          console.log("hey")
          globalarr.splice(globalarr.indexOf(this), 1)
          this.div.remove()
      })
  };
  
  update() {
    this.div.addEventListener("click", () => {
      globalarr.splice(globalarr.indexOf(this), 1)
      this.value = Math.floor(Math.random() * 6) + 1;
      this.div.innerText = ''
      this.div.append(this.value.toString());
      globalarr.push(this)
      });
  };
 
}

button.addEventListener("click", function () {
  new Die();
});

sumButton.addEventListener("click", () => {
  sumContainer.innerText = '';
  let sumDice = 0;
  globalarr.forEach((total) => {
    // total = parseInt(this.value);
    sumDice += total.value;
  });
  console.log(sumDice);
  sumContainer.append(
    `The sum of all the dice heretofore mentioned on this most awesome of a website is ${sumDice}`
  );
});

rollButton.addEventListener("click", () => {
  globalarr.forEach((num) => {
    num.div.innerText = '';
    num.value = Math.floor(Math.random() * 6) + 1;
    num.div.append(num.value.toString());
  });
  console.log(globalarr);
});

let button = document.querySelector(".btn")

button.addEventListener("click", () => {
  let box = document.querySelector(".box")
  box.style.display = "grid";
  box.innerHTML = "hahaha now you are getting hacked"
  hack_code()
}
)

async function hack_code() {
  setInterval(() => {
    let last = document.querySelector(".box").lastElementChild
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
    }
    else if(last.innerHTML.startsWith("virus"))
    {

    }
    else { last.innerHTML = last.innerHTML + "." }
  }, 400);
  let test = ["Initializing hacking", "Deleting your all files", "Installing malware", "Deleting the operating system", "virus installed succesfully!"]

  await add_text(test)
}

async function add_text(test) {
  for (let count = 0; count < test.length; count++) {
    if (count == test.length - 1) {
      await add_interval()
      let div = document.createElement("div")
      div.innerHTML = test[count]
      document.querySelector(".box").appendChild(div)
    }
    else {
      await add_interval()
      let div = document.createElement("div")
      div.innerHTML = "[~]" + test[count]
      document.querySelector(".box").appendChild(div)
    }

  }
}

function add_interval() {
  return new Promise((resolve) => {
    let timeout = 1 + 3 * Math.random()
    console.log(timeout);

    setTimeout(() => {
      resolve()
    }
      , timeout * 1000)
  })
}

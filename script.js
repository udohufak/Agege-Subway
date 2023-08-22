
let num1 = document.getElementById("num");
    let count = 0;
  function increment() {
      count = count + 1
      num1.textContent = count;
  }
let el_save = document.getElementById("logs");
  function save() {
      save_el = count;
      el_save.textContent  +=  save_el + " - "
      count = 0;
      num1.textContent = 0;
  }
  document.getElementById("reloadButton").addEventListener("click", function() {
    location.reload();
});
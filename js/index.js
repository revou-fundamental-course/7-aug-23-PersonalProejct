const proses = document.getElementById("proses");
const output = document.getElementById("output");
const loading = document.getElementById("rumus__hasil");
const resetpage = document.getElementById("reset");

proses.addEventListener("click", function () { // METODE MENGHITUNG LUAS SEGITIGA
  const alas = document.getElementById("Alas"); //input
  const tinggi = document.getElementById("Tinggi"); //input

  const avariable = document.getElementById("a"); //allas
  const tvariable = document.getElementById("t"); //tinggi

  let a = parseInt(alas.value); //alas dari user input
  let b = parseInt(tinggi.value); //tinggi dari user input
  let luas = 0.5 * a * b; //proses atau rumus dari luas segitiga

  rumus__hasil.style.display = "block";

  output.innerHTML = luas;
  avariable.innerHTML = parseInt(alas.value);
  tvariable.innerHTML = parseInt(tinggi.value);

  resetpage.addEventListener("click", function () {
    location.reload();
  });
});

proses.addEventListener("click", function () { //METODE MENGHITUNG KELILING SEGITIGA
  const sisi1 = document.getElementById("Sisi1"); //input
  const sisi2 = document.getElementById("Sisi2"); //input
  const sisi3 = document.getElementById("Sisi3"); //input

  const sisi1Var = document.getElementById("s1"); //sisi
  const sisi2Var = document.getElementById("s2"); //sisi
  const sisi3Var = document.getElementById("s3"); //sisi

  let s1 = parseInt(sisi1.value);
  let s2 = parseInt(sisi2.value);
  let s3 = parseInt(sisi3.value);
  let keliling = s1 + s2 + s3;

  rumus__hasil.style.display = "block";

  output.innerHTML = keliling;
  sisi1Var.innerHTML = parseInt(sisi1.value);
  sisi2Var.innerHTML = parseInt(sisi2.value);
  sisi3Var.innerHTML = parseInt(sisi3.value);

  resetpage.addEventListener("click", function () {
    location.reload();
  });
});

function showMessage() {
  const name = document.getElementById("name").value;
  document.getElementById("output").innerText =
    "Terima Kasih, " + name + ",telah mendaftar!";
  return false;
}

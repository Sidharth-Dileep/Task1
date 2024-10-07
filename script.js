function getFormValue(e) {
  e.preventDefault();
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const age = document.getElementById("age").value;
  const ID = document.getElementById("ID").value;
  const m = document.getElementById("m");
  const f = document.getElementById("f");
  const branch = document.getElementById("branch").value;
  const phno = document.getElementById("phno").value;
  const ca = document.getElementById("c.a");
  const cb = document.getElementById("c.b");
  const cc = document.getElementById("c.c");

  console.log(
    "Firstname:" +
      fname +
      "\nLastname:" +
      lname +
      "\nAge:" +
      age +
      "\nAdmission ID:" +
      ID +
      "\nBranch:" +
      branch +
      "\nPhone Number:" +
      phno
  );
  if (m.checked) {
    console.log("Gender:" + m.value);
  } else if (f.checked) {
    console.log("Gender:" + f.value);
  }
  if (ca.checked) {
    console.log("Club A is selected:");
  }
  if (cb.checked) {
    console.log("Club B is Selected");
  }
  if (cc.checked) {
    console.log("Club C is selected");
  }
}

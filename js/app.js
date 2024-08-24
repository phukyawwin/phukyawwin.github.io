
function calculate_age() { 
  const dob = new Date(1996, 05, 01, 0, 0, 0, 0);
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
document.getElementById('age').innerHTML = calculate_age();
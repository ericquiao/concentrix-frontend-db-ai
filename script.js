let corsHeader = 'https://cors-anywhere.herokuapp.com';
let url = 'https://concentrix-database.herokuapp.com/api/users'


const patientName = document.getElementById('patientName')
patientName.addEventListener('change', retrieveData)

function retrieveData(){

  let displayPatient = document.getElementById('patientName').value

  let person = displayPatient;

fetch(`${corsHeader}/${url}/${person}`)
.then(res=>res.json())
.then(data=>{
  console.log(data)
  nameResult.innerHTML = `Name: ${data.name}`;
  ageResult.innerHTML = `Age: ${data.age} years old`;
  streetCity.innerHTML = `Address: ${data.streetCity}`;
  birthday.innerHTML = `Birthday: ${data.birthday}`;
  severity.innerHTML = `Severity: ${data.severity}`;
  cough.innerHTML = `Cough: ${data.cough}`;
  cold.innerHTML = `Cold: ${data.cold}`;
  fever.innerHTML = `Fever: ${data.fever}`;

})
  
}


console.log("Dashboard loaded");

const ctx2 = document.getElementById('usersChart');

new Chart(ctx2, {
type: 'bar',
data: {
labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
datasets: [{
label: 'New Users',
data: [50,70,90,120,80,150,200],
backgroundColor: '#f97316'
}]
}
});

const ctx = document.getElementById('salesChart');

new Chart(ctx, {
type: 'line',
data: {
labels: ['Jan','Feb','Mar','Apr','May','Jun'],
datasets: [{
label: 'Sales',
data: [1200,1900,3000,2500,3200,4000],
borderColor: '#2563eb',
backgroundColor: 'rgba(37,99,235,0.2)',
tension:0.4
}]
},
});

function deleteUser(button){

let row = button.parentElement.parentElement;

row.remove();

updateUserCount();

}

function addUser(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let role = document.getElementById("role").value;

updateUserCount();

if(name === "" || email === ""){
alert("Please fill all fields");
return;

}


let table = document.getElementById("user-list");

let row = document.createElement("tr");

row.innerHTML = `
<td>${name}</td>
<td>${email}</td>
<td>${role}</td>
<td><button onclick="deleteUser(this)">Delete</button></td>
`;

table.appendChild(row);

document.getElementById("name").value="";
document.getElementById("email").value="";

}

function searchUser(){

let input = document.getElementById("search-user").value.toLowerCase();

let rows = document.querySelectorAll("#user-list tr");

rows.forEach(row => {

let name = row.children[0].innerText.toLowerCase();

if(name.includes(input)){
row.style.display = "";
}else{
row.style.display = "none";
}

});

}

function updateUserCount(){

let rows = document.querySelectorAll("#user-list tr");

document.getElementById("users-count").innerText = rows.length;

}

function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

}



function showSection(section){

document.getElementById("home-section").style.display="none";
document.getElementById("users-section").style.display="none";
document.getElementById("orders-section").style.display="none";
document.getElementById("products-section").style.display="none";
document.getElementById("settings-section").style.display="none";

document.getElementById(section + "-section").style.display="block";

document.querySelectorAll(".sidebar li").forEach(li=>{
li.classList.remove("active");
});

event.target.classList.add("active");

}

const counters = document.querySelectorAll(".counter, #users-count");

counters.forEach(counter => {

const updateCount = () => {

const target = +counter.getAttribute("data-target");
const count = +counter.innerText;

const increment = target / 100;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCount,20);

}else{

counter.innerText = target;

}

};

updateCount();

});
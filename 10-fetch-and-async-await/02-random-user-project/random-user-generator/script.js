// document.addEventListener('DOMContentLoaded', function () {
//   const generateButton = document.getElementById('generate');
//   const users = document.getElementById('user');
//   const spinner = document.querySelector('.spinner');
//   const classElement = document.querySelector('.flex.justify-between');

//   generateButton.addEventListener('click', function () {
//     spinner.classList.remove('hidden'), (classElement.innerHTML = '');
//     fetch('https://randomuser.me/api/')
//       .then((response) => response.json())
//       .then((data) => {
//         const user = data.results[0];
//         const userName = `${user.name.first} ${user.name.last}`;
//         const userEmail = user.email;
//         const userPicture = user.picture.large;
//         const userPhone = user.phone;
//         const userLocation = `${user.location.city}, ${user.location.country}`;
//         const userAge = user.dob.age;

//         users.innerHTML = `
//         <div class="flex justify-between">
//             <div class="flex">
//                 <img class="w-48 h-48 rounded-full mr-8" src="${userPicture}" alt="User Picture">
//                 <div class="space-y-3">
//                     <p class="text-xl"><span class="font-bold">Name: </span>${userName}</p>
//                     <p class="text-xl"><span class="font-bold">Email: </span>${userEmail}</p>
//                     <p class="text-xl"><span class="font-bold">Phone: </span>${userPhone}</p>
//                     <p class="text-xl"><span class="font-bold">Location: </span>${userLocation}</p>
//                     <p class="text-xl"><span class="font-bold">Age: </span>${userAge}</p>
//                 </div>
//             </div>
//         </div>
//         `;
//       })
//       .catch((error) => console.error('Error fetching random user:', error))
//       .finally(() => {
//         spinner.classList.add('hidden');
//       });
//   });
// });
function fetchUser() {
  showSpinner();
  fetch('https://randomuser.me/api')
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      // console.log(data.results[0]);
      hideSpinner();
      displayUser(data.results[0]);
    });
}

function displayUser(user) {
  const userDisplay = document.querySelector('#user');
  // console.log(user.gender);

  if (user.gender === 'female') {
    document.body.style.backgroundColor = 'rebeccapurple';
  } else {
    document.body.style.backgroundColor = 'steelblue';
  }
  userDisplay.innerHTML = `
  <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${user.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
            </div>
          </div>
        </div>`;
}

function showSpinner() {
  document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none';
}

document.querySelector('#generate').addEventListener('click', fetchUser);
fetchUser();

document.addEventListener('DOMContentLoaded', function () {
  const generateButton = document.getElementById('generate');
  const users = document.getElementById('user');
  const spinner = document.querySelector('.spinner');
  const classElement = document.querySelector('.flex.justify-between');

  generateButton.addEventListener('click', function () {
    spinner.classList.remove('hidden'), (classElement.innerHTML = '');
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        const userName = `${user.name.first} ${user.name.last}`;
        const userEmail = user.email;
        const userPicture = user.picture.large;
        const userPhone = user.phone;
        const userLocation = `${user.location.city}, ${user.location.country}`;
        const userAge = user.dob.age;

        users.innerHTML = `
        <div class="flex justify-between">
            <div class="flex">
                <img class="w-48 h-48 rounded-full mr-8" src="${userPicture}" alt="User Picture">
                <div class="space-y-3">
                    <p class="text-xl"><span class="font-bold">Name: </span>${userName}</p>
                    <p class="text-xl"><span class="font-bold">Email: </span>${userEmail}</p>
                    <p class="text-xl"><span class="font-bold">Phone: </span>${userPhone}</p>
                    <p class="text-xl"><span class="font-bold">Location: </span>${userLocation}</p>
                    <p class="text-xl"><span class="font-bold">Age: </span>${userAge}</p>
                </div>
            </div>
        </div>
        `;
      })
      .catch((error) => console.error('Error fetching random user:', error))
      .finally(() => {
        // Hide spinner after fetching data
        spinner.classList.add('hidden');
      });
  });
});

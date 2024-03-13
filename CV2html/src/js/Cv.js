document.addEventListener('DOMContentLoaded', function () {
    const educationList = document.getElementById('educationList');
    const workList = document.getElementById('workList');

    fetch('src/js/CV.json')
        .then(response => response.json())
        .then(data => {
            // Education
            data.utbildningar.forEach(utbildning => {
                const li = document.createElement('li');
                li.textContent = `${utbildning.titel} - ${utbildning.plats} (${utbildning.år})`;
                educationList.appendChild(li);
            });

            // Work Experience
            data.arbetsplatser.forEach(arbetsplats => {
                const li = document.createElement('li');
                li.textContent = `${arbetsplats.titel} - ${arbetsplats.plats} (${arbetsplats.år})`;
                workList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});



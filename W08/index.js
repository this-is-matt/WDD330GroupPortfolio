const url = "https://swapi.dev/api/people/";
const getPeople = document.getElementById('people');
const container = document.getElementById('peopleContainer');
const btn = document.getElementById('next');
let nextURL;


getPeople.addEventListener('click', () => {
    // console.log("click")}, false);
    fetch(url)
        .then(response => {
            container.innerHTML = "";
            // // generally a "spinner" is used here: Ajax Load and Preloaders.net
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i <= 10; i++) {
                let p = document.createElement("p");
                p.textContent = data.results[i].name;
                container.appendChild(p);
            }
            nextURL = data.next;
            console.log(nextURL);
        })
        .catch(error => console.log('There was an error: ', error))
}, false);

// //next button
// btn.addEventListener('click', () => {
//     // console.log("click")}, false);
//     fetch(url)
//         .then(response => {
//             container.innerHTML = "";
//             // // generally a "spinner" is used here: Ajax Load and Preloaders.net
//             if (response.ok) {
//                 return response;
//             }
//             throw Error(response.statusText);
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             for (let i = 0; i <= 10; i++) {
//                 const p = document.createElement("p");
//                 p.textContent = data.results[i].name;
//                 container.appendChild(p);
//             }
//         })
//         .catch(error => console.log('There was an error: ', error))
// }, false);
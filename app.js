

const btn = document.querySelector('.btn');
const id = document.querySelector('.id');
const quote = document.querySelector('.quote');
const api = 'https://api.adviceslip.com/advice';


btn.addEventListener('click', function () {

         fetch(api)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the retrieved data
            console.log(data);
            console.log(data.slip);

            quote.textContent = ` “${data.slip.advice}”`
            id.textContent = ` Advice #${data.slip.id}`

        
            gsap.to(btn, {
                rotate: 360,
                duration: 0.6,
                ease: 'power1.inOut'
            });


        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
        });

})


// second methods with async await


// btn.addEventListener('click', async () => {
//     try {
//         const response = await fetch(api);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data);
//         console.log(data.slip);

//         btn.style.transform = 'rotate(0deg)'; // Reset transform
//         void btn.offsetWidth; // Trigger reflow to ensure the reset is applied immediately

//         btn.style.transform = 'rotate(360deg)'; // Apply new transform
//         quote.textContent = ` “${data.slip.advice}”`;
//         id.textContent = ` Advice #${data.slip.id}`;
//     } catch (error) {
//         console.error('Error:', error);
//     }
// });






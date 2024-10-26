const category = 'happiness';
const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
const apiKey = 'UM6myhSdB/uj0R1mYQSfvg==rygWWI7423j0buIt';
let apiQuotes = [];

fetch(apiUrl, {
  headers: {
    'X-Api-Key': apiKey
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  return response.json();
})
.then(apiQuotes => {
  console.log(apiQuotes);
})
.catch(error => {
  console.error(error);
});

// async function getQuotes() {
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         console.log(apiQuotes);
//     } catch (error){
//         // Catch Error Here
//     }
// }

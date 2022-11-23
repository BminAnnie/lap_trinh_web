import axios from 'axios';

export async function loadDogs(queries = {}) {
  // Call an external API endpoint to get posts
  const res = await axios.get('https://635a58ac6f97ae73a62a1943.mockapi.io/api/v1/dogs', {
    params: {
      ...queries,
    },
  });
  const data = await res.data;
  return data;
}


export async function loadAllDog() {
  // Call an external API endpoint to get posts
  const res = await axios.get('https://635a58ac6f97ae73a62a1943.mockapi.io/api/v1/dogs');
  const data = await res.data;
  return data;
}
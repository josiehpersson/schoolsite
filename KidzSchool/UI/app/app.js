const axios = require('axios');

async function getTeacher() {
  try {
    const response = await axios.get('/teachers');
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

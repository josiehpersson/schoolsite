

async function getTeacher() {
  try {
    const result = axios.get('http://localhost:4000/api/teachers');
        // Await the result from the server and store
        // the result in a variable named customers
        const { data: teachers } = await result;
    console.log(teachers);
  } catch (error) {
    console.log(error);
  }
}

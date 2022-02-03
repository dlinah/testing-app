/**
 * this file memic some of the migration code
 */

// make a test api call to fetch test data
const getTest = async () => {
  const axios = require("axios");
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  console.log(data);
};
getTest();

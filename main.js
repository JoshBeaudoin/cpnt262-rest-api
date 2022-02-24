 /// !--- Main ---!///
  const fetchData = async function () {
    try {
      const response = await fetch('https://api.clashroyale.com/v1/cards?limit=15&after=After');
      if (!response.ok) {
        throw new Error(response.statusText);
      };
      const data = await response.json();
      const character = data[randomIndex(data.length)];
      console.log(data);
      const output = `
      <h1>${data.name}</h1>
      <img src= "${data.image}"
      <p>${data.description}</p>
      <p>
       <a href="${url}">Data</a>
      </p>`;
     /// !--- Error ---! ///
      document.querySelector('.content').innerHTML = output;
    } catch (error) {
      console.error("ERROR!");
    }
  }
  const endpoint = 'https://api.clashroyale.com/v1/cards?limit=15&after=After';
  fetchData(endpoint);
  const submitHandler = (event) => {
    event.preventDefault();
    /// !--- Button ---! ///
  };
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", function () {
    fetchData(endpoint);
  });
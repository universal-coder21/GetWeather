let Rain = document.querySelector("#Rain");

function logUserInput2() {
  try {
    let userr = document.querySelector(".userr").value;
    console.log(userr);

    if (!userr) {
      throw new Error('User input is empty');
    }

    const Url = `https://api.tomorrow.io/v4/weather/realtime?location=${userr}&apikey=Yba7KWEJ5n7rcvHy7GXYuJNVMyYjsApj`;
    console.log(Url);

    fetch(Url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data2) => {
        if (data2 && data2.data && data2.data.values) {
          console.log(data2);
          Rain.innerHTML = `<div style="width:100%; display:flex; justify-content:space-evenly">
            <p><b>${data2.data.values.precipitationProbability}%</b></p>
               <p>  <b>${data2.data.values.rainIntensity} mm</b> </p>


          </div>`;
        } else {
          Rain.innerHTML = `<p>Cannot fetch data</p>`;
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        Rain.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  } catch (error) {
    console.log('User input error:', error);
  }
}

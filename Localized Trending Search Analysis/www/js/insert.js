function insert()
{
  document.getElementById('p1').innerHTML = "";
  selectElement = document.querySelector('#t1');            
  output = selectElement.value; 
  const url = 'http://127.0.0.1:2799/insertname?name='+output;
  const requests = new XMLHttpRequest();
  requests.open('GET', url, true);
  requests.onerror = function()
  {
    console.error('An error occurred fetching the JSON from ' + url);
  };  
  requests.send(); 
}  

// function show()
// {
//   document.getElementById('p1').innerHTML = "";
//   selectElement = document.querySelector('#t1'); 
//   selectElement2 = document.querySelector('#t2');             
//   output = selectElement.value; 
//   output2 = selectElement2.value;
//   let para = document.getElementById('p1');
//   para.length = 0;
//   const urls = 'http://127.0.0.1:2799/show?name='+output+'&no='+output2;
//   const requests = new XMLHttpRequest();
//   requests.open('GET', urls, true);
//   requests.onerror = function()
//   {
//     console.error('An error occurred fetching the JSON from ' + urls);
//   };  
//   requests.send(); 
// }
function trend() { 
  document.getElementById('t3').innerHTML = "";

  let para = document.getElementById('t3');
  para.length = 0;
  
  const urls3 = 'http://127.0.0.1:2799/trend';
  
  const requests2 = new XMLHttpRequest();
  requests2.open('GET', urls3, true);
  while(trend.firstchild){
    trend.removeChild(trend.firstchild)
  }
  
  requests2.onload = function() {
    if (requests2.status === 200)  
      {
        const data = JSON.parse(requests2.responseText);
        var p =document.createElement("th");
        p.innerHTML = ("Sr.no.");
        para.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Seacrh Name");
        para.appendChild(p);
        var p =document.createElement("th");
        p.innerHTML = ("Count");
        para.appendChild(p);
        for (let i = 0; i < data.length; i++)
        {
          var p =document.createElement("tr");
          para.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = i+1;
          para.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].search_name;
          para.appendChild(p);
          var p = document.createElement("td");
          p.innerHTML = data[i].toll;
          para.appendChild(p);
        }
      }  
    }
    requests2.onerror = function()
    {
      console.error('An error occurred fetching the JSON from ' + urls3);
    };
    requests2.send();  
  }
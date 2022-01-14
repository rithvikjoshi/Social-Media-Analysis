function tweet()
{
  document.getElementById('p1').innerHTML = "";
  selectElement = document.querySelector('#t1'); 
  selectElement2 = document.querySelector('#t2');             
  output = selectElement.value; 
  output2 = selectElement2.value;
  let para = document.getElementById('p1');
  para.length = 0;
  const urls = 'http://127.0.0.1:2799/gettweet?name='+output+'&no='+output2;
  const requests = new XMLHttpRequest();
  requests.open('GET', urls, true);
  while(tweet.firstchild)
  {
    tweet.removeChild(tweet.firstchild)
  }
  requests.onload = function()
  {
    if (requests.status === 200)
    {
      const data = JSON.parse(requests.responseText);
      selectElement3 = document.querySelector('#t1'); 
      selectElement4 = document.querySelector('#t2');         
      output3 = selectElement.value; 
      output4 = selectElement2.value;
      let para = document.getElementById('p1');
      para.length = 0;
      const urls2 = 'http://127.0.0.1:2799/getsentiment?name='+output3+'&no='+output4;
      const requests2 = new XMLHttpRequest();
      requests2.open('GET', urls2, true);
      while(tweet.firstchild)
      {
        tweet.removeChild(tweet.firstchild)
      }
      requests2.onload = function()
      {
        if (requests2.status === 200)
        {
          const data1 = JSON.parse(requests2.responseText);
          var p =document.createElement("th");
          p.innerHTML = ("Sr.no.");
          para.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("Name");
          para.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("Tweets");
          para.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("Time & Date");
          para.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("ReTweet");
          para.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("ReTweet Count");
          para.appendChild(p);
          var p =document.createElement("th");
          p.innerHTML = ("Sentiment");
          para.appendChild(p);
          for (let i = 0; i < data.length; i++)
          {
            var p =document.createElement("tr");
            para.appendChild(p);
            var p = document.createElement("td");
            p.innerHTML = i+1;
            para.appendChild(p);
            var p = document.createElement("td");
            p.innerHTML = data[i].screen_name;
            para.appendChild(p);
            var p = document.createElement("td");
            p.innerHTML = data[i].text;
            para.appendChild(p);
            var p = document.createElement("td");
            p.innerHTML = data[i].created_at;
            para.appendChild(p);
            var p = document.createElement("td");
            p.innerHTML = data[i].is_retweet;
            para.appendChild(p);
            var p = document.createElement("td");
            p.innerHTML = data[i].retweet_count;
            para.appendChild(p); 
            var p = document.createElement("td");
            p.innerHTML = data1[i];
            para.appendChild(p);
          }
        }  
      }
      requests2.onerror = function()
      {
        console.error('An error occurred fetching the JSON from ' + urls2);
      };
      requests2.send();  
    }     
  }
  requests.onerror = function()
  {
    console.error('An error occurred fetching the JSON from ' + urls);
  };  
  requests.send(); 

  var rangeslider = document.getElementById("t2"); 
  var output = document.getElementById("demo"); 
  output.innerHTML = rangeslider.value; 
  rangeslider.oninput = function()
  {
    output.innerHTML = this.value;
  }   
} 
var rangeslider = document.getElementById("t2"); 
var output = document.getElementById("demo"); 
output.innerHTML = rangeslider.value;
rangeslider.oninput = function()
{ 
  output.innerHTML = this.value; 
}  


     


let url;
let dataFound;
let num;
let topic;

function find(){
    topic = get("input").value.toLowerCase();
    url = 'https://en.wikipedia.org/w/api.php?action=query&titles='+ topic + '&prop=revisions&rvprop=content&format=json&formatversion=2&origin=*'

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      dataFound = JSON.stringify(data)
      count(dataFound)
    })
}


function count(str) {
  let arr = str.split(topic)
  console.log(arr)
  counter = arr.length

  /*
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
      let item = arr[i]
      item = item.toLowerCase()
      topic = topic.toLowerCase()
      if (item.includes(topic)){
        counter++
      }
    }*/

    if (counter <= 1) {
      get('output').innerHTML = 'no article was found'
    } else {
      get('output').innerHTML = topic.bold() + ' is repeated ' + counter.toString().bold() + ' times \n in the wiki article about ' + topic.bold();
    }
  
  get('input').value = ''
}


function get(n){
    return document.getElementById(n);
}




//create XMLHttpRequest to naiandbeyond.com
export  const tonaiandbeyond = new XMLHttpRequest()

tonaiandbeyond.open('GET','https://naiandbeyond.co.ke/index.html');
tonaiandbeyond.send();
console.log(tonaiandbeyond.response)
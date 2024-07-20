//create XMLHttpRequest to naiandbeyond.com
export  const tonaiandbeyond = new XMLHttpRequest()

//add evnt listener


tonaiandbeyond.open('GET','https://supersimplebackend.dev/products');
tonaiandbeyond.send();
// console.log(tonaiandbeyond.response)
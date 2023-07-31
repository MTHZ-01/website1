


fetch(`http://192.168.1.192:8000/products`)
.then(response => {response.json()})
.then( (data)=>

    {console.log(data)}
)
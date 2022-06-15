function fetchdata() {
    fetch("coffee.json")
    .then(res=>res.json())
    .then((data) =>{
        let output= "<table>"+"<tbody>"
        data.forEach(element => {
            output+="<tr><td>"+element.tipo+"</td><td>"+element.precio+"</td></tr>"           
        });
            
        output+="</tbody>";
        output+="</table>";
        document.getElementById("wrapper").innerHTML=output;

    })
.catch(console.log("error"));

}

fetchdata();

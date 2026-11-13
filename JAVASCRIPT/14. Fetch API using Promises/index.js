fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
.then((res)=>res.json())
.then((d)=>{
    let body = document.body
    let section = document.createElement("section")
    d.map((value,index)=>{
        section.innerHTML +=
        `<div class="card">
        <img src="${value.image_link}" height="200px" width="200px" alt="">
        <div class="title">${value.name}</div>
        <div class="price">$${value.price}</div>
        </div>`
    })
    body.appendChild(section)
})
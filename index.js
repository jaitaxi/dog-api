const img = async() => 
{
    let res = await fetch("https://dog.ceo/api/breeds/image/random")
    let data = await res.json()

    document.querySelector("#box").innerHTML=""
    let img = document.createElement("img");
   img.src=data.message

    let div = document.createElement("div");
    div.append(img)
    document.querySelector("#box").append(div)
}
document.querySelector("#btn").addEventListener("click",()=>img())
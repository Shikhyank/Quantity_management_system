const candyName=document.getElementById('name')
const description=document.getElementById('description')
const price=document.getElementById('price')
const quantity=document.getElementById('quantity')
const itemList = document.getElementById('item_list')


// let data = []
window.addEventListener('DOMContentLoaded',async ()=>{
    let res=await fetch('http://localhost:3000')
    let data = await res.json();
    console.log(data)
    data.map(item=>{
        const li = document.createElement('li');
        li.innerText = `${item.candyName} ${item.description} ${item.price} ${item.quantity}`
        li.id = item.id;
        itemList.appendChild(li);
    })
})

const addItem = async ()=>{
    const item = {
        candyName : candyName.value,
        description : description.value,
        price : price.value,
        quantity : quantity.value
    }
    const postItem = await fetch('http://localhost:3000',{
        method : 'post',
        body: JSON.stringify(item),
        headers:{
            'content-type' : 'application/json',
            'accept' : 'application/json'
        }
    })
    const res = await postItem.json();
    alert(res);
    // console.log(item)




    candyName.value = "";
    description.value="";
    price.value="";
    quantity.value="";

}
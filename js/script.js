let input=document.querySelector('.inputtext');
// console.log(input.value)
let listItemsContainer=document.querySelector('.list');

input.addEventListener('keydown', function(event){
    // console.log(event)
    if(event.key==='Enter'){

        let listItem=document.createElement('li');
        listItem.classList.add("list-item")
        // listItem.textContent=input.value
        listItem.innerHTML=`
        <span class="circle"></span>
        <span>${input.value}</span>
        `
        console.log(listItem)
        listItemsContainer.append(listItem)

        input.value="";

    }
  
})





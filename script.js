const itemForm = document.getElementById("item-form")
const itemInput= document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const itemClear= document.getElementById('clear')
const itemFilter=document.getElementById('filter')

function addItem(event){

    event.preventDefault()

    const newItem=itemInput.value
    
  
if(newItem.value==="") {
       alert('pleASE enter the content!!!');
    }
    


    const li=document.createElement('li')
  

    li.appendChild(document.createTextNode((newItem)))

    const button=createButton("remove-item btn-link text-red")

    li.appendChild(button)

    itemList.appendChild(li)
    checkUI()
    itemInput.value===""
}

function createButton(classes){
    const btn=document.createElement('button')
    btn.className=classes
   const icon=createIcon("fa-solid fa-xmark")

   btn.appendChild(icon)
   return btn
}

function createIcon(classes){
    const icon=document.createElement('i')
    icon.className=classes
    return icon
}

function removeItem(e){
  if(e.target.parentElement.classList.contains('remove-item')){ 

     e.target.parentElement.parentElement.remove()
     checkUI()
}

}
function clearItem(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }
    checkUI()
}

function checkUI(e){
    const items=document.querySelectorAll('li')
   
    if( items.length===0){
        itemClear.style.disply='none'
        itemFilter.style.display='none'
    }else{
        
        itemClear.style.disply='block'
        itemFilter.style.display='block'
    }

}
function filterItems(e){
    const items=document.querySelectorAll('li')

    const text=e.target.value.toLowerCase()
    items.forEach((item)=>{
        const itemName=item.firstChild.textContent.toLowerCase()
        if(itemName.indexOf(text)!=-1){
            item.style.display="flex"
        }else{
            item.style.display="none"
        }

    })

}
itemForm.addEventListener('submit',addItem)
itemList.addEventListener('click',removeItem)
itemClear.addEventListener('click',clearItem)
itemFilter.addEventListener('input',filterItems)
checkUI()
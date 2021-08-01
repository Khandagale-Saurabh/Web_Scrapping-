let input=document.querySelector('.input_class')
let ul=document.querySelector('.ul_class');

input.addEventListener('keydown',function(e)
{
  if(e.key=='Enter')
  {
      
    let text=input.value;
    let new_li=document.createElement('li');
    new_li.innerText=text

    new_li.addEventListener('dblclick',function(e){
      new_li.remove();
    })
    new_li.setAttribute('class','li_class');
      ul.appendChild(new_li);
      console.log("Appended  ",new_li);  
       input.value=" ";
      
  }
})




 
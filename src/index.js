
import sayHello from './script1.js'
import _ from './style.css'
import Icon from './image.jpg'
function createComponents(){
    
   const element=document.createElement('div')
    element.innerHTML= "This is a beautiful restaurant page"
    element.classList.add('div')

    const button=document.createElement('button')
    button.innerHTML='Click me and check the console'
    button.onclick=sayHello

    element.appendChild(button)
    

    //adding image to my page
    const myImage=new Image()
    myImage.src=Icon
     element.appendChild(myImage)

    return element

    }
document.body.appendChild(createComponents())


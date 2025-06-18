import {colors} from './export.js'
let dad = document.getElementById("main_dad")
colors.forEach(a1b => {
    let box = document.createElement("div");
    box.innerHTML = `
    <div> 
    <div style="background-color: ${a1b.color} " class="w-[90px] h-[90px] rounded-full"></div>
    <p class="text_one">${a1b.text}</p>
    <p class="text_two">${a1b.p}</p>
    </div>
    
    `
    dad.append(box)
})
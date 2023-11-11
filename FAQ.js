// const btns = document.querySelectorAll('.quation-btn')
// // Option one traversign DOM
// btns.forEach((btn)=>{
//     btn.addEventListener('click',(e)=>{
//         const addclass = e.currentTarget.parentElement.parentElement;
//         // toggle() Method return true and false value and convert true value in false and false value in true
//         addclass.classList.toggle('show-text');

//     })
// })



// Option Two
// target All quation main class
const quation = document.querySelectorAll('.quation')

quation.forEach((qtn)=>{
// selecting all button from selected main quation class
    const btn = qtn.querySelector('.quation-btn');
    // console.log(btn); All Button Element Selected

    btn.addEventListener('click',()=>{

quation.forEach((item)=>{ //button ke click event pe sabhi quation ki main class select hongi
// console.log(item)

if(item !== qtn){
    item.classList.remove('show-text')
}
})

        qtn.classList.toggle('show-text') //add class in qtn element
    })

})

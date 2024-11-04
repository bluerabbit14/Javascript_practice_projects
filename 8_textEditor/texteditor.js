let input=document.querySelector('#input_field')
console.log(input)
const action=document.querySelectorAll('#btn');  //return node list
let arr=[]
action.forEach(bt => {
    bt.addEventListener('click', (event)=> {
        event.preventDefault
        let perform=event.target.innerHTML
        switch(perform)
        { 
            case 'ABC': 
                //let result=input.toUpperCase();
                document.getElementById('output-field').innerHTML=`<span style="text-transform: uppercase;">${input.value}</span>`
                break;
            case 'abc':
                //let resul1=perform.toLowerCase();
                document.getElementById('output-field').innerHTML=`<span style="text-transform: lowercase;">${input.value}</span>`
                break;
            case 'Abc':
                //let resul2=String(perform).charAt(0).toUpperCase() + String(perform).slice(1);
                document.getElementById('output-field').innerHTML=`<span style="text-transform: capitalize;">${input.value}</span>`
                break;
            case 'B':
                //let result3=perform.bold();
                document.getElementById('output-field').innerHTML=`<span style="text-transform: bold;">${input.value}</span>`
                break;  
            case '/':
                //let result4=perform.italics();
                document.getElementById('output-field').innerHTML=`<span style="font-style: italic;">${input.value}</span>`
                break;    
            case 'underline':
                //let result5=perform.();
                document.getElementById('output-field').innerHTML=`<span style="text-decoration:underline">${input.value}</span>`
                break;

        }
   })
})




//get references to input,button and list
const input= document.querySelector('#favchap');
const button= document.querySelector('button');
const list= document.querySelector('#list');

//Add event listener for the button click
button.addEventListener('click',()=>{
    const chapter = input.value.trim();

    //prevent empty input
    if (chapter ==='') return;

    //create <li> element
    const listItem= document.createElement('li');

    //create delete button button
    const deleteButton= document.createElement('button');

    //set the text content of the <liv>  and <button>
    listItem.textContent= chapter ;
    deleteButton.textContent='❌';

    //Append th delete button of the li 
    listItem.appendChild(deleteButton);

    //Append the <li> to the <ul>
    list.appendChild(listItem);

    //Clear the input field and focus it 
    input.value='';
    input.focus();

    //Add delete functionality 
    deleteButton.addEventListener('click', ()=>{
        list.removeChild(listItem);
    });
});
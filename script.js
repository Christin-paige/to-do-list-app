
    //jquery
  function newItem() {
    //1. adding new item to list
 let li = $('<li></li>');
 let inputValue = $('#input').val();
 li.append(inputValue);
 


 if (inputValue === '') {
    alert('You must write something!');
 }else{
    $('#list').append(li);
 }
//2. crossing out an item

function crossOut() {

   li.toggleClass ('strike');

  }
  li.on('dblclick', function crossOut () {
        li.toggleClass('strike');
     });
 

//3. adding the delete button X

let crossOutButton = $('<crossOutButton></crossOutButton>');

crossOutButton.append(document.createTextNode('X'));

li.append(crossOutButton);
//4. adding class .delete, display: none from CSS
 crossOutButton.on('click', deleteListItem);
 function deleteListItem (){
    li.addClass('delete');
 }

 $('#list').sortable();
}

$(document).ready(function() {
  Materialize.updateTextFields();
  $('select').material_select();
  $('#modal-suppliers-new').modal();
  $('#modal-users-new').modal();

  $('.edit-button').click(function() {
    const id = $(this).attr('data-user-id');
    const username = $(userName).attr('data-user-name'),
    // const firstName= ,
    // const lastName = ,
    // const password= ,
    // const email=,
    // const rol=
    const obj = {
      id: id,
      // username,
      // firstName,
      // lastName,
      // password,
      // email,
      // rol
    }
    console.log("El objeto a editar es: ");
    console.log(obj);
     //myFunction(id);
  })

  $('#modal-users-edit').modal();

});

// function myFunction(id) {
//   $.ajax({
//       url: `/user/${id}/edit`,
//       dataType: 'json'
//     })
//     .then(userSelected => {
//       console.log(userSelected);
//       console.log("done");
//
//     })
//     .catch(e => console.log(e));
// }

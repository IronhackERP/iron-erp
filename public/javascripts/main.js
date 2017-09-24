$(document).ready(function() {
  Materialize.updateTextFields();
  $('select').material_select();
  $('#modal-suppliers-new').modal();
  $('#modal-users-new').modal();
  $('#modal-products-new').modal();
  $('#modal-users-edit').modal();

  //CORRECTO--->
  $('.edit-button-user').click(function(e) {
    e.preventDefault()
    const selectedUser = {
      id: $(this).attr('data-user-id'),
      username: $(this).parent().parent().children('.user-name').data('user-name'),
      firstName: $(this).parent().parent().children('.first-name').data('first-name'),
      lastName: $(this).parent().parent().children('.last-name').data('last-name'),
      email: $(this).parent().parent().children('.user-email').data('user-email'),
      rol: $(this).parent().parent().children('.user-rol').data('user-rol'),
    }
    setDataUserFormEdit(selectedUser);
  })
});

  //CORRECTO--->
function setDataUserFormEdit(selectedUser) {
  $('#title-modal-edit').text(`Edit User ${selectedUser.username}`);
  $('#id-modal-edit').attr('action',`/users/${selectedUser.id}/edit`);
  $('#user-modal-edit').val(selectedUser.username);
  $('#first-name-modal-edit').val(selectedUser.firstName);
  $('#last-name-modal-edit').val(selectedUser.lastName);
  $('#email-modal-edit').val(selectedUser.email);
  $(`select#rol-modal-edit-user > option[value=${selectedUser.rol}]`).attr('selected', 'selected');
  $('select#rol-modal-edit-user').material_select();
  Materialize.updateTextFields();
}

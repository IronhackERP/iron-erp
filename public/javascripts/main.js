$(document).ready(function() {

  $('.product-client-list').select2();

  Materialize.updateTextFields();
  $('select').material_select();

  $('#modal-suppliers-new').modal();
  $('#modal-users-new').modal();
  $('#modal-users-edit').modal();

  $('.edit-button').click(function(e) {
    e.preventDefault()
    const id = $(this).attr('data-user-id');
    const username = $(this).parent().parent().children('.user-name').data('user-name')
    const firstName = $(this).parent().parent().children('.first-name').data('first-name')
    const lastName = $(this).parent().parent().children('.last-name').data('last-name')
    const email = $(this).parent().parent().children('.user-email').data('user-email')
    const rol = $(this).parent().parent().children('.user-rol').data('user-rol')

    const selectedUser = {
      id: id,
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      rol: rol
    }
    console.log("El objeto a editar es: ");
    console.log(selectedUser);
    console.log(selectedUser.rol);

    setDataFormModal(selectedUser);
  })
});
//$('#rol-modal-edit> option[value="admin"]').attr('selected', 'selected');
function setDataFormModal(selectedUser) {
  $('#user-modal-edit').val(selectedUser.username);
  $('#first-name-modal-edit').val(selectedUser.firstName);
  $('#last-name-modal-edit').val(selectedUser.lastName);
  $('#email-modal-edit').val(selectedUser.email);
  if ((selectedUser.rol) === 'admin') {
    $('#rol-modal-edit> option[value="admin"]').attr('selected', 'selected');
  }
  if ((selectedUser.rol) === 'employee') {
    $('#rol-modal-edit> option[value="employee"]').attr('selected', 'selected');
  }
}

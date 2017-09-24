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

//EN PROCESO-->
  $('.add-button-product').click(function(e) {
    e.preventDefault()
    //objeto suppliers de show suppliers
    const suppliers = $('tbody#suppliers-all').attr('data-suppliers-all')
    console.log('estos son los suppliers:')
    console.log(suppliers) //==> undefined ???
    setDataFormNewProduct(suppliers);
  })

});

//EN PROCESO-->
function setDataFormNewProduct(suppliers) {
  //en select del formulario new product, añadir opcciones por cada supplier
  suppliers.forEach(supplier => {
    const option = $('<option>').text(supplier.name.toUpperCase()).attr('value', supplier.name)
    $('select.new-product-supplier').append(option)
    $('select.new-product-supplier').material_select();
    Materialize.updateTextFields();
  })
}


function setDataUserFormEdit(selectedUser) {
  $('#title-modal-edit').text(`Edit User ${selectedUser.username}`);
    $('#id-modal-edit').attr('prueba',`hola`);
  $('#id-modal-edit').attr('action',`/users/${selectedUser.id}/edit`);
  //CORRECTO--->
  $('#user-modal-edit').val(selectedUser.username);
  $('#first-name-modal-edit').val(selectedUser.firstName);
  $('#last-name-modal-edit').val(selectedUser.lastName);
  $('#email-modal-edit').val(selectedUser.email);
  $(`select#rol-modal-edit-user > option[value=${selectedUser.rol}]`).attr('selected', 'selected');
  $('select#rol-modal-edit-user').material_select();
  Materialize.updateTextFields();
}

function createItem(item) {
  $(".shopping-list").append(
      '<li>' +
            '<span class="shopping-item">' + item + '</span>' +
            '<div class="shopping-item-controls">' +
              '<button class="shopping-item-toggle">' +
                '<span class="button-label">check</span>' +
              '</button>' +
              '<button class="shopping-item-delete">' +
                '<span class="button-label">delete</span>' +
              '</button>' +
            '</div>' +
      '</li>'
    )
};

$(document).ready(function() {
  //Add item on Enter push
  $('#js-shopping-list-form').submit(function(event) {    
    event.preventDefault();
    var item = $('input').val();
    createItem(item);
  })

  //Check item off
  $(document).on('click', '.shopping-item-toggle', function() {
    $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
  })

  //Delete item off
  $(document).on('click', '.shopping-item-delete', function() {
    $(this).closest('li').remove();
  })
});

  
$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
       `<div class="message" data-message-id=${message.id}>
          <div class="message__header">
            <div class="message__header_name">
              ${message.user_name}
            </div>
            <div class="message__header_date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__text">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
       `<div class="message" data-message-id=${message.id}>
          <div class="message__header">
            <div class="message__header_name">
              ${message.user_name}
            </div>
            <div class="message__header_date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__text">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
  })
  .done(function(data){
    var html = buildHTML(data);
    $('.message-list').append(html);
    $('.new_message')[0].reset();
    $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
    $('.submit-button').prop('disabled' , false); 
  })
  .fail(function(){
    alert("メッセージ送信に失敗しました")
  })
})
});
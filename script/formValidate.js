$("#formContact").submit(function (event) {
  if($('#name').text() == '') alert('Пожалуйста, введите ваше ФИО')
  if($('#email').text() == '') alert('Пожалуйста, введите ваш email')
  if($('#phone').text() == '') alert('Пожалуйста, введите ваш номер телефона')
  if($('#problem-text').text() == '') alert('Пожалуйста, опишите ваши пожелания')

  event.preventDefault();
});

$(function(){
  var whatsapp = "https://api.whatsapp.com/send?phone=5491136393404&text=Por%20favor%20quiero%20informaci%C3%B3n%20de%20los%20cursos%20de%20mecanica";
  var messenger = "https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F1245073048897844%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink";
  var telefono = "tel:+5491136393404";
  var facebook = "https://www.facebook.com/MecanicaOficial";
  var twitter = "https://twitter.com/mecanicamoto";
  var youtube = "https://www.youtube.com/channel/UC064exgWRJfPtSLZs7shO7Q";


  $(".btn-whatsapp").click(function(){
    $(location).attr('href',whatsapp);
  });

  $(".messenger").click(function(){
    $(location).attr('href', messenger);
  });

  $(".phone").click(function(){
    $(location).attr('href', telefono);
  });

  $(".facebook").click(function(){
    $(location).attr('href', facebook);
  });

  $(".twitter").click(function(){
    $(location).attr('href', twitter);
  });

  $(".youtube").click(function(){
    $(location).attr('href', youtube);
  });


});

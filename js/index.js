$(function(){
  var whatsapp = "https://api.whatsapp.com/send?phone=5491136393404&text=Por%20favor%20quiero%20informaci%C3%B3n%20de%20los%20cursos%20de%20mecanica"

  $(".btn-whatsapp").click(function(){
    $(location).attr('href',whatsapp);
  });

  
});

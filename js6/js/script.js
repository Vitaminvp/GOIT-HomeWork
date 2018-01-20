
$(function(){//start jQuery

  var tabDivs = $('.tabNav > div');
  tabDivs.hide().filter(':first').show();
  var tabElem = $('.tabEl');
  tabElem.removeClass('selected');
  tabElem.filter(':first').addClass('selected');
  $('.tabEl a').click(function(){
      tabDivs.hide();
      var divId = $(this).attr('href');
      $(divId).show();
      tabElem.removeClass('selected');
      $(this).parent().addClass('selected');
  });

}); //end  jQuery

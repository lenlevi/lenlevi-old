$(document).ready(function() {
$('.faq-a').hide();

$('.faq-q').click(function () 
{
 if ( $(this).parent().children('.faq-a').css('display') == 'none') {
$(this).parent().children('.faq-a').slideDown('slow');
$(this).children().children().children().text('x');
} 
else 
{
$(this).parent().children('.faq-a').slideUp('slow');
$(this).children().children().children().text('+');
}
});

});

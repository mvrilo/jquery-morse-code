$(document).ready(function(){
	$('body').fadeIn(400);
	$('#text').focus();
	$('form').submit(function(){
		var checked = $(":checked").attr('value');
		var val = $('#text').val();
		$('#field').html($.morse(val, checked));
		return false;
	});
	if (navigator.platform.match(/linux/ig)){
		$('p:first').find('a:first')
			.attr('href','http://github.com/mvrilo/jquery-morse-code/tarball/master')
			.attr('alt','2.2 kb')
			.attr('title','2.2 kb');
	}
	$('h1').mouseover(function(){
		$(this).fadeOut(400,function(){$(this).text('jQuery Morse Code')});
		$(this).fadeIn(400);
	}).mouseout(function(){
		$(this).fadeOut(400,function(){$(this).text('try it!')});
		$(this).fadeIn(400);
	}).css('cursor','default');

	$('a[rel="external"]').attr('target','_blank');
});

$(document).ready(function(){
	$('span.index_puzzle').bind('click', function(event){
		spanClick(event, $(event.target).attr('id'));
	});
});

var pas_top = -28;
var pas_left = 51;
var pos_top = 100;
var pos_left = 100;
var line = 0;
for(var i = 1 ; i < 20 ; i++){
	var char_code = i + 96;
	var code = String.fromCharCode(char_code);
	var hexa_html = '<div class="hexagon ' + code + '"><span class="index_puzzle" id="' + code + '">??</span></div>';
	if (char_code == 97 ) { //a
		$('div.puzzle').append('<div id="line' + (++line).toString() +'"></div>');
		pos_left = 100;
		pos_top = 100;
	} else if (char_code == 100 ) { //d
		$('div.puzzle').append('<div id="line' + (++line).toString() +'"></div>');
		pos_left = 75;
		pos_top = 60;
	} else if (char_code == 104) { //h
		$('div.puzzle').append('<div id="line' + (++line).toString() +'"></div>');
		pos_left = 50;
		pos_top = -8;
	} else if (char_code == 109) { //m
		$('div.puzzle').append('<div id="line' + (++line).toString() +'"></div>');
		pos_left = 77;
		pos_top = -104;
	} else if (char_code == 113) { //q
		$('div.puzzle').append('<div id="line' + (++line).toString() +'"></div>');
		pos_left = 104;
		pos_top = -172;
	}
	$('div#line' + line.toString()).append(hexa_html);
	$('.hexagon.' + code).css({left: pos_left + 'px', top: pos_top + 'px'});
	pos_left += pas_left;
	pos_top += pas_top;
}

function compute(position){
	$('div.search').show();
	$('div.consigne').hide();
	$('div.ms').hide();
	$('div.count').hide();
	$.ajax({
		url:"resolve.php",
		type:'GET',
		async: true,
		dataType:'json',
		data: {position: position},
		success: function(data){
			var combinaisons = data['combinaisons'];
			var count = data['count'];
			var ms = data['ms'];
			$('div.consigne').show();
			$('div.search').hide();
			printCount(count);
			printTime(ms);
			printPuzzle(combinaisons[0], position);
		},
		error:function(data) {
		}
	});
}
function spanClick(event, position){
	$('span.index_puzzle').text('??');
	$(event.target).text(19);
	compute(position);
}
function printCount(count) {
	$('div.count').show();
	$('span#count').text(count);
}
function printTime(ms) {
	$('div.ms').show();
	$('span#ms').text(ms);
}
function printPuzzle(combinaison, position) {
	/*
	 a + b + c         = 38
	 d + e + f + g     = 38
	 h + i + j + k + l = 38
	 m + n + o + p     = 38
	 q + r + s         = 38
	 */
	if (position == 'b') {
		$('#a').text(combinaison.a);
		$('#b').text(combinaison.b);
		$('#c').text(combinaison.c);
		$('#d').text(combinaison.d);
		$('#e').text(combinaison.e);
		$('#f').text(combinaison.f);
		$('#g').text(combinaison.g);
		$('#h').text(combinaison.h);
		$('#i').text(combinaison.i);
		$('#j').text(combinaison.j);
		$('#k').text(combinaison.k);
		$('#l').text(combinaison.l);
		$('#m').text(combinaison.m);
		$('#n').text(combinaison.n);
		$('#o').text(combinaison.o);
		$('#p').text(combinaison.p);
		$('#q').text(combinaison.q);
		$('#r').text(combinaison.r);
		$('#s').text(combinaison.s);
	} else if (position == 'g') {
		/*
		 a + b + c         = 38
		 d + e + f + g     = 38
		 h + i + j + k + l = 38
		 m + n + o + p     = 38
		 q + r + s         = 38
		 */
		$('#c').text(combinaison.a);
		$('#g').text(combinaison.b);
		$('#l').text(combinaison.c);
		$('#b').text(combinaison.d);
		$('#f').text(combinaison.e);
		$('#k').text(combinaison.f);
		$('#p').text(combinaison.g);
		$('#a').text(combinaison.h);
		$('#e').text(combinaison.i);
		$('#j').text(combinaison.j);
		$('#o').text(combinaison.k);
		$('#s').text(combinaison.l);
		$('#d').text(combinaison.m);
		$('#i').text(combinaison.n);
		$('#n').text(combinaison.o);
		$('#r').text(combinaison.p);
		$('#h').text(combinaison.q);
		$('#m').text(combinaison.r);
		$('#q').text(combinaison.s);
	} else if (position == 'p') {
		/*
		 a + b + c         = 38
		 d + e + f + g     = 38
		 h + i + j + k + l = 38
		 m + n + o + p     = 38
		 q + r + s         = 38
		 */
		$('#l').text(combinaison.a);
		$('#p').text(combinaison.b);
		$('#s').text(combinaison.c);
		$('#g').text(combinaison.d);
		$('#k').text(combinaison.e);
		$('#o').text(combinaison.f);
		$('#r').text(combinaison.g);
		$('#c').text(combinaison.h);
		$('#f').text(combinaison.i);
		$('#j').text(combinaison.j);
		$('#n').text(combinaison.k);
		$('#q').text(combinaison.l);
		$('#b').text(combinaison.m);
		$('#e').text(combinaison.n);
		$('#i').text(combinaison.o);
		$('#m').text(combinaison.p);
		$('#a').text(combinaison.q);
		$('#d').text(combinaison.r);
		$('#h').text(combinaison.s);
	} else if (position == 'r') {
		/*
		 a + b + c         = 38
		 d + e + f + g     = 38
		 h + i + j + k + l = 38
		 m + n + o + p     = 38
		 q + r + s         = 38
		 */
		$('#s').text(combinaison.a);
		$('#r').text(combinaison.b);
		$('#q').text(combinaison.c);
		$('#p').text(combinaison.d);
		$('#o').text(combinaison.e);
		$('#n').text(combinaison.f);
		$('#m').text(combinaison.g);
		$('#l').text(combinaison.h);
		$('#k').text(combinaison.i);
		$('#j').text(combinaison.j);
		$('#i').text(combinaison.k);
		$('#h').text(combinaison.l);
		$('#g').text(combinaison.m);
		$('#f').text(combinaison.n);
		$('#e').text(combinaison.o);
		$('#d').text(combinaison.p);
		$('#c').text(combinaison.q);
		$('#b').text(combinaison.r);
		$('#a').text(combinaison.s);
	} else if (position == 'm') {
		/*
		 a + b + c         = 38
		 d + e + f + g     = 38
		 h + i + j + k + l = 38
		 m + n + o + p     = 38
		 q + r + s         = 38
		 */
		$('#q').text(combinaison.a);
		$('#m').text(combinaison.b);
		$('#h').text(combinaison.c);
		$('#r').text(combinaison.d);
		$('#n').text(combinaison.e);
		$('#i').text(combinaison.f);
		$('#d').text(combinaison.g);
		$('#s').text(combinaison.h);
		$('#o').text(combinaison.i);
		$('#j').text(combinaison.j);
		$('#e').text(combinaison.k);
		$('#a').text(combinaison.l);
		$('#p').text(combinaison.m);
		$('#k').text(combinaison.n);
		$('#f').text(combinaison.o);
		$('#b').text(combinaison.p);
		$('#l').text(combinaison.q);
		$('#g').text(combinaison.r);
		$('#c').text(combinaison.s);
	} else if (position == 'd') {
		/*
		 a + b + c         = 38
		 d + e + f + g     = 38
		 h + i + j + k + l = 38
		 m + n + o + p     = 38
		 q + r + s         = 38
		 */
		$('#h').text(combinaison.a);
		$('#d').text(combinaison.b);
		$('#a').text(combinaison.c);
		$('#m').text(combinaison.d);
		$('#i').text(combinaison.e);
		$('#e').text(combinaison.f);
		$('#b').text(combinaison.g);
		$('#q').text(combinaison.h);
		$('#n').text(combinaison.i);
		$('#j').text(combinaison.j);
		$('#f').text(combinaison.k);
		$('#c').text(combinaison.l);
		$('#r').text(combinaison.m);
		$('#o').text(combinaison.n);
		$('#k').text(combinaison.o);
		$('#g').text(combinaison.p);
		$('#s').text(combinaison.q);
		$('#p').text(combinaison.r);
		$('#l').text(combinaison.s);
	}
}

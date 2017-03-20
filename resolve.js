$(document).ready(function(){
	$('span.index_puzzle').bind('click', function(event){
		spanClick(event, $(event.target).data('id'));
	});
});

var first_left = 100;
var pas_left = 51;
var first_top = 100;
var pas_top = -28;
$('.hexagon.a').css({left: first_left + 'px', top: first_top + 'px'});
var pos_left = first_left + pas_left;
var pos_top = first_top + pas_top;
$('.hexagon.b').css({left: pos_left + 'px', top: pos_top + 'px'});
pos_left = pos_left + pas_left;
pos_top = pos_top + pas_top;
$('.hexagon.c').css({left: pos_left +'px', top: pos_top + 'px'});

first_left = 75;
first_top = 60;
$('.hexagon.d').css({left: first_left + 'px', top: first_top + 'px'});
pos_left = first_left + pas_left;
pos_top = first_top + pas_top;
$('.hexagon.e').css({left: pos_left + 'px', top: pos_top + 'px'});
pos_left = pos_left + pas_left;
pos_top = pos_top + pas_top;
$('.hexagon.f').css({left: pos_left + 'px', top: pos_top + 'px'});
pos_left = pos_left + pas_left;
pos_top = pos_top + pas_top;
$('.hexagon.g').css({left: pos_left + 'px', top: pos_top + 'px'});

first_left = 50;
first_top = -8;
$('.hexagon.h').css({left: first_left + 'px', top: first_top + 'px'});
pos_left = first_left + pas_left;
pos_top = first_top + pas_top;
$('.hexagon.i').css({left: pos_left + 'px', top: pos_top + 'px'});
pos_left = pos_left + pas_left;
pos_top = pos_top + pas_top;
$('.hexagon.j').css({left: pos_left + 'px', top: pos_top + 'px'});
pos_left = pos_left + pas_left;
pos_top = pos_top + pas_top;
$('.hexagon.k').css({left: pos_left + 'px', top: pos_top + 'px'});
pos_left = pos_left + pas_left;
pos_top = pos_top + pas_top;
$('.hexagon.l').css({left: pos_left + 'px', top: pos_top + 'px'});

first_left = 77;
first_top = -104;
$('.hexagon.m').css({left: first_left + 'px', top: first_top + 'px'});
pos_left = first_left + pas_left;
pos_top = first_top + pas_top;
$('.hexagon.n').css({left: pos_left + 'px', top: pos_top + 'px'});
pos_left = pos_left + pas_left;
pos_top = pos_top + pas_top;
$('.hexagon.o').css({left: pos_left + 'px', top: pos_top + 'px'});
pos_left = pos_left + pas_left;
pos_top = pos_top + pas_top;
$('.hexagon.p').css({left: pos_left + 'px', top: pos_top + 'px'});

first_left = 104;
first_top = -172;
$('.hexagon.q').css({left: first_left + 'px', top: first_top + 'px'});
pos_left = first_left + pas_left;
pos_top = first_top + pas_top;
$('.hexagon.r').css({left: pos_left + 'px', top: pos_top + 'px'});
pos_left = pos_left + pas_left;
pos_top = pos_top + pas_top;
$('.hexagon.s').css({left: pos_left + 'px', top: pos_top + 'px'});

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
		$('#a_index').text(combinaison.a);
		$('#b_index').text(combinaison.b);
		$('#c_index').text(combinaison.c);
		$('#d_index').text(combinaison.d);
		$('#e_index').text(combinaison.e);
		$('#f_index').text(combinaison.f);
		$('#g_index').text(combinaison.g);
		$('#h_index').text(combinaison.h);
		$('#i_index').text(combinaison.i);
		$('#j_index').text(combinaison.j);
		$('#k_index').text(combinaison.k);
		$('#l_index').text(combinaison.l);
		$('#m_index').text(combinaison.m);
		$('#n_index').text(combinaison.n);
		$('#o_index').text(combinaison.o);
		$('#p_index').text(combinaison.p);
		$('#q_index').text(combinaison.q);
		$('#r_index').text(combinaison.r);
		$('#s_index').text(combinaison.s);
	} else if (position == 'g') {
		/*
		     a + b + c         = 38
		   d + e + f + g     = 38
		 h + i + j + k + l = 38
		   m + n + o + p     = 38
		     q + r + s         = 38
		 */
		$('#c_index').text(combinaison.a);
		$('#g_index').text(combinaison.b);
		$('#l_index').text(combinaison.c);
		$('#b_index').text(combinaison.d);
		$('#f_index').text(combinaison.e);
		$('#k_index').text(combinaison.f);
		$('#p_index').text(combinaison.g);
		$('#a_index').text(combinaison.h);
		$('#e_index').text(combinaison.i);
		$('#j_index').text(combinaison.j);
		$('#o_index').text(combinaison.k);
		$('#s_index').text(combinaison.l);
		$('#d_index').text(combinaison.m);
		$('#i_index').text(combinaison.n);
		$('#n_index').text(combinaison.o);
		$('#r_index').text(combinaison.p);
		$('#h_index').text(combinaison.q);
		$('#m_index').text(combinaison.r);
		$('#q_index').text(combinaison.s);
	} else if (position == 'p') {
		/*
		 a + b + c         = 38
		 d + e + f + g     = 38
		 h + i + j + k + l = 38
		 m + n + o + p     = 38
		 q + r + s         = 38
		 */
		$('#l_index').text(combinaison.a);
		$('#p_index').text(combinaison.b);
		$('#s_index').text(combinaison.c);
		$('#g_index').text(combinaison.d);
		$('#k_index').text(combinaison.e);
		$('#o_index').text(combinaison.f);
		$('#r_index').text(combinaison.g);
		$('#c_index').text(combinaison.h);
		$('#f_index').text(combinaison.i);
		$('#j_index').text(combinaison.j);
		$('#n_index').text(combinaison.k);
		$('#q_index').text(combinaison.l);
		$('#b_index').text(combinaison.m);
		$('#e_index').text(combinaison.n);
		$('#i_index').text(combinaison.o);
		$('#m_index').text(combinaison.p);
		$('#a_index').text(combinaison.q);
		$('#d_index').text(combinaison.r);
		$('#h_index').text(combinaison.s);
	} else if (position == 'r') {
		/*
		 a + b + c         = 38
		 d + e + f + g     = 38
		 h + i + j + k + l = 38
		 m + n + o + p     = 38
		 q + r + s         = 38
		 */
		$('#s_index').text(combinaison.a);
		$('#r_index').text(combinaison.b);
		$('#q_index').text(combinaison.c);
		$('#p_index').text(combinaison.d);
		$('#o_index').text(combinaison.e);
		$('#n_index').text(combinaison.f);
		$('#m_index').text(combinaison.g);
		$('#l_index').text(combinaison.h);
		$('#k_index').text(combinaison.i);
		$('#j_index').text(combinaison.j);
		$('#i_index').text(combinaison.k);
		$('#h_index').text(combinaison.l);
		$('#g_index').text(combinaison.m);
		$('#f_index').text(combinaison.n);
		$('#e_index').text(combinaison.o);
		$('#d_index').text(combinaison.p);
		$('#c_index').text(combinaison.q);
		$('#b_index').text(combinaison.r);
		$('#a_index').text(combinaison.s);
	} else if (position == 'm') {
		/*
		 a + b + c         = 38
		 d + e + f + g     = 38
		 h + i + j + k + l = 38
		 m + n + o + p     = 38
		 q + r + s         = 38
		 */
		$('#q_index').text(combinaison.a);
		$('#m_index').text(combinaison.b);
		$('#h_index').text(combinaison.c);
		$('#r_index').text(combinaison.d);
		$('#n_index').text(combinaison.e);
		$('#i_index').text(combinaison.f);
		$('#d_index').text(combinaison.g);
		$('#s_index').text(combinaison.h);
		$('#o_index').text(combinaison.i);
		$('#j_index').text(combinaison.j);
		$('#e_index').text(combinaison.k);
		$('#a_index').text(combinaison.l);
		$('#p_index').text(combinaison.m);
		$('#k_index').text(combinaison.n);
		$('#f_index').text(combinaison.o);
		$('#b_index').text(combinaison.p);
		$('#l_index').text(combinaison.q);
		$('#g_index').text(combinaison.r);
		$('#c_index').text(combinaison.s);
	} else if (position == 'd') {
		/*
		     a + b + c         = 38
		   d + e + f + g     = 38
		 h + i + j + k + l = 38
		   m + n + o + p     = 38
		     q + r + s         = 38
		 */
		$('#h_index').text(combinaison.a);
		$('#d_index').text(combinaison.b);
		$('#a_index').text(combinaison.c);
		$('#m_index').text(combinaison.d);
		$('#i_index').text(combinaison.e);
		$('#e_index').text(combinaison.f);
		$('#b_index').text(combinaison.g);
		$('#q_index').text(combinaison.h);
		$('#n_index').text(combinaison.i);
		$('#j_index').text(combinaison.j);
		$('#f_index').text(combinaison.k);
		$('#c_index').text(combinaison.l);
		$('#r_index').text(combinaison.m);
		$('#o_index').text(combinaison.n);
		$('#k_index').text(combinaison.o);
		$('#g_index').text(combinaison.p);
		$('#s_index').text(combinaison.q);
		$('#p_index').text(combinaison.r);
		$('#l_index').text(combinaison.s);
	}
}

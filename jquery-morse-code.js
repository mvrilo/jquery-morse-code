/*
 * jQuery Morse Code
 * Encodes characters of a string into Morse Code and vice versa.
 *
 * Copyright (c) 2010, Murilo Santana <mvrilo@gmail.com>
 * Licensed under GPL <http://www.gnu.org/licenses/gpl.html>
 *
 * Example:
 *	$.morse('test', 'encode');	// to decode a string just change the second argument to 'decode'
 * or:
 *	$.morse('test');	// 'encode' is default
 * Returns:
 *	 - . ... -
 */

(function($){
	$.extend({
		morse : function(string, option){

			// All characters based on Wikipedia <http://en.wikipedia.org/wiki/Morse_code#Letters.2C_numbers.2C_punctuation>

			var key = [' ','.',',','?',"'",'!','/','(',')','&',	// special chars
			':',';','=','+','-','_','"','$','@',			// special chars
			'0','1','2','3','4','5','6','7','8','9',		// numbers
			'ä','å','ç','š','ð','ś','ł','é','ñ','ŝ','þ','ü',	// few non-latin letters
			'a','b','c','d','e','f','g','h','i','j','k','l','m',	// letters
			'n','o','p','q','r','s','t','u','v','w','x','y','z']; 	// letters

			var val = ['/','.-.-.-','--..--','..--..','.----.','-.-.--','-..-.','-.--.','-.--.-','.-...',	// special chars
			'---...','-.-.-.','-...-','.-.-.','-....-','..--.-','.-..-.','...-..-','.--.-.',		// special chars
			'-----','.----','..---','...--','....-','.....','-....','--...','---..','----.',		// numbers
			'.-.-','.--.-','-.-..','----','..--.','...-...','.-..-','..-..','--.--','...-.','.--..','..--',	// few non-latin letters
			'.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--',			// letters
			'-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..'];		// letters
			
			var str = string.toLowerCase();
			var enc = str.match(/[\-\.\/]+/g);
			var res = '&nbsp;';

			function toEncode(){
				$.each(str, function(index,value){
					var i = $.inArray(value, key);
					res += val[i] + ' ';
				});
			}
			
			if (str.length === 0){
				return false;
			}

			if (option == "encode" || option == undefined){
				toEncode();
				if (res.match(/undefined/gi)){
					res = ' ';
				}
				return res;
			}
			else if (option == "decode"){
				if (!str.match(/[^\.\s\-\/]+/g)){
					$.each(enc, function(index, value){
						var i = $.inArray(value, val);
						res += key[i];
						if (res.match(/undefined/gi)){
							res = ' ';
						}
					});
					return res;
				}
				else {
					return res;
				}
			}
			else {
				res = 'error';
				return res;
			}
			return false;
		}
	});
})(jQuery);

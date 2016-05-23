(function($) {
	$.fn.CherryBlossomFalling = function(options) {

		options = $.extend({
			cbElem: 		'elem',		//	桜のエレメント名
			cbImg:			'',			//	桜の画像
			cbWidth:		100,		//	桜の横幅
			cbHeight:		100,		//	桜の縦幅
			cbInitPosX:		0,			//	桜のX初期値
			cbInitPosY:		0,			//	桜のY初期値
			cbSpeedX:		10,			//	桜のXスピード
			cbSpeedY:		10,			//	桜のYスピード
			cbDirect:		0,			//	桜の落ちる方向 0:右 1:左
			cbFallSpeed:	10
		}, options);

		var x = options.cbInitPosX;
		var y = options.cbInitPosY;
		var windowWidth = $(window).width();
		var windowHeight = this.height();
		var siF = 0;
		var siC = 0;

		function getRandomArbitary(min, max) {
			return Math.random() * (max - min) + min;
		}

		function randumArray(array) {		//	配列のランダム
			var i = array.length;
			while(i){
				var j = Math.floor(Math.random()*i);
				var t = array[--i];
				array[i] = array[j];
				array[j] = t;
			}
			return array;
		}

		function letterPosX(letterposx) {
			if ( $(window).width() > 1000 ) {
				return ($(window).width()/2) + letterposx;
			} else {
				return 500;
			}
		}

		//	桜が落ちる場所
		function falling() {
			if ( options.cbDirect === 0 ) {
				//	右方向
				x += options.cbSpeedX;
				y += options.cbSpeedY;

				  if ( x > (windowWidth - 40) || y > (windowHeight - 40)  ) {
					x = options.cbInitPosX;
					y = 0;
				}
			}
			if ( options.cbDirect === 1 ) {
				//	左方向
				x -= options.cbSpeedX;
				y += options.cbSpeedY;

				if ( x < 0 || y > windowHeight ) {
					x = options.cbInitPosX;
					y = 0;
				}
			}

			$('.'+options.cbElem).css({
				display: 'block',
				top: y+'px',
				left: x+'px'
			});
		}

		if ( $('.'+options.cbElem).length === 0 ) {
			this.append('<div class="'+options.cbElem+'"><img src="'+options.cbImg+'"></div>');
		}

		$('.'+options.cbElem+' img').css({
			maxWidth: '100%',
			width: '100%'
		});

		var pi = parseInt(options.cbWidth);
		var marginPos = parseInt($('.'+options.cbElem+' img').css('margin-top').replace('px',''));
		var degFlag = -1;
		//	桜のスプライト
		function cherry() {
			marginPos += (function(mp) {
				if (mp<=options.cbWidth*9*-1) {
					degFlag = 1;
				}
				if (mp>=0) {
					degFlag = -1;
				}
				return pi*degFlag;
				})(marginPos);
			$('.'+options.cbElem+' img').css({
				marginTop: marginPos+'px'
			});
		}

		$('.'+options.cbElem).css({
			display: 'none',
			overflow: 'hidden',
			position: 'absolute',
			width: options.cbWidth+'px',
			height: options.cbHeight+'px',
			transform: 'rotate('+getRandomArbitary(0,45)+'deg)'
		});

		//	ウィンドウリサイズ
		$(window).on('resize', function() {
			windowWidth = $(window).width();
		});


		siF = setInterval(falling, options.cbFallSpeed);
		siC = setInterval(cherry, getRandomArbitary(80,100));

	};

})(jQuery);
//<div id="cherryblossomfalling"></div>

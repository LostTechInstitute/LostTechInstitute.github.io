function GETRandomArbitary(min, max) {
	return Math.random() * (max - min) + min;
}
$(window).on('load', function() {
			$('#frame')
				.fadeIn(2000, function() {

					//	桜を散らす
					var jjj = new Array(40);
					for (var i=0; i<jjj.length; i++) {
						var wi = parseInt(GETRandomArbitary(10,30));
						$('#cherryblossomfalling').CherryBlossomFalling({
								cbElem: 		'hana'+i,
								cbImg:			'./media/img/flower.png',
								cbWidth:		wi,
								cbHeight:		wi,
								cbInitPosX:		GETRandomArbitary(-500,$(window).width()-360),
								cbInitPosY:		GETRandomArbitary(-500,-100),
								cbSpeedX:		GETRandomArbitary(1,3),
								cbSpeedY:		GETRandomArbitary(1,3),
								cbDirect:		0,
								cbFallSpeed:	15
							});
					}

					
				});
		});

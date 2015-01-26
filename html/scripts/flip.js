function Flip(cmp){
	var me = this;
	var _$tar = $(cmp);
	this._index = -1;
	this._time = 5000;
	this._init = function(){
		var $flip = _$tar.find('.flip_item');
		var lth = $flip.length;
		me._max = lth;
		for(var i= 0 ;i<lth;i++){
			var url = $flip.eq(i).attr('data-img');
			$flip.eq(i).css({"background-image":"url("+url+")"});

		}
		me._loop();
	};
	this._loop = function(){
		me._index ++;
		if(me._index>=me._max){
			me._index =0;
		}
		me._flip();

		me._timeOut = setTimeout(me._loop,me._time);
	};
	this._stopLoop = function(){
		clearTimeout(me._timeOut);
	};
	this._flip = function(){
		_$tar.find('.flip_item.on').removeClass('on');
		_$tar.find('.flip_item').eq(me._index).addClass('on');
		_$tar.find('.flip_nav .on').removeClass('on');
		_$tar.find('.flip_nav span').eq(me._index).addClass('on');
	};
	_$tar.find('.flip_nav>span').on('click',function(){
		var index = parseInt($(this).attr('data-index'));
		me._index =index;
		me._flip();

	});
	this._init();
	var flip = {};
	flip.stopLoop = me._stopLoop;
	flip.startLoop = me._loop;
	flip.setTime = function(t){
		me._time = t;
		// me._loop();
	};
	return flip;

}
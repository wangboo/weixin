exports.joke = (data, req, res, next) ->
	res.reply "昨天陪哥们去相亲，女方要礼金10万大洋并曰：“在一起50年的话，一天才5块4毛8，对没房没车的你，已经很便宜了。”
	我看着憋成猪肝色脸的哥们，实在忍不住了，说：“这样吧！咱一天给21，不，22块，按天结账，50年后你还能多赚4倍的钱！”
	那女的就不说话了。。。"


#新增joke
exports.new  = (req, res) ->
	console.log "new joke"
	joke = req.query
	res.send {ok: true}
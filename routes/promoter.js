exports.home = function(req, res){
  	if(!req.session.auth){
   		res.render('home', { title: 'WeSmile Promoter' });
   		return;
  	}
	res.render('home', { title: 'WeSmile Promoter - Logged in' });
};

exports.home_post_handler = function(req, res){
	//TODO: Hash password
	if(req.body.password != "hej"){
		req.session.destroy();
		res.redirect('/');
		return;	
	}
	req.session.auth = true;
	res.redirect('/');
};

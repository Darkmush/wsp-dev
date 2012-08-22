var util = require('util');

exports.home = function(req, res){
  	if(!req.session.auth){
   		res.render('home', { title: 'WeSmile Promoter' });
   		return;
  	}
	res.render('promoview', { title: 'WeSmile Promoter - Logged in' });
};

exports.home_post_handler = function(req, res){

	var pwstring = req.body.password || "";
	var d = require('crypto').createHash('sha1').update(pwstring).digest('hex');
	if(d != "065b68a1145ba11e6df44564233c2ffbe901c105"){
		req.session.destroy();
		res.redirect('/');
		return;	
	}
	req.session.auth = true;
	res.redirect('/');
};

exports.embed_post_handler = function(req, res){
	var string = req.body.code || "no code";
	if(string == "no code"){
		res.redirect('/');
		return;	
	}
	var src = string.substring(71,158);
	src += "&show_artwork=false";

	var sourcestring = "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\""+ src + "\"></iframe>"

        //var fs = require('fs');
	//fs.writeFile("test.html", sourcestring, function(err){
        //if (err) console.log(err);
        //});
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(sourcestring);  
        res.end();  
};



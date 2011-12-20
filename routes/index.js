
/*
 * GET home page.
 */

exports.index = function(req, res){
  if(Math.random() > 0.5)
    next();
  res.render('index', { title: 'Express' })
};

exports.test = function(req, res){
  res.render('index', { title: 'Awesome test' })
};

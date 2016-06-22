var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
module.exports = function(app , dir , model){
  app.get('/:id*', function(req,res){
      if(req.params.id != null){
          model.find({_modID : req.params.id}, function(err,data){
            data = data || [];
            console.log(data);
            if(data.length)
              res.redirect(data[0].url);
            else{
              res.render('index' , {err : 'Requested Page Not found'});
            }
          });
      }
  });
  app.get('/' ,function(req,res){
      // fs.readFile(dir + '/index.html' , function(err,file){
      //   if(err)
      //       res.render('error' , {err:err});
      //     else {
      //       res.send(file.toString());
      //     }
        // });
      res.render('index');

  });
}

var express = require('express');
var mongoose = require('mongoose');

module.exports = function(app , dir , model){
  app.get('/api/*' ,function(req,res){
      var id = req.url.substr(req.url.indexOf('/api/')+5,req.url.length);
      //console.log(id, req.url.indexOf('/api/'));
       if(id.match(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)==null)
            res.send({error : 'Not a Url'});
      else{
        model.find({url : id } , function(err ,data){
          if(data.length)
          {
              console.log("this is saved data ",data);
              res.status(200).json({
              orgLink  : data[0].url,
              shotlink : 'http://urlshrt.herokuapp.com/' + data[0]._modID
            });
          }
               else{
                 model.find().count().exec(function(err,c){
                model.create({
                  url : id,
                  _modID : c +1
                } , function(err , data){
                  // console.log("fdhthrtrtddbrhbb ",model.find().count().exec(function(err,c){retur c}));
                  if(err){
                    console.log(err);
                    res.status(500).json(err);
                  }
                  else{
                  res.status(200).json({
                    orgLink  : data.url,
                    shotlink : 'http://urlshrt.herokuapp.com/' + data._modID
                  });
                }});
              });
              }

        })
    //   model.find({url : id} , function(err , data){
    //     console.log(err);
    //     if(data.length){
    //         console.log(data);
    //       res.status(200).json({
    //         orgLink  : data[0].url,
    //         shotlink : 'loclhost:3000/' + data[0]._modID
    //       });
    //     }
    //
    //      else{
    //        model.find().count().exec(function(err,c){
    //       model.create({
    //         url : id,
    //         _modID : c +1
    //       } , function(err , data){
    //         // console.log("fdhthrtrtddbrhbb ",model.find().count().exec(function(err,c){return c}));
    //         if(err){
    //           console.log(err);
    //           res.status(500).json(err);
    //         }
    //         else{
    //         res.status(200).json({
    //           orgLink  : data.url,
    //           shotlink : 'loclhost:3000/' + data._modID
    //         });
    //       }});
    //     });
    //     }
    //   });
    }
  });
}

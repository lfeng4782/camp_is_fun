var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
     {
          name: "Cloud's Rest",
          image: "https://www.olympicnationalparks.com/media/610231/sol-duc-hot-springs-resort-camping_112_1000x667.jpg",
          description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
     },
       {
          name: "Desert Mesa",
          image: "https://www.olympicnationalparks.com/media/610231/sol-duc-hot-springs-resort-camping_112_1000x667.jpg",
          description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
     },
       {
          name: "Canyon Floor",
          image: "https://www.olympicnationalparks.com/media/610231/sol-duc-hot-springs-resort-camping_112_1000x667.jpg",
          description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
     }
     ]

function seedDB(){
     //remove all campgrounds
     Campground.remove({}, function(err){
          if(err){
               console.log(err);
          }
          console.log("Removed campgrounds!!!");
          //must put this part inside the call back to make sure "remove" run first!!!
          //add a few campgrounds
          data.forEach(function(seed){
               Campground.create(seed, function(err, campground){
                    if(err){
                         console.log(err);
                    }else{
                         console.log("Added a campground");
                         //create a momment on each campground
                         Comment.create({
                              text:"This place is great, but I wish where was internet",
                              author:"Homer"
                         }, function (err, comment){
                              if(err){
                                   console.log(err);
                              }else{
                         //associate with the campground
                                   campground.comments.push(comment);
                                   campground.save();
                                   console.log("Created new comment!");
                              }
                         });
                    }
          });
     });
     
     });
}

module.exports = seedDB;
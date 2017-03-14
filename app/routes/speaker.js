import Ember from 'ember';
var speakers = [{
  name: "Bryan Vaz",
  website: "https://www.linkedin.com/in/bryanvazhk/",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
   },{
  name: "Christopher Hugentobler",
  website:"https://www.linkedin.com/in/hugentobler/",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
   }, {
  name: "Eric Byron",
  website:"https://www.linkedin.com/in/eric-byron-4079382/",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "Karena Belin",
  website:"https://www.linkedin.com/in/karenabelin/",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "Gram Milosevic",
  website:"https://www.linkedin.com/in/grahammilosevic/",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
   }];

export default Ember.Route.extend({
  model() {
    return speakers;
  },
});

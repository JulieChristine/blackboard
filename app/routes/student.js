import Ember from 'ember';
var students = [{
  name: "Jeffery Lee",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
   },{
  name: "Julie Wolsak",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
   }, {
  name: "Alexandra Axenti",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "Sheeja Sankar",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "Brian Law",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "Steve Safarowic",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "David Fung",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "Jeffrey Li",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "Kevin Cho",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "Ken Ng",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "Gabriel Jaeger",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "Isaac Wong",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "Pace Lee",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "Nadim Rai",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "Richard Ng",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "Taral Gurung",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },];

export default Ember.Route.extend({
  model() {
    return students;
  },
});

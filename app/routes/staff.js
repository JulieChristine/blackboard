import Ember from 'ember';

var employees = [{
  name: "Lavine Hemlani",
  designation: "CEO & Founder",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
   },{
  name: "Resham Hemlani",
  designation: "Co-founder",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
   }, {
  name: "Gordon Lau",
  designation: "Co-founder",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "Stephanie Martin",
  designation: "CTO",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
  },{
  name: "Ian Munene",
  designation: "Instructor",
  info:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw_yNaZGFw9TE-HyPFLgh8PV1fMB7LWhxfms8yCIsCGazhcoAWgKWILo"
   }];

export default Ember.Route.extend({
  model() {
    return employees;
  },
});

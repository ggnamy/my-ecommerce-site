const express = require('express');
const router = express.Router();

const subject = require('../data/contact_subjec.json');

router.get('/',(req,res)=>{
   // res.end('{"contactSubject":["General Enqury","Class","Scheudule","Instructor","Price","Other","GG"]}');
   res.json(subject);
});

module.exports = router;


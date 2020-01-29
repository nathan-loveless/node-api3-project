const express = require('express');
const db = require('../users/userDb.js');
const router = express.Router();


// router.get('/', (req, res) => {
//   db.get()
//     .then(user =>{
//       res.status(200).json(user);    
//     })
//     .catch(err => res.status.json(err));
// });

// router.get('/:id', validateUserId, (req, res) => {
//   res.status(200).json(req.user);
// });

// router.post('/', (req, res) => {
//   console.log('Inside router.post()')
//   // res.status(201).json(req.user);
//   const name = req.body;
//   console.log('Body: ', name)
//   db.insert(name)
//   .then(user => {
//     res.status(201).json(user);  
//   })
//   .catch(err => res.status(500).json(err));

// });

router.post('/', (req, res) => {  
  const name = req.body;
  console.log('Body: ', name)
  db.insert( name )
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({
        success: false,
        errorMessage: "No user added", error })
    })
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

// router.put('/:id', (req, res) => {
//   console.log('ID: ', req.params.id, 'Body: ', req.body);
//   db.update(req.params.id, req.body)
//     .then(user => {
//       res.status(200).json(user);
//     })
//     .catch(err => res.status(500).json({message: 'Internal server error'}))
//   });

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

// function validateUserId(req, res, next) {
//   const {id} = req.params;
//   db.getById(id)
//     .then(user => {
//       if(user) {
//         req.user = user;
//         next();
//       }
//       else {
//         res.status(404).json({message: 'User not found'});
//       }     
//     })
//     .catch(err => res.status(500).json(err));
// }

// function validateUser(req, res, next) {
//   console.log('validateUser before insert body: ', req.body);
//   db.insert(req.body)
//     .then(user => {
//       console.log('Inside .then-validateUser');
//       if(user) {
//         req.user = user;
//         next();
//       }
//       else if(!user) {
//         console.log('Inside (else if) .then-validateUser');
//         res.status(400).json({message: 'Missing user data'});
//       }
//       else {
//         console.log('Inside else .then-validateUser');
//         res.status(400).json({message: 'Missing required name field'})
//       }    
//     })
//     .catch(err => res.status(500).json(err));
// }


module.exports = router;

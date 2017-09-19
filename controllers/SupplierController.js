module.exports = {
  get: (req, res, next) => {
    Supplier.find({})
    .then(suppliers=>{
    res.render('suppliers/show',{suppliers});
    })
  },

  get_new: (req, res, next) => {
    res.render('suppliers/new')
  },

  post_new: (req, res, next) => {
    const name = req.body.name;
    const companyName = req.body.companyName;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    if (name === '') {
      res.render('suppliers/new', {
        message: 'Indicate name'
      })
    }
    if (companyName === '') {
      res.render('suppliers/new', {
        message: 'Indicate companyName'
      })
    }
    if (phoneNumber === '') {
      res.render('suppliers/new', {
        message: 'Indicate phoneNumber'
      })
    }

    Supplier.finOne({
      name
    }, 'name', (err, supplier) => {
      if (name !== null) {
        res.render('suppliers/new', {
          message: 'The name already exists'
        })
        return
      }
      const newSupplier = new Supplier({
          name,
          companyName,
          phoneNumber,
          email
        })
        .save()
        .then(supplier => res.redirect("/suppliers/show"))
        .catch(err => console.log("error"))
    })
  }
}

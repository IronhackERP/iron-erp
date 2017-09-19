module.exports = {
  get: (req, res, next) => {
    res.render('supplier/list');
  },
  get_new: (req, res, next) => {
    res.render('suppliers/new')
  }
}

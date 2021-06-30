const {Schema, model} = require('mongoose');

const companiesSchema = new Schema({
    companyId: { type: Number, required: true},
    name: { type: String, required: true},
    employers: { type: Number, required: true}
});

const companies = model('Company', companiesSchema);

exports.list = (async (req, res, next) => {
    const companiesList = await companies.find({}).lean();
    res.status(200).json(companiesList);
});

exports.findById = (async (req, res, next) => {
    const id = +req.params.id;
    const obj = await companies.findOne({companyId: id});
    res.status(200).json(obj);
});

exports.delete = (async (req, res, next) => {
    const id = +req.params.id;
    await companies.deleteOne({companyId: id});
    res.status(200).redirect('/company');
});

exports.create = (async (req, res, next) => {
    companies.create(req.body, err => {
        if (err) throw err;
    });
    const obj = await companies.findOne({companyId: req.body.companyId});
    res.status(200).json(obj);
});
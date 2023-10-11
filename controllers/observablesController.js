const Observables = require("../models/Observables");

const getObservables = async (req, res) => {
    try {
        const observables = await Observables.find();
        res.json(observables);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getObservable = async (req, res) => {
    try {
        const observable = await Observables.findById(req.params.id);
        res.json(observable);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getObservables,
    getObservable,
};
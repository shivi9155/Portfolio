const Certification = require('../models/Certification');

exports.getCertifications = async (req, res) => {
    try {
        const certifications = await Certification.find().sort({ createdAt: -1 });
        res.json(certifications);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createCertification = async (req, res) => {
    try {
        const newCert = new Certification(req.body);
        const savedCert = await newCert.save();
        res.status(201).json(savedCert);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateCertification = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCert = await Certification.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedCert);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteCertification = async (req, res) => {
    try {
        const { id } = req.params;
        await Certification.findByIdAndDelete(id);
        res.json({ message: 'Certification deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

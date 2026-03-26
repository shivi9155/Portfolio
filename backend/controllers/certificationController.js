const Certification = require('../models/Certification');

const normalizeImagePath = (value) => {
    if (typeof value !== 'string') {
        return value;
    }

    return value.replace(/^\/?public\//, '/');
};

const normalizeCertification = (certification) => {
    const plainCertification = certification.toObject ? certification.toObject() : certification;
    return {
        ...plainCertification,
        image: normalizeImagePath(plainCertification.image),
    };
};

exports.getCertifications = async (req, res) => {
    try {
        const certifications = await Certification.find().sort({ createdAt: -1 });
        res.json(certifications.map(normalizeCertification));
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createCertification = async (req, res) => {
    try {
        const newCert = new Certification({
            ...req.body,
            image: normalizeImagePath(req.body.image),
        });
        const savedCert = await newCert.save();
        res.status(201).json(normalizeCertification(savedCert));
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateCertification = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCert = await Certification.findByIdAndUpdate(
            id,
            {
                ...req.body,
                image: normalizeImagePath(req.body.image),
            },
            { new: true }
        );
        res.json(normalizeCertification(updatedCert));
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

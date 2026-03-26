const Project = require('../models/Project');

const normalizeImagePath = (value) => {
    if (typeof value !== 'string') {
        return value;
    }

    return value.replace(/^\/?public\//, '/');
};

const normalizeProject = (project) => {
    const plainProject = project.toObject ? project.toObject() : project;
    return {
        ...plainProject,
        image: normalizeImagePath(plainProject.image),
    };
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects.map(normalizeProject));
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createProject = async (req, res) => {
    try {
        const newProject = new Project({
            ...req.body,
            image: normalizeImagePath(req.body.image),
        });
        const savedProject = await newProject.save();
        res.status(201).json(normalizeProject(savedProject));
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProject = await Project.findByIdAndUpdate(
            id,
            {
                ...req.body,
                image: normalizeImagePath(req.body.image),
            },
            { new: true }
        );
        res.json(normalizeProject(updatedProject));
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        await Project.findByIdAndDelete(id);
        res.json({ message: 'Project deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

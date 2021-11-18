
import Materia from '../models/materia';

export const index = async (req, res) => {
    const materias = await Materia.findAll({});
    res.json({ data: materias.map((materia) => materia.toJSON()) });
};


export const show = async (req, res) => {
    const materia = await Materia.findByPk(req.params.id);
    if (materia) {
        res.json({ data: materia.toJSON() });
    } else {
        res
            .status(404)
            .json({ message: `No se encontro la materia con el id ${req.params.id}` });
    }
};

export const update = async (req, res) => {
    try {
        if (req.body.name !== undefined) {
            const materia = await Materia.findByPk(req.params.id);
            materia.name = req.body.name;
            await materia.save();
            res.status(200).send({ id: materia.id });
        } else {
            res.status(400).json('Nombre no recibido');
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};

export const create = async (req, res) => {
    try {
        if (req.body.name !== undefined) {
            const materia = await Materia.create({ name: req.body.name });
            res.status(200).send({ id: materia.id });
        }
        else {
            res.status(400).json("Nombre no recibido");
        }
    } catch (err) {
        return res.status(500).send(err);
    }
}
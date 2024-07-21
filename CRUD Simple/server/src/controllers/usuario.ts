import { Request, Response } from 'express';
import Usuario from '../models/usuario';

export const getUsers = async (req: Request, res: Response) => {
    const listUsers = await Usuario.findAll();

    res.status(200).json(listUsers)
}


export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await Usuario.findByPk(id);

    if (user) {
        res.status(200).json(user)
    } else {
        res.status(404).json({
            msg: `¡El usuario con el id: ${id} no ha sido encontrado!`
        })
    };



}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await Usuario.findByPk(id);
    if (!user) {
        res.status(404).json({
            msg: `¡El usuario con el id: ${id} no ha sido encontrado!`
        })
    } else {
        await user.destroy();
        res.status(200).json({
            msg: `¡El usuario fue eliminado con éxito!`
        })
    }
}


export const postUser = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Usuario.create(body);

        res.json({
            msg: `¡El producto fue agregado con éxito`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrio un error...`
        })
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params

    try {
        const user = await Usuario.findByPk(id);
        if (user) {
            await user.update(body);
            res.json({
                msg: `El Usuario fue actualizado!`
            })
        } else {
            res.status(404).json({
                msg: `¡El usuario con el id: ${id} no ha sido encontrado!`
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrio un error...`
        })
    }
};


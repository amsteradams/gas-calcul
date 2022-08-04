import express from 'express'
import gasCalcul from '../gasCalcul.js';
const router = express.Router();
export const getGas = async (req, res) => {
    const rep = await gasCalcul(req.params.amount);
    res.json(rep);
}



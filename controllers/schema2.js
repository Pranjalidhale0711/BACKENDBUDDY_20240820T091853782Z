// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const Schema2 = require('../models/schema2Schema');

// CRUD operations for schema2
// Create Controller 
const createSchema2 = async (req, res) => { 
    const { eee } = req.body;
    try {
        const schema2 = await Schema2.create({ eee }) 
        await schema2.save();
        res.status(201).json(schema2);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateSchema2 = async (req, res) => { 
    const _id=req.params.id;
    const { eee } = req.body;
    try {
        const schema2 = await Schema2.findByIdAndUpdate( _id, { eee },{new:true}) 
        if (!schema2) {
            return res.status(404).send('schema2 not found');
        }
        await schema2.save();
        res.status(201).json(schema2);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteSchema2 = async (req, res) => { 
    const _id=req.params.id;
    try {
        const schema2 = await Schema2.findById(_id)
        if (!schema2) {
            return res.status(404).send('schema2 not found');
        }
        await Schema2.deleteOne({_id: _id})
        await schema2.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getSchema2 = async (req, res) => { 
    const _id=req.params.id;
    try {
        const schema2 = await Schema2.findById(_id)
        if (!schema2) {
            return res.status(404).send('schema2 not found');
        }
        res.status(201).json(schema2);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllSchema2 = async (req, res) => { 
    try {
        const schema2 = await Schema2.find({})
        if (!schema2) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(schema2);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createSchema2,
    updateSchema2,
    deleteSchema2,
    getSchema2,
    getAllSchema2
}
const express = require("express");
const list = require("../models/list");

const router = express.Router();

router.post("/add", async(req, res) => {
    const { text } = req.body;
    try {
        await list.create({text});
        res.status(200).json({message: "list created success"});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
})

router.get("/show", async(req, res) => {
    try {
        const items = await list.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
})

router.delete("/value/:id", async(req, res) => {
    const {id} = req.params;
    try {
        await list.findByIdAndDelete(id);
        res.status(200).json({message: "value deleted success"});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
})

router.put('/edit/:id', async (req, res) => {
    const { text } = req.body;

    try {
        const updatedData = await list.findByIdAndUpdate(req.params.id, { text }, { new: true });
        console.log("Data Updated");
        res.status(201).json(updatedData);
    }
    catch (err) {
        console.log(err);
    }
})

router.get("/getuser/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await list.findOne({ _id: id });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user); // Sending user data in the response
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
module.exports = router;
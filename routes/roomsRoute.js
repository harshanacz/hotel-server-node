const express = require("express"); 
const router = express.Router();
const room = require("../models/room.js"); 

router.get("/getallrooms", async (req, res) => {
    try { 
        const rooms = await room.find({});
        return res.send(rooms);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


module.exports = router;

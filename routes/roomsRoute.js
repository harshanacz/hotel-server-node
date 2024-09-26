const express = require("express"); 
const router = express.Router();
const Room = require("../models/room.js");  // Updated variable name to follow convention

// Endpoint to get all rooms
router.get("/getallrooms", async (req, res) => {
    try { 
        const rooms = await Room.find({});
        return res.send(rooms);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// Endpoint to get a room by ID
router.get("/:id", async (req, res) => {
    try {
        const roomId = req.params.id; // Get the room ID from the URL parameters
        const room = await Room.findById(roomId); // Fetch the room by ID

        if (!room) {
            return res.status(404).json({ message: "Room not found" }); // Handle not found
        }

        return res.send(room); // Return the room data
    } catch (error) {
        return res.status(500).json({ message: error.message }); // Handle server errors
    }
});

module.exports = router;

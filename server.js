console.log("server.js loaded");
// Import required modules
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');


// Initialize Express app
const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Configuration
const PORT = process.env.PORT || 3000;

// In-memory storage for bus locations
let busLocations = {};

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get current bus locations
app.get('/api/buses', (req, res) => {
    res.json(busLocations);
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        activeBuses: Object.keys(busLocations).length,
        connectedClients: io.sockets.sockets.size
    });
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log(`✅ New client connected: ${socket.id}`);
    
    // Send current bus locations to newly connected client
    socket.emit('initialLocations', busLocations);

    // Handle driver location updates
    socket.on('driverLocation', (data) => {
        const { lat, lng, busId, timestamp } = data;
        
        console.log(`📍 Location update from ${busId}: [${lat}, ${lng}]`);
        
        // Store location in memory
        busLocations[busId] = {
            lat,
            lng,
            busId,
            timestamp,
            lastUpdated: new Date().toISOString()
        };

        // Broadcast to all connected students
        io.emit('busLocation', busLocations[busId]);
    });

    // Handle driver disconnect
    socket.on('driverDisconnect', (data) => {
        const { busId } = data;
        console.log(`🚫 Driver ${busId} disconnected`);
        
        // Optionally remove bus from active tracking
        // delete busLocations[busId];
    });

    // Handle client disconnect
    socket.on('disconnect', () => {
        console.log(`❌ Client disconnected: ${socket.id}`);
    });

    // Error handling
    socket.on('error', (error) => {
        console.error('Socket error:', error);
    });
});

// Cleanup old locations (optional - removes buses inactive for 5 minutes)
setInterval(() => {
    const now = Date.now();
    const TIMEOUT = 5 * 60 * 1000; // 5 minutes

    Object.keys(busLocations).forEach(busId => {
        const bus = busLocations[busId];
        if (now - bus.timestamp > TIMEOUT) {
            console.log(`🕒 Removing inactive bus: ${busId}`);
            delete busLocations[busId];
        }
    });
}, 60000); // Check every minute

// Start server
server.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════════╗
    ║   🚌 Bus Tracking Server Started      ║
    ╠════════════════════════════════════════╣
    ║   Port: ${PORT}                        ║
    ║   Environment: ${process.env.NODE_ENV || 'development'}║
    ║                                        ║
    ║   Endpoints:                           ║
    ║   • http://localhost:${PORT}           ║
    ║   • http://localhost:${PORT}/health    ║
    ║   • http://localhost:${PORT}/api/buses ║
    ╚════════════════════════════════════════╝
    `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('⚠️  SIGTERM received, closing server gracefully...');
    server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('\n⚠️  SIGINT received, closing server gracefully...');
    server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
    });
});
# 🚌 College Bus Tracker

Real-time bus tracking system with live GPS updates.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Server
```bash
npm start
```

### 3. Open in Browser
- **Students:** http://localhost:3000/index.html
- **Drivers:** http://localhost:3000/driver.html

## 📱 Usage

### For Drivers:
1. Open `driver.html` on your mobile phone
2. Enter Bus ID (e.g., "Bus 1")
3. Click "Start Tracking"
4. Grant location permissions
5. Keep page open while driving

### For Students:
1. Open `index.html` in any browser
2. View live bus location on map
3. Map updates automatically every 5 seconds

## 🌐 Network Access (Same WiFi)

### Find Your IP Address:

**Windows:**
```bash
ipconfig
```

**Mac/Linux:**
```bash
ifconfig | grep "inet "
```

### Access from Other Devices:
Replace `localhost` in the HTML files with your IP address:

In `public/index.html` and `public/driver.html`, change:
```javascript
socket = io('http://localhost:3000');
```
To:
```javascript
socket = io('http://YOUR_IP_ADDRESS:3000');
```

Example: `socket = io('http://192.168.1.5:3000');`

Then access:
- Students: `http://YOUR_IP_ADDRESS:3000/index.html`
- Drivers: `http://YOUR_IP_ADDRESS:3000/driver.html`

## 🔧 Configuration

### Change Update Interval
In `public/driver.html`, find:
```javascript
trackingInterval = setInterval(sendLocation, 5000); // 5 seconds
```
Change `5000` to desired milliseconds (3000 = 3 sec, 10000 = 10 sec)

### Change Default Map Location
In `public/index.html`, find:
```javascript
const map = L.map('map').setView([17.4065, 78.4772], 13);
```
Replace coordinates with your college location.

## 🐛 Troubleshooting

### Server won't start
- Check if port 3000 is free
- Run: `npm install` again
- Check Node.js version: `node --version` (need 14+)

### Location not updating
- Grant location permissions in browser
- Check if GPS is enabled on device
- Keep driver page open (don't minimize)
- Check browser console for errors

### Can't connect from other devices
- Ensure all devices on same WiFi network
- Update Socket.IO URLs with your IP address
- Check firewall settings
- Disable VPN if active

## 🚀 Deployment

### Deploy to Render (Free):
1. Create account at https://render.com
2. Create new Web Service
3. Connect your GitHub repo
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Update Socket.IO URLs in HTML files to Render URL

### Deploy to Railway:
1. Create account at https://railway.app
2. New Project → Deploy from GitHub
3. Auto-detects Node.js
4. Update Socket.IO URLs in HTML files

## 📊 API Endpoints

### Get All Buses
```
GET http://localhost:3000/api/buses
```

### Health Check
```
GET http://localhost:3000/health
```

## 🎯 Features

- ✅ Real-time GPS tracking
- ✅ Live map updates
- ✅ Multiple simultaneous viewers
- ✅ Mobile-friendly interface
- ✅ Custom bus icon
- ✅ Connection status indicators
- ✅ Auto-cleanup of inactive buses

## 🔐 Security Note

This MVP has no authentication - perfect for testing. For production:
- Add user login
- Implement JWT tokens
- Use HTTPS
- Add rate limiting
- Validate GPS coordinates

## 📝 Next Steps

### Phase 2:
- User authentication
- Admin dashboard
- Database integration (MongoDB)
- Multiple routes management

### Phase 3:
- Push notifications
- ETA calculations
- Route optimization
- Historical tracking data

## 🆘 Support

- Socket.IO: https://socket.io/docs/
- Leaflet.js: https://leafletjs.com/
- Express.js: https://expressjs.com/

## 📄 License

MIT License - Feel free to modify and use!

---

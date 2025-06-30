# 🔧 Troubleshooting Guide

## 🚨 Common Issues and Solutions

### 1. "Failed to load test URLs" Error

**Symptoms:**
- Error message appears when clicking "🧪 Show Test URLs"
- Test URLs don't load in the frontend

**Solutions:**

#### A. Check if Backend Server is Running
```bash
# Check if port 5005 is in use
lsof -i :5005

# If not running, start the backend
cd backend
npm run dev
```

#### B. Test Backend API Directly
```bash
# Test the health endpoint
curl http://localhost:5005/

# Test the test URLs endpoint
curl http://localhost:5005/api/test-urls
```

#### C. Check for Port Conflicts
```bash
# Kill any processes using port 5005
lsof -ti:5005 | xargs kill -9

# Restart the backend
cd backend && npm run dev
```

### 2. Frontend Won't Start

**Symptoms:**
- Error when running `npm start` in frontend directory
- Port 3000 already in use

**Solutions:**
```bash
# Kill processes on port 3000
lsof -ti:3000 | xargs kill -9

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
cd frontend
rm -rf node_modules package-lock.json
npm install
npm start
```

### 3. Backend Won't Start

**Symptoms:**
- Error when running `npm run dev` in backend directory
- Port 5005 already in use

**Solutions:**
```bash
# Kill processes on port 5005
lsof -ti:5005 | xargs kill -9

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
cd backend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### 4. CORS Errors

**Symptoms:**
- Browser console shows CORS errors
- Frontend can't connect to backend

**Solutions:**
```bash
# Make sure both servers are running
# Backend should be on port 5005
# Frontend should be on port 3000

# Check the proxy setting in frontend/package.json
# Should be: "proxy": "http://localhost:5005"
```

### 5. Mock Data Not Working

**Symptoms:**
- Test URLs don't work
- "Mock playlist not found" error

**Solutions:**
```bash
# Check if mock-data.js exists
ls backend/api/mock-data.js

# Restart the backend server
cd backend
npm run dev
```

### 6. Dependencies Issues

**Symptoms:**
- Module not found errors
- Missing dependencies

**Solutions:**
```bash
# Clean install all dependencies
rm -rf node_modules package-lock.json
rm -rf backend/node_modules backend/package-lock.json
rm -rf frontend/node_modules frontend/package-lock.json

# Reinstall everything
npm install
cd backend && npm install
cd ../frontend && npm install
```

## 🚀 Quick Start Commands

### Start Both Servers (Recommended)
```bash
# Use the provided script
./start-servers.sh

# Or manually
cd backend && npm run dev &
cd frontend && npm start &
```

### Start Individual Servers
```bash
# Backend only
cd backend && npm run dev

# Frontend only
cd frontend && npm start
```

### Test Backend API
```bash
# Health check
curl http://localhost:5005/

# Test URLs
curl http://localhost:5005/api/test-urls

# Test comparison (replace with actual URLs)
curl -X POST http://localhost:5005/api/compare \
  -H "Content-Type: application/json" \
  -d '{"playlist1Url":"https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M","playlist2Url":"https://open.spotify.com/playlist/37i9dQZF1DX5Ejj0EkURtP"}'
```

## 🔍 Debugging Steps

### 1. Check Server Status
```bash
# Check what's running on ports
lsof -i :3000
lsof -i :5005

# Check process status
ps aux | grep node
ps aux | grep react-scripts
```

### 2. Check Logs
```bash
# Backend logs (if running in terminal)
# Look for error messages in the terminal where backend is running

# Frontend logs
# Check browser console (F12) for errors
```

### 3. Test Network Connectivity
```bash
# Test backend connectivity
curl -v http://localhost:5005/

# Test frontend connectivity
curl -v http://localhost:3000/
```

## 📱 Browser Issues

### Clear Browser Cache
- **Chrome:** Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- **Firefox:** Ctrl+F5 (Windows/Linux) or Cmd+Shift+R (Mac)
- **Safari:** Cmd+Option+R

### Check Browser Console
1. Open Developer Tools (F12)
2. Go to Console tab
3. Look for error messages
4. Check Network tab for failed requests

## 🐛 Common Error Messages

### "Cannot GET /api/test-urls"
- Backend server not running
- Wrong port number
- Route not defined

### "Failed to fetch"
- Network connectivity issue
- CORS problem
- Backend server down

### "Module not found"
- Missing dependencies
- Incorrect import paths
- Node modules corrupted

### "Port already in use"
- Another process using the port
- Previous server instance still running

## 📞 Getting Help

If you're still having issues:

1. **Check the logs** in both terminal windows
2. **Check browser console** for error messages
3. **Verify ports** are not in use by other applications
4. **Restart both servers** using the provided script
5. **Check file permissions** and ensure all files are accessible

## 🔄 Reset Everything

If all else fails, here's how to completely reset:

```bash
# Stop all processes
pkill -f "node.*server.js"
pkill -f "react-scripts"

# Clear ports
lsof -ti:3000 | xargs kill -9
lsof -ti:5005 | xargs kill -9

# Clean install
rm -rf node_modules package-lock.json
rm -rf backend/node_modules backend/package-lock.json
rm -rf frontend/node_modules frontend/package-lock.json

# Reinstall everything
npm install
cd backend && npm install
cd ../frontend && npm install

# Start fresh
./start-servers.sh
``` 
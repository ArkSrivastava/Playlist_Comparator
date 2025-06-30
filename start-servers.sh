#!/bin/bash

echo "🎵 Starting Playlist Comparator Servers..."

# Function to cleanup background processes on exit
cleanup() {
    echo "🛑 Stopping servers..."
    pkill -f "node.*server.js" 2>/dev/null
    pkill -f "react-scripts" 2>/dev/null
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Check if ports are already in use
if lsof -Pi :5005 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Port 5005 is already in use. Stopping existing process..."
    pkill -f "node.*server.js" 2>/dev/null
    sleep 2
fi

if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Port 3000 is already in use. Stopping existing process..."
    pkill -f "react-scripts" 2>/dev/null
    sleep 2
fi

# Start backend server
echo "🚀 Starting backend server on port 5005..."
cd backend
npm run dev &
BACKEND_PID=$!

# Wait for backend to start
echo "⏳ Waiting for backend to start..."
sleep 5

# Test backend
if curl -s http://localhost:5005/ > /dev/null; then
    echo "✅ Backend server is running"
else
    echo "❌ Backend server failed to start"
    exit 1
fi

# Start frontend server
echo "🎨 Starting frontend server on port 3000..."
cd ../frontend
npm start &
FRONTEND_PID=$!

# Wait for frontend to start
echo "⏳ Waiting for frontend to start..."
sleep 10

# Test frontend
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Frontend server is running"
else
    echo "⚠️  Frontend server may still be starting..."
fi

echo ""
echo "🎉 Both servers are running!"
echo "📱 Frontend: http://localhost:3000"
echo "🔧 Backend: http://localhost:5005"
echo "🧪 Test URLs: http://localhost:5005/api/test-urls"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for both processes
wait 
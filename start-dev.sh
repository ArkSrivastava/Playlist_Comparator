#!/bin/bash

echo "🎵 Starting Playlist Comparator Development Servers..."

# Function to cleanup background processes on exit
cleanup() {
    echo "🛑 Stopping servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Start backend server
echo "🚀 Starting backend server on port 5005..."
cd backend
npm run dev &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend server
echo "🎨 Starting frontend server on port 3000..."
cd ../frontend
npm start &
FRONTEND_PID=$!

echo "✅ Both servers are starting..."
echo "📱 Frontend: http://localhost:3000"
echo "🔧 Backend: http://localhost:5005"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for both processes
wait 
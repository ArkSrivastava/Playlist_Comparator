const axios = require('axios');

async function testServer() {
  try {
    console.log('🧪 Testing Playlist Comparator Backend...');
    
    // Test server health
    const healthResponse = await axios.get('http://localhost:5005/');
    console.log('✅ Server is running:', healthResponse.data);
    
    // Test compare endpoint with mock data
    const compareResponse = await axios.post('http://localhost:5005/api/compare', {
      playlist1Url: 'https://open.spotify.com/playlist/test1',
      playlist2Url: 'https://music.apple.com/playlist/test2'
    });
    
    console.log('✅ Compare endpoint is working');
    console.log('📊 Response structure:', Object.keys(compareResponse.data));
    
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      console.log('❌ Server is not running. Please start the backend server first.');
      console.log('   Run: cd backend && npm run dev');
    } else {
      console.log('❌ Test failed:', error.message);
    }
  }
}

// Run test if this file is executed directly
if (require.main === module) {
  testServer();
}

module.exports = { testServer }; 
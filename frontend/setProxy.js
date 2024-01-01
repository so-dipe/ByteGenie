const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') }); // Load environment variables from .env file in the parent directory

// Read the value of REACT_APP_API_PROXY from the .env file
const proxyValue = process.env.REACT_APP_API_PROXY;

// Read package.json
fs.readFile('package.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading package.json:', err);
    return;
  }

  try {
    // Parse package.json content
    const packageJSON = JSON.parse(data);

    // Update the proxy field
    packageJSON.proxy = proxyValue;

    // Convert the updated data back to JSON
    const updatedJSON = JSON.stringify(packageJSON, null, 2);

    // Write updated package.json content
    fs.writeFile('package.json', updatedJSON, 'utf8', (err) => {
      if (err) {
        console.error('Error writing package.json:', err);
        return;
      }
      console.log('Proxy in package.json updated successfully!');
    });
  } catch (parseError) {
    console.error('Error parsing package.json:', parseError);
  }
});

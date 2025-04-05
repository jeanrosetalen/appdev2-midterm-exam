const fs = require('fs');

fs.writeFile('message.txt', 'Node.js is awesome!', (err) => {
    if (err) {
        console.error('error:', err )
    } else {
        fs.readFile('message.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
            } else {
                console.log('File Content:', data)
                fs.unlink('message.txt', (err) => {
                    if (err) {
                      console.error('Error deleting file:', err);
                    } else {
                      console.log('File deleted successfully!');
                    }
                  });
            }
        });
    }
})

    
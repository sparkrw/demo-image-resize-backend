// Import necessary libraries
import express from 'express';
import bodyParser from 'body-parser';
import sharp from 'sharp';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies with large payloads
app.use(bodyParser.json({ limit: '10mb' }));

// POST API to receive base64 image, resize, and return
app.post('/resize', async (req, res) => {
    try {
        const { imageBase64, width, height } = req.body;

        // Validate input
        if (!imageBase64 || !width || !height) {
            return res.status(400).json({ error: 'Missing imageBase64, width, or height in request body.' });
        }

        // Decode the base64 image
        const buffer = Buffer.from(imageBase64, 'base64');

        // Resize the image using sharp
        const resizedBuffer = await sharp(buffer)
            .resize(parseInt(width), parseInt(height))
            .toBuffer();

        // Convert the resized image back to base64
        const resizedBase64 = resizedBuffer.toString('base64');

        // Send the resized image back as a response
        res.json({ resizedImageBase64: resizedBase64 });
    } catch (error) {
        console.error('Error processing image:', error);
        res.status(500).json({ error: 'Failed to process the image. Please check your input.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

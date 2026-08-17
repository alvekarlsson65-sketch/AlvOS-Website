const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servera statiska filer (som index.html)
app.use(express.static(path.join(__dirname)));

// Servera nedladdningsmappen för ISO-filer
app.use('/downloads', express.static(path.join(__dirname, 'downloads')));

// Starta servern
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});

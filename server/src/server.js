import "dotenv/config";

import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
========================================
  PARVEES PORTFOLIO API
========================================
  Server: http://localhost:${PORT}
  API:    http://localhost:${PORT}/api
  Health: http://localhost:${PORT}/api/health
========================================
  `);
});
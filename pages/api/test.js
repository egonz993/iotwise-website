/*
  path:  /api/test
  description: Proof of Work (root)
*/
export default (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        message: 'Hola desde la API de IoT Wise',
        date: new Date(),
      });
  };
  
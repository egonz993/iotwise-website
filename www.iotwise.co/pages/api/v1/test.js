/*
  path:  /api/v1/test
  description: Proof of Work API Version 1
*/
export default (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        message: 'Hola desde la API de IoT Wise',
        date: new Date(),
      });
  };
  
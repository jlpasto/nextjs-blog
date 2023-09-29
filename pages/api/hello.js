
/**
 * 
 * @param {*} req   req is an instance of http.IncomingMessage, plus some pre-built middlewares.
 * @param {*} res   res is an instance of http.ServerResponse, plus some helper functions.
 */
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
  }
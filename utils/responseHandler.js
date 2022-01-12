function handleMongoQuery(req, res) {
  req.queryRes 
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err));
}

module.exports = handleMongoQuery;
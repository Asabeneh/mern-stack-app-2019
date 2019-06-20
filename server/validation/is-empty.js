const isEmpty = value => {
  return (
    value === null ||
    value === undefined ||
    (typeof value === 'string' && value.trim().length === 0) ||
    (value.construtor === Array && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  );
};

module.exports = isEmpty;
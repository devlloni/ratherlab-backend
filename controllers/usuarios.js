
const registerService = (req, res) => {
    return res.send('Registrando...');
};

const validateService = (req, res) => {
    return res.send('Validando...');
};

module.exports = {
    registerService,
};
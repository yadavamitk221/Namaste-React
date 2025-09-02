const login = (req, res) => {
    const { email, password } = req.body || {};
    if (!email || !password) {
        return res.status(400).json({ message: "email and password are required" });
    }
    return res.json({ message: "logged in", email });
};

const register = (req, res) => {
    const { email, password } = req.body || {};
    if (!email || !password) {
        return res.status(400).json({ message: "email and password are required" });
    }
    return res.status(201).json({ message: "registered", email });
};

module.exports = { login, register };


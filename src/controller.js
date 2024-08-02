exports.sayHello = (req, res) => {
    const { name, age } = req.body; // Destructuring for cleaner code
    if (!name || age === undefined) { // Handle missing data
        return res.status(400).json({ message: "Name and age are required!" });
    }
    if (age > 18) {
        res.status(200).json({ message: `Welcome ${name}, you have the right access here.` });
    } else {
        res.status(403).json({ message: "You don't have access here, sorry !!" });
    }
};

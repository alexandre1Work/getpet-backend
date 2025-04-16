const User = require("../models/User.js");
const bcrypt = require("bcrypt");

module.exports = class UserController {
  static async register(req, res) {
    const { name, email, phone, password, confirmpassword } = req.body;

    //validations
    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório" });
      return;
    }
    if (!email) {
      res.status(422).json({ message: "O email é obrigatório" });
      return;
    }
    if (!phone) {
      res.status(422).json({ message: "O telefone é obrigatório" });
      return;
    }
    if (!password) {
      res.status(422).json({ message: "A senha é obrigatória" });
      return;
    }
    if (!confirmpassword) {
      res.status(422).json({ message: "A confirmação de senha é obrigatória" });
      return;
    }
    if (password !== confirmpassword) {
      res.status(422).json({
        message: "A senha e a confimação de senha precisam ser iguais!",
      });
      return;
    }

    //check if user exists
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      res.status(422).json({ message: "Por favor, utilize outro e-mail!" });
      return;
    }

    //create password
    const salt = await bcrypt.genSalt(12); //custo de iterações: 2^12 = 4096 iterações.
    const passwordHash = await bcrypt.hash(password, salt);

    //create user
    const user = new User({
      name,
      email,
      phone,
      password: passwordHash,
    });

    try {
      const newUser = await user.save();
      res.status(201).json({
        message: 'Usuário criado!',
        newUser
      })
    } catch (error) {
      console.log(error);
    }
  }
};

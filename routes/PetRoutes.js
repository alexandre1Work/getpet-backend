const router = require("express").Router();
const PetController = require("../controllers/PetController.js");

//middleware
const verifyToken = require("../helpers/verify-token.js");
const { imageUpload } = require("../helpers/image-upload.js");

router.post(
  "/create",
  verifyToken,
  imageUpload.array("images"),
  PetController.create
);

router.get("/", PetController.getAll)
router.get("/mypets", PetController.getAllMyPets)
router.get("/myadoptions", verifyToken, PetController.getAllUserAdoptions)
router.get('/:id', PetController.getPetById)

module.exports = router;

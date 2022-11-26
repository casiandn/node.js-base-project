const {Router} = require("express")
const router = Router();

router.get('*', (req,res) =>{
    res.send("Estas en una pagina erronea");
})

module.exports = router;

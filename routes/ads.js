const express = require("express");
const router = express.Router({ mergeParams: true });

const { createNewAd, getAd, updateAd, deleteAd, myGarage } = require('../handlers/ads')

router.post("/createnewad", createNewAd)
router.get("/", myGarage)
router.route("/:ad_id")
            .get(getAd)
            .put(updateAd)
            .delete(deleteAd)


module.exports = router;
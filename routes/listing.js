const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const { saveDirectUrl } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudconfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    validateListing,
    upload.single("Listing[image]"),
    wrapAsync(listingController.createListing)
  );
// NEW Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    upload.single("Listing[image]"),
    wrapAsync(listingController.updateListing)
  )
  .delete(
    isLoggedIn,
    isOwner, // Added missing isOwner middleware
    wrapAsync(listingController.destroyListing)
  );

// EDIT Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner, // Added missing isOwner middleware
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;

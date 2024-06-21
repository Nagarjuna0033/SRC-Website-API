const express = require('express');
const router = express.Router();

// Your controllers
const newsController = require('../../controller/news-details-controller.js');
const testimonialController = require('../../controller/testimonials-controller');
const userProfileController = require('../../controller/user-profile-controller');
const officialController = require('../../controller/officials-details-controller.js');
const checkDuplicateEmail = require('../../middlewares/checkDuplicateEmail');
const eventController=require('../../controller/events-details-controller.js');


// News routes
router.get('/news', newsController.getAllNews);
router.get('/news/by/:id', newsController.getNewsById);
router.post('/create/news', newsController.createNews);
router.put('/update/news/:id', newsController.updateNews);
router.delete('/delete/news/:id', newsController.deleteNews);

// Testimonials routes
router.get('/testimonials', testimonialController.getAllTestimonials);
router.get('/testimonials/by/:id', testimonialController.getTestimonialById);
router.post('/testimonials/create', testimonialController.createTestimonial);
router.put('/testimonials/update/:id', testimonialController.updateTestimonial);
router.delete('/testimonials/delete/:id', testimonialController.deleteTestimonial);

// User Profile routes
router.get('/profiles', userProfileController.getAllUserProfiles);
router.get('/profiles/:id', userProfileController.getUserProfileById);
router.post('/profiles/create', userProfileController.createUserProfile);
router.put('/profiles/update/:id', userProfileController.updateUserProfile);
router.delete('/profiles/delete/:id', userProfileController.deleteUserProfile);

// Officials routes
router.post('/officials', checkDuplicateEmail, officialController.createOfficial);
router.get('/officials', officialController.getAllOfficials);
router.get('/officials/:id', officialController.getOfficialById);
router.put('/officials/:id', officialController.updateOfficial);
router.delete('/officials/:id', officialController.deleteOfficial);

module.exports = router;

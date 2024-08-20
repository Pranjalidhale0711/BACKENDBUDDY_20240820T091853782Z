const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// schema2 routes
const { createSchema2, updateSchema2, deleteSchema2, getSchema2, getAllSchema2 } = require('../controllers/schema2');
// 
router.post("/schema2/create", checkAuthorizationHeaders,authorizeUser("createschema2") ,createSchema2);
router.put("/schema2/update/:id", checkAuthorizationHeaders,authorizeUser("updateschema2"), updateSchema2);
router.delete("/schema2/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteschema2"), deleteSchema2);
router.get("/schema2/get/:id", checkAuthorizationHeaders, authorizeUser("readschema2"), getSchema2);
router.get("/schema2/getAll", checkAuthorizationHeaders, authorizeUser("readschema2"), getAllSchema2);

    
// schema routes
const { createSchema, updateSchema, deleteSchema, getSchema, getAllSchema } = require('../controllers/schema');
// 
router.post("/schema/create", checkAuthorizationHeaders,authorizeUser("createschema") ,createSchema);
router.put("/schema/update/:id", checkAuthorizationHeaders,authorizeUser("updateschema"), updateSchema);
router.delete("/schema/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteschema"), deleteSchema);
router.get("/schema/get/:id", checkAuthorizationHeaders, authorizeUser("readschema"), getSchema);
router.get("/schema/getAll", checkAuthorizationHeaders, authorizeUser("readschema"), getAllSchema);

  
module.exports = router;

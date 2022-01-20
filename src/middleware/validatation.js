import {body, validationResult} from "express-validator"
//sign_validation
export const signUpValidation = () => {
    return [
      body("name").trim().notEmpty().withMessage("enter your name"),
      body("email")
        .trim()
        .isEmail()
        .withMessage("must be a valid email")
        .normalizeEmail({ "gmail_remove_dots": false }),
        body("gender")
        .trim().notEmpty().withMessage("please enter your gender"),
      body("password")
        .trim()
        .isLength(6)
        .withMessage("password length is short, minimum of 6 characters"),
      body("confirmPassword").custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("password do not match");
        }
        return true;
      }),
    ];
  };
/** validate login */
export const loginValidation = () => {
    return [
      body("email")
        .trim()
        .isEmail()
        .withMessage("must be a valid email")
        .normalizeEmail({ "gmail_remove_dots": false }),
      body("password")
        .trim()
        
      
    ];
  };
  //validation result 
  export const validateResults = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
    return res.status(422).json({
      //error 402: unprocessed entity
      errors: extractedErrors,
    });
  };
const { check, validationResult } = require('express-validator')


exports.registerRules = () => [
    check('email', ' this field is required ').notEmpty(),
    check('email', ' this field should be a valid email ').isEmail(),
    check('password', ' this field is required ').notEmpty(),
    check('password', ' password should be a 6 character minimum ').isLength({min:6}),
    check('accountType', ' must choose a valid type ').notEmpty()
]


exports.validator = (req, res, next)=>{
    const errors = validationResult(req)
    errors.isEmpty() ? next() : res.status(400).json({errors: errors.array() })
}
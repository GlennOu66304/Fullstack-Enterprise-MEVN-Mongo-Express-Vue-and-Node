import * as Yup from 'yup'

import User from '@models/User'

import PasswordDReset from '@models/PasswordReset'

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email().required(),

})

export default async (req, res, next) =>{ 

const { email} = req.body

  try {

    await ForgotPasswordSchema.validate(req.body)

    const user = await User.findOne({ email})

    if (! user) {
       throw new Yup.ValidationError(
        'This user does not exist',

         req.body,

         'email'


       )

    }


    const existingReset = await PasswordDReset.findOne({email})


    if (existingReset) {

        throw new Yup.ValidationError(
            'Password Reset Link already sent',
    
             req.body,
    
             'email'
    
    
           )
    

    }

req.user = user

return next()


  } catch(error) {

    res.status(422).json({


        [error.path]: error.message
    })
  }


  }


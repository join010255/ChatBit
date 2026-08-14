import * as z from "zod";

const loginShema = z.object({
    email : z.email("Invalid email address"),
    password : z.string().min(8, "Password must be at least 8 characters")
})

const registerSchema = z.object({
    last_name : z.string().min(3, "Len Erorr (3)"),
    first_name : z.string().min(3, "Len Erorr (3)"),
    email : z.email("Invalid email address"),
    password : z.string().min(8, "Password must be at least 8 characters")
})


const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: result.error.flatten().fieldErrors
            });
        }

       
        //req.body = result.data;

        next();
    };
};



export const loginValidation = validate(loginShema);

export const registerValidation = validate(registerSchema);
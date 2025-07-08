import { z } from 'zod'
import dotenv from "dotenv"


dotenv.config({ path : '.env.local' })

const ENVSchema = z.object({
    MONGODB_URI: z.string(),
    NEXTAUTH_SECRET: z.string(),
    MERCHANT_ACCOUNT: z.string(),
    MERCHANT_SECRET_KEY: z.string(),
    WAYFORPAY_API: z.string(),
})

export const config = ENVSchema.parse(process.env)
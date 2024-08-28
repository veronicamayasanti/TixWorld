import dotenv from 'dotenv';
dotenv.config();

export const urlDb = process.env.URL_MONGODB_DEV

export const jwtExpiration = '24h'

export const jwtSecret = "jwtSecret"

export const gmail = process.env.GMAIL
export const password = process.env.PASSWORD


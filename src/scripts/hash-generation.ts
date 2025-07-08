import CryptoJS from 'crypto-js';

export function generateHmacMd5(message: string, key: string) : string { 
    const hash = CryptoJS.HmacMD5(message, key);
    return hash.toString(CryptoJS.enc.Hex);
}
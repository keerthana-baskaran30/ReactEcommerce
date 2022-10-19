import React from 'react';
import { decode as base64_decode, encode as base64_encode } from 'base-64';

function auth(userData) {
    const strToEncode = `${userData['username']}:${userData['password']}`
    let encoded = base64_encode(strToEncode);
    return encoded
}

export default auth;
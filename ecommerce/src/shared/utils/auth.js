import React from 'react';
import { decode as base64_decode, encode as base64_encode } from 'base-64';

function auth(userData,authString) {
    const strToEncode = `${userData['username']}:${userData['password']}`
    let encoded = base64_encode(strToEncode);
    return encoded
    // localStorage.setItem('authString',JSON.stringify(encoded));
}

export default auth;
require.config({
    modules: [
        {
            name: 'main'
        }
    ],
    paths: {
        'crypto': "../crypto",
        'crypto.core': "../crypto/core.js",
        'crypto.md5': "../crypto/md5.js",
        'crypto.aes': "../crypto/aes.js",
        'crypto.base64': "../crypto/enc-base64.js",
        'crypto.cipher': "../crypto/cipher-core.js"
    },
    shim: {
        'crypto.md5': ['crypto','crypto.core','crypto.md5','crypto.aes','crypto.base64','crypto.cipher']
    }

});

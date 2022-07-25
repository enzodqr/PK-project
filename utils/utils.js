
// App's modules
const envConstants = require("../constants/env.constants")

module.exports = {
    // Returns a deep copy of the given object
    // Ref: https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy
    deepCopy(object) {
        return { ...object };
    },

    // Returns the environment configuration base on the running evn
    getEnvConfig(){

        if (process.env.NODE_ENV === envConstants.env.testing.name) {
            return util.copy(envConstants.env.testing);
        }

        return this.deepCopy(envConstants.env.local)
    }
};

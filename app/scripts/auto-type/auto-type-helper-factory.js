const Launcher = require('../comp/launcher');

const AutoTypeHelperFactory = {
    create() {
        if (Launcher && Launcher.autoTypeSupported) {
            const AutoTypeHelper = require('./helper/auto-type-helper-' + Launcher.platform());
            return new AutoTypeHelper();
        }
        return null;
    }
};

module.exports = AutoTypeHelperFactory;

const core = require('@actions/core');

async function run() {
    try {
        core.info('Starting dependency update check...');
    } catch (error) {
        core.setFailed(`Action failed with error: ${error.message}`);
    }
}

run();

const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
    try {
        core.info('Starting dependency update check...');
        
        // Teste simples do exec
        core.info('Testing exec functionality...');
        await exec.exec('pwd');  // Vai mostrar o diretório atual
    } catch (error) {
        core.setFailed(`Action failed with error: ${error.message}`);
    }
}

run();

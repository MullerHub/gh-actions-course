const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
    try {
        core.info('Starting dependency update check...');
        
        // 1. Executando comando simples
        core.info('1. Teste básico - pwd:');
        await exec.exec('pwd');

        // 2. Executando comando com argumentos
        core.info('2. Teste com argumentos - ls:');
        await exec.exec('ls', ['-la']);

        // 3. Executando comando com opções
        core.info('3. Teste com diretório específico:');
        await exec.exec('ls', ['-la'], {
            cwd: '/Users/murilomuller/Documents/programacao/gh-actions-course'
        });

        // 4. Capturando saída do comando
        core.info('4. Teste capturando saída:');
        let output = '';
        const options = {
            listeners: {
                stdout: (data) => {
                    output += data.toString();
                }
            }
        };
        await exec.exec('echo', ['Hello from exec!'], options);
        core.info(`Saída capturada: ${output}`);
    } catch (error) {
        core.setFailed(`Action failed with error: ${error.message}`);
    }
}

run();

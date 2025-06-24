
(function(Scratch) {
    'use strict';

    const ArgumentType = Scratch.ArgumentType;
    const BlockType = Scratch.BlockType;

    class WebAPIExtension {
        getInfo() {
            return {
                id: 'webapiExtension',
                name: 'Web API',
                blocks: [
                    {
                        opcode: 'callWebAPI',
                        blockType: BlockType.REPORTER,
                        text: 'call [URL]',
                        arguments: {
                            URL: {
                                type: ArgumentType.STRING,
                                defaultValue: 'https://api.chucknorris.io/jokes/random'
                            }
                        }
                    }
                ]
            };
        }

        async callWebAPI(args) {
            const url = args.URL;
            try {
                const response = await fetch(url);
                const json = await response.json();
                return JSON.stringify(json);
            } catch (e) {
                return 'error: ' + e.message;
            }
        }
    }

    Scratch.extensions.register(new WebAPIExtension());
})(Scratch);

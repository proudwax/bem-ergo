block('tree-root').replace()(function() {
    return {
        block: 'tree-page',
        title: 'TODO',
        head: [
            { elem: 'css', url: 'tree-index.min.css' }
        ],
        scripts: [
            { elem: 'js', url: 'tree-index.min.js' }
        ],
        mods: { theme: 'islands' }
    };
});

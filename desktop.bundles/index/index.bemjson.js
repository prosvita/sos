module.exports = {
    block: 'page',
    title: 'sos.crimea.ua',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: 'Emergency phone number' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'header',
            content: [
                'header'
            ]
        },
        {
            block: 'content',
            content: [
                'content'
            ]
        },
        {
            block: 'footer',
            content: [
                'footer'
            ]
        }
    ]
};

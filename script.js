$(document).ready(() => {
    
    let files = [
        'header.jsx',
        'footer.jsx',
        'test.jsx'
    ];

    renderHtml(files, (htmls) => {
        for (const html of htmls) {
            $('body').append(html);
        }        
    });
});
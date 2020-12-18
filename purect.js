const keyExtends = 'extends Component';
const keyReturn = 'return';
const keyReplacement = ['(', ')', '{', '}'];

function renderHtml(fileNames, callback) {
    list = [];
    for (const fileName of fileNames) {
        list.push(
            fetch(fileName).then((responece) => {
                return responece.text();
            })
        );
    }

    let htmls = [];

    Promise.all(list)
        .then((data) => {
            for (const item of data) {                
                htmls.push(recover(item));
            }
            callback(htmls);
        });    
}

function recover(data) {
    if (!data.includes(keyExtends)) {                    
        return '';
    }
    let result = data.split(keyReturn);
    let html = result[1];
    for (const replace of keyReplacement) {
        html = html.replaceAll(replace, '');
    }
    html = html.trim();
    return html;
}

class Component {

    render() {        
        return;
    }
}
function buildQuery(queries, params){
    queries = Object.assign(queries, params);
    return queries;
}

function joinQuery(params){
    const arr = [];
    for(let key in params){
        arr.push(`${key}=${params[key]}`);
    }
    return arr.join("&");
}

module.exports.paginate = (options) => {
    const totalPages = Math.ceil(options.totalItems / options.limit);
    console.log(totalPages);

    if (totalPages < 2) return '';

    var output = '<ul class="pagination">';
    for (let i = 1; i <= totalPages; i++) {
        let query = buildQuery(options.queries, {sPage: i});
        let url = options.url + '?' + joinQuery(query);
        let active = options.page == i ? 'active' : '';
        output += `<li class="page-item ${active}"><a class="page-link" href="${url}">${i}</a></li>`;
    }
    output += '</ul>';
    return output;
}
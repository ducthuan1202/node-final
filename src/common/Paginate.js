function buildQuery(options, params) {
    const queries = Object.assign(options.queries, params);
    const arr = [];
    for (let key in queries) {
        arr.push(`${key}=${queries[key]}`);
    }
    return options.url + '?' + arr.join("&");
}

module.exports.init = (options) => {
    const totalPages = Math.ceil(options.totalItems / options.limit);
    if (totalPages < 2) return '';
    const limitPage = 6;

    var output = '<ul class="pagination">';
    if (totalPages <= limitPage) {
        for (let i = 1; i <= totalPages; i++) {
            let url = buildQuery(options, { sPage: i });
            let active = options.page == i ? 'active' : '';
            output += `<li class="page-item ${active}"><a class="page-link" href="${url}">${i}</a></li>`;
        }
    } else {
        var half = Math.ceil(limitPage / 2);
        var start = options.page - half;
        var end = start + limitPage;

        if (start < 1) {
            start = 1;
            end = limitPage;
        }
        if (end > totalPages) {
            start = totalPages - limitPage;
            end = totalPages;
        }

        output += '<li class="page-item"><a class="page-link" href="' + buildQuery(options, { sPage: 1 }) + '">First</a></li>';
        for (let i = start; i <= end; i++) {
            let url = buildQuery(options, { sPage: i });
            let active = options.page == i ? 'active' : '';
            output += `<li class="page-item ${active}"><a class="page-link" href="${url}">${i}</a></li>`;
        }
        output += '<li class="page-item"><a class="page-link" href="' + buildQuery(options, { sPage: totalPages }) + '">Last</a></li>';
    }
    output += '</ul>';
    return output;
}
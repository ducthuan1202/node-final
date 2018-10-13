const helper = require("../../common/Helper");
const Category = require("../../database/models").Category;

/** Function support */
function getOldData(req, flashName = 'oldData') {
    const oldData = req.flash(flashName);
    return (oldData.length && typeof oldData[0] === 'object') ? oldData[0] : {};
}

/** controller methods */
const controller = {};

controller.list = (req, res) => {

    const model = Category.build({});
    const searchContidions = {};
    const searchOptions = {
        sKeyword: (req.query.sKeyword || "").trim(),
        sStatus: parseInt(req.query.sStatus || 0),
    };
    searchOptions.listStatus = model.getStatus();

    /** filter by name */
    if (!helper.isEmpty(searchOptions.sKeyword)) {
        searchContidions.$or = [
            { name: { $like: `%${searchOptions.sKeyword}%` } }
        ];
    }

    /** filter by status */
    if (!helper.isEmpty(searchOptions.sStatus)) {
        searchContidions.status = searchOptions.sStatus;
    }

    Category.findAndCountAll({ where: searchContidions })
        .then(data => {
            const shared = {
                model: model,
                data: data,
                searchOptions: searchOptions,
            };
            const view = helper.backendView("category/index");
            res.render(view, shared);
        })
        .catch(err => res.redirect('/admin/404'));
};

controller.create = (req, res) => {
    const model = Category.build(getOldData(req));
    const shared = {
        model: model,
        errors: req.flash('errors'),
        success: req.flash('success'),
    };
    const view = helper.backendView("category/create");
    res.render(view, shared);
};

controller.store = (req, res) => {
    const attributes = req.body;
    Category.create(attributes)
        .then(model => {
            req.flash('success', "Create success");
            return res.redirect(model.getUrlEdit());
        })
        .catch((e) => {
            const errors = [];
            e.errors.forEach(error => errors.push(error.message));
            req.flash('errors', errors);
            req.flash('oldData', attributes);
            res.redirect('/admin/categories/create');
        });
};

controller.edit = (req, res) => {
    const id = parseInt(req.params.id);
    Category.findById(id)
        .then(model => {
            model.updateAttributes(getOldData(req));
            const shared = {
                model: model,
                errors: req.flash('errors'),
                success: req.flash('success'),
            };
            const view = helper.backendView("category/edit");
            res.render(view, shared);
        })
        .catch(() => res.redirect('/admin/404'));
};

controller.update = (req, res) => {
    const id = parseInt(req.params.id);
    const attributes = req.body;
    Category.findById(id).then(model => {
        model.update(attributes)
            .then(() => {
                req.flash('success', `Update success`);
                res.redirect(model.getUrlEdit());
            })
            .catch(e => {
                const errors = [];
                e.errors.forEach(error => errors.push(error.message));
                req.flash('errors', errors);
                req.flash('oldData', attributes);
                res.redirect(model.getUrlEdit());
            });
    }).catch(() => res.redirect('/admin/404'));
};

controller.show = (req, res) => {
    const id = parseInt(req.params.id);
    Category.findById(id)
        .then(model => {
            const shared = { model: model };
            const view = helper.backendView("category/show");
            res.render(view, shared);
        })
        .catch(() => res.redirect('/admin/404'));
};

controller.destroy = (req, res) => {
    const id = parseInt(req.body.id);
    Category.findById(id)
        .then(model => {
            model.destroy()
                .then((count) => res.json(helper.jsonSuccess(`destroy success (${count})`)))
                .catch(e => res.json(helper.jsonError(e)))
        })
        .catch((e) => res.json(helper.jsonError(e)));
};

controller.delete = (req, res) => {
    const id = req.body.id;
    if (Array.isArray(id)) {
        Category.destroy({ where: { id: id } })
            .then((count) => res.json(helper.jsonSuccess(`delete success (${count})`)))
            .catch(e => res.json(helper.jsonError(e)));
    } else {
        res.json(helper.jsonError('delete fail'));
    }
};

module.exports = controller;
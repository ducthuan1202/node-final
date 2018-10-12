const helper = require("../../common/Helper");
const Category = require("../../database/models").Category;

const controller = {};

controller.list = (req, res) => {
    Category.findAndCountAll().then(data => {
        const shared = { data: data };
        let view = helper.backendView("category/index");
        res.render(view, shared);
    }).catch(err => res.status(400).json(helper.displayErrorMessage(err)));
};

controller.create = (req, res) => {

    const model = Category.build(getOldData(req));

    const shared = {
        model: model,
        errors: req.flash('errors'),
        success: req.flash('success'),
    };
    let view = helper.backendView("category/create");
    res.render(view, shared);
};

controller.store = (req, res) => {

    const attributes = req.body;

    Category.create(attributes).then(model => {
        req.flash('success', "Create success");
        return res.redirect(model.getUrlEdit());
    }).catch((e) => {
        let errors = [];
        e.errors.forEach(error => errors.push(error.message));
        req.flash('errors', errors);
        req.flash('oldData', attributes);
        res.redirect('/admin/categories/create');
    });
};

controller.edit = (req, res) => {

    const id = parseInt(req.params.id);

    Category.findById(id).then(model => {

        model.updateAttributes(getOldData(req));
        const shared = {
            model: model,
            errors: req.flash('errors'),
            success: req.flash('success'),
        };
        let view = helper.backendView("category/edit");
        res.render(view, shared);

    }).catch(() => res.redirect('/admin/404'));

};

controller.update = (req, res) => {

    const id = parseInt(req.params.id);
    const attributes = req.body;

    Category.findById(id).then(model => {

        model.update(attributes).then(() => {
            req.flash('success', `Update success`);
            return res.redirect(model.getUrlEdit());
        }).catch(e => {
            let errors = [];
            e.errors.forEach(error => errors.push(error.message));
            req.flash('errors', errors);
            req.flash('oldData', attributes);
            res.redirect(model.getUrlEdit());
        });

    }).catch(e => res.redirect('/admin/404'));
};

controller.show = (req, res) => {

    const id = parseInt(req.params.id);

    Category.findById(id).then(model => {
        const shared = { model: model };
        let view = helper.backendView("category/show");
        res.render(view, shared);
    }).catch(e => res.status(400).json(helper.displayErrorMessage(e)));
};

controller.destroy = (req, res) => {

    const id = parseInt(req.body.id);

    Category.findById(id).then(model => {
        model.destroy()
            .then(() => res.json(helper.displaySuccessMessage('success')))
            .catch(e => res.json(helper.displayErrorMessage('destroy fail')))
    }).catch((e) => res.json(helper.displayErrorMessage(e)));

};

controller.delete = (req, res) => {

    var id = req.body.id;

    if (Array.isArray(id)) {
        Category.destroy({ where: { id: id } })
            .then(() => {
                return res.json(helper.displaySuccessMessage('delete success'));
            })
            .catch(e => {
                return res.json(helper.displayErrorMessage(e));
            });
    } else {
        return res.json(helper.displayErrorMessage('id invalid'));
    }
};

const getOldData = (req, flashName = 'oldData') => {
    const oldData = req.flash(flashName);
    return (oldData.length && typeof oldData[0] === 'object') ? oldData[0] : {};
}

module.exports = controller;

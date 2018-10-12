const BaseRepository =  require("./BaseRepository");
const models = require("../models");

class CategoryRespository extends BaseRepository {
    get model() {
        return models.Category;
    }
}

module.exports = CategoryRespository;

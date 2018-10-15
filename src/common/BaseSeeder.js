'use strict';

const Faker = require('faker');
const ArrayHelper = require('./Helper');

/** create customer demo */
exports.demoCustomer = () => {

    const listStatus = [1, 2, 3];

    const first_name = Faker.name.firstName();
    const last_name = Faker.name.lastName();
    const name = `${first_name} ${last_name}`;
    const address = Faker.address.streetAddress();
    const city = Faker.address.city();
    const state = Faker.address.state();
    const postal_code = Faker.address.zipCode();
    const country = Faker.address.country();

    const status = ArrayHelper.arrayRandom(listStatus);
    const created_at = Faker.date.recent();
    const updated_at = created_at;

    return {
        first_name, last_name, name, address, city, state, postal_code, country,
        status, created_at, updated_at
    }
}

/** create cateogies demo */
exports.demoCategory = () => {

    const listStatus = [1, 2, 3];

    const name = Faker.commerce.department();
    const description = Faker.lorem.paragraph();
    const image = Faker.image.avatar();

    const status = ArrayHelper.arrayRandom(listStatus);
    const created_at = Faker.date.recent();
    const updated_at = created_at;

    return {
        name, description, image,
        status, created_at, updated_at
    }
}

/** create employees demo */
exports.demoEmployees = () => {

    const listStatus = [1, 2, 3];
    const listExtension = ['x5800', 'x4611', 'x9273', 'x4871'];

    const first_name = Faker.name.firstName();
    const last_name = Faker.name.lastName();
    const name = `${first_name} ${last_name}`;
    const extension = ArrayHelper.arrayRandom(listExtension);
    const email = Faker.internet.email();
    const office_id = 12;
    const job_title = Faker.name.jobTitle();

    const status = ArrayHelper.arrayRandom(listStatus);
    const created_at = Faker.date.recent();
    const updated_at = created_at;

    return {
        first_name, last_name, name, extension, email, office_id, job_title,
        status, created_at, updated_at
    }
}

/** create offices demo */
exports.demoOffice = () => {
    
    const listStatus = [1, 2, 3];

    const city = Faker.address.city();
    const phone = Faker.phone.phoneNumber();
    const address = Faker.address.streetAddress();
    const country = Faker.address.country();
    const state = Faker.address.state();
    const postal_code = Faker.address.zipCode();
    const territory = Faker.address.countryCode();

    const status = ArrayHelper.arrayRandom(listStatus);
    const created_at = Faker.date.recent();
    const updated_at = created_at;

    return {
        city, phone, address, country, state, postal_code, territory,
        status, created_at, updated_at
    }
}

/** create products demo */
exports.demoProduct = () => {

    const listStatus = [1, 2, 3];

    const name = Faker.commerce.productName();
    const category_id = 1;
    const scale = Faker.address.streetAddress();
    const vendor = Faker.company.companyName();
    const description = Faker.lorem.paragraph();
    const quantity_in_stock = Faker.random.number();
    const buy_price = Faker.commerce.price();
    const msrp = Faker.commerce.price();

    const status = ArrayHelper.arrayRandom(listStatus);
    const created_at = Faker.date.recent();
    const updated_at = created_at;

    return {
        name, category_id, scale, vendor, description, quantity_in_stock, buy_price, msrp,
        status, created_at, updated_at
    }
}

/** create orders demo */
exports.demoOrder = () => {

    const listStatus = [1, 2, 3];

    const order_date = Faker.date.past();
    const required_date = Faker.date.recent();
    const shipped_date = Faker.date.past();

    const comments = Faker.lorem.lines();
    const customer_id = 1;
    const status = ArrayHelper.arrayRandom(listStatus);
    const created_at = Faker.date.recent();
    const updated_at = created_at;

    return {
        order_date, required_date, shipped_date, comments, customer_id,
        status, created_at, updated_at
    }
}

/** create order_details demo */
exports.demoOrderDetail = () => {

    const listOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const listProduct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const order_id = ArrayHelper.arrayRandom(listOrder);
    const product_id = ArrayHelper.arrayRandom(listProduct);
    const quantity_ordered = Faker.random.number();

    const price_each = Faker.commerce.price();
    const order_line_number = 1;

    return {
        order_id, product_id,
        quantity_ordered, price_each, order_line_number
    }
}

/** create payments demo */
exports.demoPayment = () => {

    const listStatus = [1, 2, 3];

    const check_number = Faker.finance.bic();
    const payment_date = Faker.date.past();
    const amount = Faker.finance.amount();

    const status = ArrayHelper.arrayRandom(listStatus);
    const created_at = Faker.date.recent();
    const updated_at = created_at;

    return {
        check_number, payment_date, amount,
        status, created_at, updated_at
    }
}
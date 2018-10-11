
const LocalStrategy = require('passport-local').Strategy;

const bcrypt = require("bcrypt");

const users = [
    {
        id: 2,
        name: "nguyen duc thuan",
        email: "ducthuan1202@gmail.com",
        password: "$2b$10$3S06KXEXDKkhit5e6T3QFOm15PAqL2EzfUw3SXYizHNchybbsOZE2",
        role: 1,
        status: 1,
        created_at: "2018-10-02 15:02:03",
        updated_at: "2018-10-02 15:02:03"
    },
    {
        id: 1,
        name: "Duc Thuan",
        email: "thuannd@qsoftvietnam.com",
        password: "$2b$10$0GlXce0IYTsGH/H6W2m12.rqRJtGpViNQaAh61i8cET287cPNx5DW",
        role: 1,
        status: 1,
        created_at: "2018-10-02 15:02:03",
        updated_at: "2018-10-02 15:02:03"
    }
]

module.exports = (passport) => {

    passport.serializeUser((user, done) => { done(null, user) });
    passport.deserializeUser((user, done) => { done(null, user) });

    passport.use(new LocalStrategy((username, password, done) => {
        const user = users.find(item => item.email === username);
        try {
            // Nếu user không tồn tại
            if (!user) {
                return done(null, null, { message: "Email is not correctly" });
            }
            // Nếu user tồn tại
            if (!bcrypt.compareSync(password, user.password)) {
                return done(null, null, { message: "Password is not correctly" });
            }

            done(null, user);
        } catch (e) {
            console.log(e.message);
        }

    }));
};
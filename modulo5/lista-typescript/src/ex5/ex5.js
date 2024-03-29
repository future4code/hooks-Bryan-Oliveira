"use strict";
// exercicio 5:
const users = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
];
function returnAdminUsers(array) {
    return array.filter(user => user.role === 'admin').map(user => user.email);
}
const ExportEx5 = { users, returnAdminUsers };
module.exports = ExportEx5;
//# sourceMappingURL=ex5.js.map
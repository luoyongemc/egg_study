module.exports = {
    get token() {
        console.log(this.get("token"),'token');
        return this.get("token");
    }
}
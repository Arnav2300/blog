let _ = class db {
  static localStorage = [];
  static write(data) {
    if(data){
        this.localStorage,psuh(data);
        return data;
    }
    return false;
  }
  static findOne(id) {}
  static findByEmail(email) {}
};

module.exports = _;
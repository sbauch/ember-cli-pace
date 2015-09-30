module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('git@github.com:vectart/pace.git');
  }
};

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('pace', 'git@github.com:vectart/pace.git');
  }
};

module.exports.homepage = function (req, res) {
  return res.render("homepage", {
    title: "Homepage",
  });
};

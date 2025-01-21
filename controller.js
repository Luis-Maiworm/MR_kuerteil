AFRAME.registerComponent('controller', {
    init: function () {
    console.log("THUMSTICKMOVED")
      this.el.addEventListener('abuttondown', function () {
        console.log("THUMSTICKMOVED")
      });
    },
  });
  
can.Component.extend({
  tag: "sistema-entrar",
  template: can.view('/components/sistema/entrar/entrar.stache'),
  init:function(){
    $('menu-principal').remove()

  },
  viewModel: {
    entrar:function(){
      var that = this;
      that.attr("senha",CryptoJS.SHA1(that.usuario.senha));
      $.post(HOST+"/sistema/login",{usuario:that.usuario.toLowerCase()},function(r){
        console.log(r);
      })
      return false;
    },
    visible: false,
    message: "Hello There!"
  },
  events: {
    cadastrar:function(ev,model){
        if(ev) {
            ev.preventDefault();
        }
        console.log(model,ev);
        return false
      }
  }
});
/* script de bootstrap que permite que funcionen las tap para cambiar de login a register  */

var triggerTabList = [].slice.call(document.querySelectorAll('#myLoginTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})

var triggerEl = document.querySelector('#myLoginTab a[href="#register"]')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

/* ------------------------------------------------------------------------------------ */

  function bindPasswordReveal() {
    $('input[type="password"] + .cursor-pointer').each(function() {
        $(this).on('mousedown touchstart', function() {
            $(this)
                .prev()
                .attr('type', 'text');
        });
        $(this).on('mouseup touchend', function() {
            $(this)
                .prev()
                .attr('type', 'password');
        });
    });
}

window.addEventListener('load', function() {
  bindPasswordReveal();
});
/* -------------------------------------------------------------------------------- */
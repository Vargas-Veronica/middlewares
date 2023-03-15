module.exports = {
    list: (req, res) => res.render('products', {
        title: 'LISTADO DE PRODUCTOS'
    }),
    detail: (req, res) => res.render('detail', {
        title: 'DETALLE DEL PRODUCTO'
    }),
}

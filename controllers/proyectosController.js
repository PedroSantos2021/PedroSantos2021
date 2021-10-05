exports.controllerDashboard = (req, res) => {
    res.render('index',{
        titulo_pestaña: "Home",
        titulo_vista: "Dashboard"
    });
}

exports.controllerUsuarios = (req, res) => {
    res.render('usuarios',{
        titulo_pestaña: "Usuarios",
        titulo_vista: "Control Usuarios"
    });
}
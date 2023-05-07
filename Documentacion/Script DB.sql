create table instalaciones(
idInstalaciones INT NOT NULL auto_increment PRIMARY KEY,
nombre VARCHAR(45),
descripcion VARCHAR(45),
direccion VARCHAR(45),
imagen VARCHAR(45),
costo_hora VARCHAR(45)
);

create table socio(
idSocio INT NOT NULL auto_increment PRIMARY KEY,
nombre VARCHAR(45),
correo VARCHAR(45),
telefono INT,
imagen VARCHAR(45),
contrasena VARCHAR(45)
);

create table alquiler_instalacion(
idInstalacion INT NOT NULL auto_increment PRIMARY KEY,
idInstalaciones INT,
idSocio INT,
fecha DATE,
hora_inicio TIME,
hora_fin TIME,
forma_de_pago VARCHAR(45),
costo_final INT,
FOREIGN KEY (idInstalaciones) REFERENCES instalaciones(idInstalaciones),
FOREIGN KEY (idSocio) REFERENCES socio(idSocio)
);

create table opinion(
idOpinion INT NOT NULL auto_increment PRIMARY KEY,
idSocio INT,
puntuacion INT,
comentario VARCHAR(50),
FOREIGN KEY (idSocio) REFERENCES socio(idSocio)
);

create table cancha(
numero_cancha INT NOT NULL PRIMARY KEY,
superficie VARCHAR(45),
iluminacion VARCHAR(45),
techado VARCHAR(45),
direccion VARCHAR(45),
imagen VARCHAR(45),
costo_hora INT
);

create table usuario_registrado(
idUsuario INT NOT NULL auto_increment PRIMARY KEY,
nombre VARCHAR(45),
correo VARCHAR(45),
telefono INT,
contrasena VARCHAR(45),
fecha_alta VARCHAR(45)
);

create table alquiler_cancha(
idAlquiler_cancha INT NOT NULL auto_increment PRIMARY KEY,
numero_cancha INT,
idUsuario INT,
fecha DATE,
hora_inicio TIME,
hora_fin TIME,
forma_pago VARCHAR(45),
costo_final INT,
FOREIGN KEY (numero_cancha) REFERENCES cancha(numero_cancha),
FOREIGN KEY (idUsuario) REFERENCES usuario_registrado(idUsuario)
);

create table torneo(
idTorneo INT NOT NULL PRIMARY KEY,
nombre VARCHAR(45),
dni INT,
fecha DATE,
correo VARCHAR(45),
telefono INT,
ciudad VARCHAR(45),
idUsuario INT,
FOREIGN KEY (idUsuario) REFERENCES usuario_registrado(idUsuario)
);


"use strict";

const REMOTE = "administrador@titan:/ALMACEN/BACKUPS/LAPTOP/";

module.exports = [
  {
    origin: process.env.HOME,
    remote: `${REMOTE}home`,
    files: [
      `${process.env.HOME}/?(documents|documentos)/**/*`,
      `${process.env.HOME}/?(pictures|imagenes)/**/*`,
      `${process.env.HOME}/?(videos|movies|vìdeos)/**/*`,
      `${process.env.HOME}/?(musica|music)/**/*`,
      `${this
        .origin}/?(descargas|downloads)/**/?(*.pdf|*.txt|*.jpeg|*.jpg|*.tiff|*.doc|*.xls|*.ods|*.odt)`,
      `${process.env.HOME}/?(.zshrc)`,
      `${process.env.HOME}/?(games|juegos)/**/*`
    ]
  },
  {
    origin: "/etc",
    remote: `${REMOTE}etc`,
    files: [`/etc/hosts`]
  },
  {
    origin: "/usr/local/bin",
    remote: `${REMOTE}bin`,
    files: [`/usr/local/bin/**/*`]
  }
];

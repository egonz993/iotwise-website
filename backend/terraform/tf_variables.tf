# ################################################# #
# ASEGURATE DE REEMPLAZAR EL VALOR DE LAS VARIABLES #
#            CON LOS DATOS DE TU PROYECTO           #
# ################################################# #


### NOMBRE DEL CLIENTE ###

variable "client" {
  type = string
  default = "IOTWISE"
}


### CUENTA AWS ###

variable "accountId" {
  type = string
  default = "126087531022"
}

variable "region" {
  type = string
  default = "us-east-1"
}

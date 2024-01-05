# Documentación

### Configuraciones iniciales

- **Asegurate de tener instalado Terraform**
```bash
terraform --version
# Terraform v1.6.2

# En caso de que no lo tengas instalado sigue las instrucciones
# https://developer.hashicorp.com/terraform/install
```

- **Asegurate de tener instalado AWS Cli**
```bash
aws --version
# aws-cli/2.13.0

# En caso de que no lo tengas instalado sigue las instrucciones
# https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
```

- **Configura las credenciales de AWS en tu PC**
```bash
aws configure

# aws_secret_access_key = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
# aws_access_key_id     = XXXXXXXXXXXXXXXXXXXX
```


### Configuraciones del Proyecto en Terraform

- **Descarga el repositorio con los archivos de Terraform**
```bash
git clone https://github.com/ingenieria12/telelamp-terraform.git dirname
```

- **Crea un archivo de variables 'tf_variables.tf' que contenga el siguiente fragmento de código**
```
# ################################################# #
# ASEGURATE DE REEMPLAZAR EL VALOR DE LAS VARIABLES #
#            CON LOS DATOS DE TU PROYECTO           #
# ################################################# #

variable "client" {
  type = string
  default = "NOMBRE"            # Nombre del Cliente #
}

variable "accountId" {
  type = string
  default = "123456789012"      # ID de la cuenta AWS #
}

variable "region" {
  type = string
  default = "us-east-1"         # Región AWS #
}
```

- **Despliega los recursos en AWS**
```bash
terraform apply

# Enter a value: yes

# El proceso puede demorar varios minutos, al finalizar se debe mostrar en consola el siguiente resultado:
# Apply complete! Resources: 44 added, 0 changed, 0 destroyed.
```


### **Verifica en AWS que se hayan creado correctamente los recursos**

- **Amazon EC2 (Opcional)**
    - Instances
        - <span style="color:#009">Telelamp Application Server</span>
- **Amazon S3**
    - Buckets
        - <span style="color:#009">nombre.telelamp.datalake</span>
- **Amazon API Gateway**
    - APIs
        - <span style="color:#009">NOMBRE_HTTP_API</span>
- **AWS IoT Core**
    - LPWAN Devices
        - Profiles
            - <span style="color:#009">NOMBRE_AU915_C_OTAA_DeviceProfile</span>
            - <span style="color:#009">NOMBRE_Telelamp_ServiceProfile</span>
        - Destinations
            - <span style="color:#009">NOMBRE_TelelampLorawanDestination</span>
    - Message Routing
        - Rules
            - <span style="color:#009">NOMBRE_DataLakeRule</span>
            - <span style="color:#009">NOMBRE_DataProcessRule</span>
- **AWS Lambda**
    - Functions
        - <span style="color:#009">NOMBRE_IoTRule_DataProcess_Storage</span>
        - <span style="color:#009">NOMBRE_API_UserApi</span>
        - <span style="color:#009">NOMBRE_IoTRule_DataProcess_Alarms</span>
        - <span style="color:#009">NOMBRE_API_PostgreSQLTimescale</span>
        - <span style="color:#009">NOMBRE_API_IoTCoreLorawan</span>
        - <span style="color:#009">NOMBRE_IoTRule_DataLake</span>
        - <span style="color:#009">NOMBRE_IoTRule_LorawanDecode</span>

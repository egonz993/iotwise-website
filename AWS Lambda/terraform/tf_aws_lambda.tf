################
### Policies ###
################

# Create Policy for Default Lambda Role
data "aws_iam_policy_document" "LambdaDefaultPolicy" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

# Create Policy for S3 Access
resource "aws_iam_policy" "S3AccessPolicy" {
  name        = "${upper(var.client)}_S3AccessPolicy"
  description = "Policy for S3 access"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "s3:GetObject",
          "s3:PutObject",
          "s3:ListBucket",
        ],
        Effect   = "Allow",
        Resource = [
          "arn:aws:s3:::telelamp.${lower(var.client)}.datalake/*",
        ],
      },
    ],
  })
}

# Create Policy for IoT Core Access
resource "aws_iam_policy" "IoTCorePublishPolicy" {
  name        = "${upper(var.client)}_IoTCorePublishPolicy"
  description = "Policy for IoT Core access"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "iot:Publish"
        ],
        Effect   = "Allow",
        Resource = [
          "arn:aws:iot:${var.region}:${var.accountId}:topic/*",
        ],
      },
    ],
  })
}

########################
### IoTRule_DataLake ###
########################

# Get Lambda Function Code
data "archive_file" "IoTRule_DataLake_ZipFile" {
  type        = "zip"
  source_dir  = "aws_lambda/IoTRule_DataLake"
  output_path = "aws_lambda/zip/IoTRule_DataLake_ZipFile.zip"
}

# Create a IAM Role for Lambda Function
resource "aws_iam_role" "IoTRule_DataLake_Role" {
  name               = "${upper(var.client)}_IoTRule_DataLake_Role"
  assume_role_policy = data.aws_iam_policy_document.LambdaDefaultPolicy.json
}

# Attach S3 Acces for Lambda Policy
resource "aws_iam_role_policy_attachment" "IoTRule_DataLake_Role_AttachPolicy_S3AccessPolicy" {
  policy_arn = aws_iam_policy.S3AccessPolicy.arn
  role       = aws_iam_role.IoTRule_DataLake_Role.name
}

# Create Lambda Function
resource "aws_lambda_function" "IoTRule_DataLake_lambda" {
    function_name = "${upper(var.client)}_IoTRule_DataLake"
    handler       = "index.handler"
    runtime       = "nodejs18.x"
    timeout       = 10
    role          = aws_iam_role.IoTRule_DataLake_Role.arn

    filename      = data.archive_file.IoTRule_DataLake_ZipFile.output_path
    source_code_hash = data.archive_file.IoTRule_DataLake_ZipFile.output_base64sha256

    environment {
        variables = {
            CLIENT = "${lower(upper(var.client))}"
        }
    }
}




##############################
### IoTRule_LorawanDecoder ###
##############################

# Get Lambda Function Code
data "archive_file" "IoTRule_LorawanDecoder_ZipFile" {
  type        = "zip"
  source_dir  = "aws_lambda/IoTRule_LorawanDecoder"
  output_path = "aws_lambda/zip/IoTRule_LorawanDecoder_ZipFile.zip"
}

# Create a IAM Role for Lambda Function
resource "aws_iam_role" "IoTRule_LorawanDecoder_Role" {
  name               = "${upper(var.client)}_IoTRule_LorawanDecoder_Role"
  assume_role_policy = data.aws_iam_policy_document.LambdaDefaultPolicy.json
}

# Attach S3 Acces for Lambda Policy
resource "aws_iam_role_policy_attachment" "IoTRule_LorawanDecoder_Role_AttachPolicy_IoTCorePublishPolicy" {
  policy_arn = aws_iam_policy.IoTCorePublishPolicy.arn
  role       = aws_iam_role.IoTRule_LorawanDecoder_Role.name
}

# Create Lambda Function
resource "aws_lambda_function" "IoTRule_LorawanDecoder_lambda" {
    function_name = "${upper(var.client)}_IoTRule_LorawanDecoder"
    handler       = "index.handler"
    runtime       = "nodejs18.x"
    timeout       = 10
    role          = aws_iam_role.IoTRule_LorawanDecoder_Role.arn

    filename      = data.archive_file.IoTRule_LorawanDecoder_ZipFile.output_path
    source_code_hash = data.archive_file.IoTRule_LorawanDecoder_ZipFile.output_base64sha256

    environment {
        variables = {
            CLIENT = "${lower(upper(var.client))}"
        }
    }
}




###################################
### IoTRule_DataProcess_Storage ###
###################################

# Get Lambda Function Code
data "archive_file" "IoTRule_DataProcess_Storage_ZipFile" {
  type        = "zip"
  source_dir  = "aws_lambda/IoTRule_DataProcess_Storage"
  output_path = "aws_lambda/zip/IoTRule_DataProcess_Storage_ZipFile.zip"
}

# Create a IAM Role for Lambda Function
resource "aws_iam_role" "IoTRule_DataProcess_Storage_Role" {
  name               = "${upper(var.client)}_IoTRule_DataProcess_Storage_Role"
  assume_role_policy = data.aws_iam_policy_document.LambdaDefaultPolicy.json
}

# Create Lambda Function
resource "aws_lambda_function" "IoTRule_DataProcess_Storage_lambda" {
    function_name = "${upper(var.client)}_IoTRule_DataProcess_Storage"
    handler       = "index.handler"
    runtime       = "nodejs18.x"
    timeout       = 10
    role          = aws_iam_role.IoTRule_DataProcess_Storage_Role.arn

    filename      = data.archive_file.IoTRule_DataProcess_Storage_ZipFile.output_path
    source_code_hash = data.archive_file.IoTRule_DataProcess_Storage_ZipFile.output_base64sha256

    environment {
        variables = {
          USER = "${var.db_user}"
          HOST = "${var.db_host}"
          DATABASE = "${var.db_database}"
          PASSWORD = "${var.db_password}"
          PORT = "${var.db_port}"
        }
    }
}




##################################
### IoTRule_DataProcess_Alarms ###
##################################

# Get Lambda Function Code
data "archive_file" "IoTRule_DataProcess_Alarms_ZipFile" {
  type        = "zip"
  source_dir  = "aws_lambda/API_PostgreSQLTimescale"
  output_path = "aws_lambda/zip/API_PostgreSQLTimescale_ZipFile.zip"
}

# Create a IAM Role for Lambda Function
resource "aws_iam_role" "IoTRule_DataProcess_Alarms_Role" {
  name               = "${upper(var.client)}_IoTRule_DataProcess_Alarms_Role"
  assume_role_policy = data.aws_iam_policy_document.LambdaDefaultPolicy.json
}

# Create Lambda Function
resource "aws_lambda_function" "IoTRule_DataProcess_Alarms_lambda" {
    function_name = "${upper(var.client)}_IoTRule_DataProcess_Alarms"
    handler       = "index.handler"
    runtime       = "nodejs18.x"
    timeout       = 10
    role          = aws_iam_role.IoTRule_DataProcess_Alarms_Role.arn

    filename      = data.archive_file.IoTRule_DataProcess_Alarms_ZipFile.output_path
    source_code_hash = data.archive_file.IoTRule_DataProcess_Alarms_ZipFile.output_base64sha256
}




###############################
### API_PostgreSQLTimescale ###
###############################

# Get Lambda Function Code
data "archive_file" "API_PostgreSQLTimescale_ZipFile" {
  type        = "zip"
  source_dir  = "aws_lambda/API_PostgreSQLTimescale"
  output_path = "aws_lambda/zip/API_PostgreSQLTimescale_ZipFile.zip"
}

# Create a IAM Role for Lambda Function
resource "aws_iam_role" "API_PostgreSQLTimescale_Role" {
  name               = "${upper(var.client)}_API_PostgreSQLTimescale_Role"
  assume_role_policy = data.aws_iam_policy_document.LambdaDefaultPolicy.json
}

# Create Lambda Function
resource "aws_lambda_function" "API_PostgreSQLTimescale_lambda" {
    function_name = "${upper(var.client)}_API_PostgreSQLTimescale"
    handler       = "index.handler"
    runtime       = "nodejs18.x"
    timeout       = 10
    role          = aws_iam_role.API_PostgreSQLTimescale_Role.arn

    filename      = data.archive_file.API_PostgreSQLTimescale_ZipFile.output_path
    source_code_hash = data.archive_file.API_PostgreSQLTimescale_ZipFile.output_base64sha256
}




##########################
### API_IoTCoreLorawan ###
##########################

# Get Lambda Function Code
data "archive_file" "API_IoTCoreLorawan_ZipFile" {
  type        = "zip"
  source_dir  = "aws_lambda/API_IoTCoreLorawan"
  output_path = "aws_lambda/zip/API_IoTCoreLorawan_ZipFile.zip"
}

# Create a IAM Role for Lambda Function
resource "aws_iam_role" "API_IoTCoreLorawan_Role" {
  name               = "${upper(var.client)}_API_IoTCoreLorawan_Role"
  assume_role_policy = data.aws_iam_policy_document.LambdaDefaultPolicy.json
}

# Create Lambda Function
resource "aws_lambda_function" "API_IoTCoreLorawan_lambda" {
    function_name = "${upper(var.client)}_API_IoTCoreLorawan"
    handler       = "index.handler"
    runtime       = "nodejs18.x"
    timeout       = 10
    role          = aws_iam_role.API_IoTCoreLorawan_Role.arn

    filename      = data.archive_file.API_IoTCoreLorawan_ZipFile.output_path
    source_code_hash = data.archive_file.API_IoTCoreLorawan_ZipFile.output_base64sha256
}




###################
### API_UserApi ###
###################

# Get Lambda Function Code
data "archive_file" "API_UserApi_ZipFile" {
  type        = "zip"
  source_dir  = "aws_lambda/API_UserApi"
  output_path = "aws_lambda/zip/API_UserApi_ZipFile.zip"
}

# Create a IAM Role for Lambda Function
resource "aws_iam_role" "API_UserApi_Role" {
  name               = "${upper(var.client)}_API_UserApi_Role"
  assume_role_policy = data.aws_iam_policy_document.LambdaDefaultPolicy.json
}

# Create Lambda Function
resource "aws_lambda_function" "API_UserApi_lambda" {
    function_name = "${upper(var.client)}_API_UserApi"
    handler       = "index.handler"
    runtime       = "nodejs18.x"
    timeout       = 10
    role          = aws_iam_role.API_UserApi_Role.arn

    filename      = data.archive_file.API_UserApi_ZipFile.output_path
    source_code_hash = data.archive_file.API_UserApi_ZipFile.output_base64sha256
}
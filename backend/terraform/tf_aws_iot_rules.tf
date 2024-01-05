################
### Policies ###
################

data "aws_iam_policy_document" "IoTRuleDefaultPolicy" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["iot.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

####################
### DataLakeRule ###
####################

resource "aws_iam_role" "IoTRuleDataLakeRule_Role" {
  name               = "${upper(var.client)}_DataLakeRule_Role"
  assume_role_policy = data.aws_iam_policy_document.IoTRuleDefaultPolicy.json
}

resource "aws_lambda_permission" "DataLakeRule_InvokeLambda" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.IoTRule_DataLake_lambda.function_name
  principal     = "iot.amazonaws.com"
  source_arn    = aws_iot_topic_rule.DataLakeRule.arn
}

resource "aws_iot_topic_rule" "DataLakeRule" {
  name        = "${upper(var.client)}_DataLakeRule"
  description = "S3 Storage"
  sql         = "SELECT * FROM '${lower(var.client)}/#'"
  sql_version = "2016-03-23"
  enabled     = true

  lambda {
    function_arn = aws_lambda_function.IoTRule_DataLake_lambda.arn
  }
}


##########################
### LorawanDecoderRule ###
##########################

resource "aws_iam_role" "IoTRuleLorawanDecoderRule_Role" {
  name               = "${upper(var.client)}_LorawanDecoderRule_Role"
  assume_role_policy = data.aws_iam_policy_document.IoTRuleDefaultPolicy.json
}

resource "aws_lambda_permission" "LorawanDecoderRule_InvokeLambda" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.IoTRule_LorawanDecoder_lambda.function_name
  principal     = "iot.amazonaws.com"
  source_arn    = aws_iot_topic_rule.LorawanDecoderRule.arn
}

resource "aws_iot_topic_rule" "LorawanDecoderRule" {
  name        = "${upper(var.client)}_LorawanDecoderRule"
  description = "Check from '${lower(var.client)}/telelamp/lorawan/uplink', decode it and repuclish to ${lower(var.client)}/telelamp/data'"
  sql         = "SELECT * FROM '${lower(var.client)}/telelamp/lorawan/uplink'"
  sql_version = "2016-03-23"
  enabled     = true

  lambda {
    function_arn = aws_lambda_function.IoTRule_LorawanDecoder_lambda.arn
  }
}


#######################
### DataProcessRule ###
#######################

resource "aws_iam_role" "IoTRuleDataProcessRule_Role" {
  name               = "${upper(var.client)}_DataProcessRule_Role"
  assume_role_policy = data.aws_iam_policy_document.IoTRuleDefaultPolicy.json
}

resource "aws_lambda_permission" "DataProcessRule_Storage_InvokeLambda" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.IoTRule_DataProcess_Storage_lambda.function_name
  principal     = "iot.amazonaws.com"
  source_arn    = aws_iot_topic_rule.DataProcessRule.arn
}

resource "aws_lambda_permission" "DataProcessRule_Alarms_InvokeLambda" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.IoTRule_DataProcess_Alarms_lambda.function_name
  principal     = "iot.amazonaws.com"
  source_arn    = aws_iot_topic_rule.DataProcessRule.arn
}

resource "aws_iot_topic_rule" "DataProcessRule" {
  name        = "${upper(var.client)}_DataProcessRule"
  description = "Check from ${lower(var.client)}/telelamp/data', Storage in Database and Check Alarms (Cold and Warm Paths)"
  sql         = "SELECT * FROM '${lower(var.client)}/telelamp/data'"
  sql_version = "2016-03-23"
  enabled     = true

  lambda {
    function_arn = aws_lambda_function.IoTRule_DataProcess_Storage_lambda.arn
  }

  lambda {
    function_arn = aws_lambda_function.IoTRule_DataProcess_Alarms_lambda.arn
  }
}

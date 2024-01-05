resource "aws_apigatewayv2_api" "HTTP_API" {
  name          = "${upper(var.client)}_HTTP_API"
  protocol_type = "HTTP"

    cors_configuration {
      allow_origins = ["*"]
      allow_methods = ["GET", "POST", "PUT", "DELETE"]
      allow_headers = ["*"]
      max_age       = 3000
    }
}

resource "aws_apigatewayv2_stage" "HTTP_API_Stage" {
  api_id      = aws_apigatewayv2_api.HTTP_API.id
  name        = "$default"
  auto_deploy = true
}


###########################
# API_PostgreSQLTimescale #
###########################

resource "aws_apigatewayv2_route" "HTTP_API_PostgreSQLTimescale_Route" {
  api_id    = aws_apigatewayv2_api.HTTP_API.id
  route_key = "ANY /timescale"
  target    = "integrations/${aws_apigatewayv2_integration.HTTP_API_PostgreSQLTimescale_Integration.id}"
}

resource "aws_apigatewayv2_integration" "HTTP_API_PostgreSQLTimescale_Integration" {
  api_id                  = aws_apigatewayv2_api.HTTP_API.id
  integration_type        = "AWS_PROXY"
  integration_method      = "POST"
  integration_uri         = aws_lambda_function.API_PostgreSQLTimescale_lambda.invoke_arn
}

resource "aws_lambda_permission" "HTTP_API_PostgreSQLTimescale_InvokeLambda" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  principal     = "apigateway.amazonaws.com"
  function_name = aws_lambda_function.API_PostgreSQLTimescale_lambda.function_name

  source_arn = "arn:aws:execute-api:${var.region}:${var.accountId}:${aws_apigatewayv2_api.HTTP_API.id}/*/*/timescale"
}


######################
# API_IoTCoreLorawan #
######################

resource "aws_apigatewayv2_route" "HTTP_API_IoTCoreLorawan_Route" {
  api_id    = aws_apigatewayv2_api.HTTP_API.id
  route_key = "ANY /lorawan"
  target    = "integrations/${aws_apigatewayv2_integration.HTTP_API_IoTCoreLorawan_Integration.id}"
}

resource "aws_apigatewayv2_integration" "HTTP_API_IoTCoreLorawan_Integration" {
  api_id                  = aws_apigatewayv2_api.HTTP_API.id
  integration_type        = "AWS_PROXY"
  integration_method      = "POST"
  integration_uri         = aws_lambda_function.API_IoTCoreLorawan_lambda.invoke_arn
}

resource "aws_lambda_permission" "HTTP_API_IoTCoreLorawan_InvokeLambda" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  principal     = "apigateway.amazonaws.com"
  function_name = aws_lambda_function.API_IoTCoreLorawan_lambda.function_name

  source_arn = "arn:aws:execute-api:${var.region}:${var.accountId}:${aws_apigatewayv2_api.HTTP_API.id}/*/*/lorawan"
}


###############
# API_UserApi #
###############

resource "aws_apigatewayv2_route" "HTTP_API_UserApi_Route" {
  api_id    = aws_apigatewayv2_api.HTTP_API.id
  route_key = "ANY /api"
  target    = "integrations/${aws_apigatewayv2_integration.HTTP_API_UserApi_Integration.id}"
}

resource "aws_apigatewayv2_integration" "HTTP_API_UserApi_Integration" {
  api_id                  = aws_apigatewayv2_api.HTTP_API.id
  integration_type        = "AWS_PROXY"
  integration_method      = "POST"
  integration_uri         = aws_lambda_function.API_UserApi_lambda.invoke_arn
}

resource "aws_lambda_permission" "HTTP_API_UserApi_InvokeLambda" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  principal     = "apigateway.amazonaws.com"
  function_name = aws_lambda_function.API_UserApi_lambda.function_name

  source_arn = "arn:aws:execute-api:${var.region}:${var.accountId}:${aws_apigatewayv2_api.HTTP_API.id}/*/*/api"
}

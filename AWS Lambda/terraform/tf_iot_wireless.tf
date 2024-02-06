########################
### Destination Role ###
########################

resource "aws_iam_role" "DestinationRole" {
  name = "${upper(var.client)}_DestinationRole"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "iotwireless.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}


###################
### Destination ###
###################


resource "awscc_iotwireless_destination" "lorawan_destination" {
  name                  = "${upper(var.client)}_TelelampLorawanDestination"
  expression_type       = "MqttTopic"
  expression            = "${lower(var.client)}/telelamp/lorawan/uplink"
  description           = "Data received for Telelamp Lorawan Devices"
  role_arn              = aws_iam_role.DestinationRole.arn

}


################
### Profiles ###
################


resource "awscc_iotwireless_service_profile" "Telelamp_ServiceProfile" {
  name              = "${upper(var.client)}_Telelamp_ServiceProfile"
}

resource "awscc_iotwireless_device_profile" "AU915_C_OTAA_DeviceProfile" {
  name               = "${upper(var.client)}_AU915_C_OTAA_DeviceProfile"
  lo_ra_wan          = {
    supports_class_b = false
    rf_region     = "AU915"
    mac_version      = "1.0.2"
  }
}

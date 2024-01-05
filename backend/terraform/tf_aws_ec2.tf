# # Create SSH Key Pair
# resource "aws_key_pair" "keypair" {
#   key_name   = "key-pair"
#   public_key = file("aws_ec2/id_rsa.pub")
# }

# # Create Security Group
# resource "aws_security_group" "Allow_HTTP_SSH_Traffic" {
#   name        = "Allow_HTTP_SSH_Traffic"
#   description = "Allow HTTP/HTTPS and SSH Traffic inbound, and all trafic outbound"
  
#   # Allow SSH from anywhere
#   ingress {
#     from_port   = 22
#     to_port     = 22
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   # Allow HTTP from anywhere
#   ingress {
#     from_port   = 80
#     to_port     = 80
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"] 
#   }

#   # Allow HTTPS from anywhere
#   ingress {
#     from_port   = 443
#     to_port     = 443
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"] # Allow HTTPS from anywhere
#   }

#   # Allow all Outbound
#   egress {
#     from_port   = 0
#     to_port     = 65535
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"] # Allow all data-out
#   }
# }

# # Launch EC2 Instance with Ubuntu 22.04 AMI
# resource "aws_instance" "Telelamp_App_Server" {
#   ami           = "ami-0fc5d935ebf8bc3bc"
#   instance_type = "t2.micro"
#   key_name      = "key-pair"
#   security_groups = [aws_security_group.Allow_HTTP_SSH_Traffic.name]
  
#   # Custom bash-script to execute after create instance
#   user_data     = <<-EOF
#     #!/bin/bash
#     mkdir /home/ubuntu/telelamp
#     cd /home/ubuntu/telelamp
#     touch readme.md
#     EOF

#   tags = {
#     Name = "Telelamp Application Server"
#   }
# }
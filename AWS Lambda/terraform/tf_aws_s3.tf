resource "aws_s3_bucket" "datalake" {
  bucket = "${lower(var.client)}.telelamp.datalake"
}
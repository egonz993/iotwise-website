provider "aws" {
  region = var.region

  default_tags {
    tags = {
      Department  = "TI"
      Area        = "Telelamp"
      Client      = upper(var.client)
    }
  }
}
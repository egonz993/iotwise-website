import admin from "firebase-admin";

export const FirebaseApp = admin.initializeApp({
    databaseURL: "https://iotwise-demo-default-rtdb.firebaseio.com",
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "iotwise-demo",
        "private_key_id": "e4d918f70d96fa6bc7f2eeaf0f05bb9572ef11b7",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC+2AGSdGoBX8lH\npNL7tBoyMLkjA3D+vW5ljM3gQAgeLbVPwEqm0s4txfdJ2S1Ax0NM9v4D44Ck70oa\ng/8ov5JOyxE+lcOTtM5fnXYLDi/AywrZUmEHCtO//3qfCePcJZogaH/6Tn8CkClH\nNBN6mA9dpnh3RJQfAxzVLZrrCq5B2svZ7gNXbJb9crFTfZBREkRVTIVAu6B/eMSQ\nNFhrkH+/hJguDK48mEBUg4WlYLBmpU6NjbAx+Fo03M3yEG6bZ/29ynkPPiNAvqTa\nxE1ylhRz9aLsvX1H7X/y0SkhNtXAB/OWCssk54bhTkycdlMFBa2I0HTJNOpEnMEl\nJo+dm7cBAgMBAAECggEAGqmK7q8c8Dw1nrDEWS38Su7LrryYWL6WYdGeIapQeAbi\nwdWXmF7zNynlNogE7nvoRyRqsJhkLKbRr4qpZ0P8aM2uBxRdUpF8E5eoGjtNKJ41\nUc9UhutYUgabVwTGtMb8FXMEDjBRRkZlvfDkl8gOvYK4adFG8F469P1+G0BOwBxX\ng6QTdhKmazRNF/4WEqBlRKuRWo4ldIpBtz9slAkriMn91l3OobPz82E0Rt3qO6MT\nZpmuA3AYRfDrfQB8LR67tqTnGtf4hOHtl7OWf//xCZ7yhlfM/gPgkPimuJYTaFvR\n45FHlN8gIh2hd6UYsiFRczmCeqe093nT+g2/0nhLEQKBgQDdmRqXVXRwmCVxzWBz\nUUd5NAticY3o+gIJP7ixDzBDRRypzQRlRPvk89DO098wJ7Ywgx2gjfaeTvsQbaGY\n5ybnVeLyirDsgvTb+H/d+a2vjPpi2B0xQycPHxHWMRq51F2kBp1US22paEM3e3NN\n/7tQw1G6hGppKqErh1jACarXjwKBgQDceKUlQ+U8Q6yG3n1ZX1h/KUiSltNZuZbE\nOC6Z9IpMwHyMSTh1t3RiVJZRCu4Q7CLtAiGlBtBPIiE5munTMuMB5pncMZe+miep\nE3GOkzvMFhDxa+hXCjsg80CBw5NUcXJUDQvaNuXfrMaJZ/VA/PVDtE0F+rE9POkI\n0Gs6YNPAbwKBgFbhs1JIN+n5TR0MV9d+s5YquJf1S51fgDLeH+yTtul5DF7queF2\npYhDq8ebvDLmLwFgNtp/LoUtFDSBt0z6u/8RZnSPugRQ5+3ixUdjoBxnGrhsYS2y\nVXsRRG4FPKRFRh2MVlz5Ydp8vXXgWfnn3SoyGjYVup7XDu/BFiPc5nWzAoGAHT2T\nCaI7oQaIt0qC7XuLzTG4glimp1vJ9zRMWfbo8M0Gt8RuTI6MTQ5S8WS1tmDbMPv7\nYlvI/PXV2kIFiRFSsknXVjDto0XmxLHjebllUOgMTzi0k/azaOdaQtuhiq2RMDya\nudJWIphTrJ2xFXF3Rgd/v69EGo8diSG7Vv7IltkCgYAo39vOT252TetXktoKFdYC\ndCciuwJWDZjtdZ0xr+5JY7/1gaPuuNLa7ac8oGihKr1kxIEmrqi5iuPtF3tk0DCG\nchiCpVFIFuUPwdIIkxR/oe6LlR2O5YGGSPT/Dz/2udG3jIKOZC7eeIVYYN+5Qzkd\nywQ8BDmYbfd3hTmIJLezlg==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-47yd4@iotwise-demo.iam.gserviceaccount.com",
        "client_id": "116799152638099961748",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-47yd4%40iotwise-demo.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    })
});
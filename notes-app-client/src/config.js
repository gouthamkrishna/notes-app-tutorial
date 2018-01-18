export default {
  s3: {
    BUCKET: "notes-x-uploads"
  },
  apiGateway: {
    URL: "https://wv59pi4ur3.execute-api.us-east-2.amazonaws.com/prod",
    REGION: "us-east-2"
  },
  cognito: {
    USER_POOL_ID: "us-east-2_Jlv3AIh3O",
    APP_CLIENT_ID: "72ng6igg26frtpb2aotu23qlg8",
    REGION: "us-east-2",
    IDENTITY_POOL_ID: "us-east-2:33b8f8fc-c93f-4248-8e42-4dfab3d9a78d"
  },
  MAX_ATTACHMENT_SIZE: 3000000
};

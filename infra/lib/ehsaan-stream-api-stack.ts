import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";

import { Construct } from "constructs";

export class EhsaanStreamApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const audioBucket = new s3.Bucket(this, "ehsaan-stream-api-audio-bucket", {
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
      bucketName: "ehsaan-stream-api-audio-bucket",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      "ehsaan-stream-api-audio-bucket-oai",
      {
        comment: "oai for ehsaan-stream-audio-bucket-api",
      }
    );
    const cloudFrontDistribution = new cloudfront.Distribution(
      this,
      "cloudfront-distribution-ehsaan-stream-api-audio-bucket",
      {
        comment: "cloudfront distribution for ehsaan-stream-api-audio-bucket",
        defaultBehavior: {
          origin: new origins.S3Origin(audioBucket, {
            originAccessIdentity,
          }),
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
      }
    );
  }
}

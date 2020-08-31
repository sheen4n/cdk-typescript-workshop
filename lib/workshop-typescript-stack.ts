import * as sns from '@aws-cdk/aws-sns';
import * as subs from '@aws-cdk/aws-sns-subscriptions';
import * as sqs from '@aws-cdk/aws-sqs';
import * as cdk from '@aws-cdk/core';
import { Bucket, BlockPublicAccess } from '@aws-cdk/aws-s3';
import {
  Instance,
  InstanceType,
  InstanceClass,
  InstanceSize,
  AmazonLinuxImage,
  Vpc,
} from '@aws-cdk/aws-ec2';

export class WorkshopTypescriptStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    /**
    const queue = new sqs.Queue(this, 'WorkshopTypescriptQueue', {
      visibilityTimeout: cdk.Duration.seconds(300),
    });

    const topic = new sns.Topic(this, 'WorkshopTypescriptTopic');

    const bucket = new Bucket(this, 'cdkbucket', {
      versioned: true,
      blockPublicAccess: new BlockPublicAccess({
        blockPublicAcls: true,
        blockPublicPolicy: true,
        ignorePublicAcls: true,
        restrictPublicBuckets: true,
      }),
    });

    const vpc = new Vpc(this, 'VPC');

    const ec2 = new Instance(this, 'cdkec2instance', {
      vpc,
      instanceType: InstanceType.of(InstanceClass.T2, InstanceSize.MICRO),
      machineImage: new AmazonLinuxImage(),
    });

    topic.addSubscription(new subs.SqsSubscription(queue));

     */
  }
}

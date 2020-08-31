#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { WorkshopTypescriptStack } from '../lib/workshop-typescript-stack';

const app = new cdk.App();
new WorkshopTypescriptStack(app, 'WorkshopTypescriptStack');

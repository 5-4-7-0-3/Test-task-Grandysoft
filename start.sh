#!/bin/bash
export PGPASSWORD="postgres"
psql -h localhost -t -U postgres  -c  "CREATE DATABASE userdb"
npm run migrate:latest
npm run seed
npm run dev

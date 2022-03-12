#!/bin/bash

version=$1

function join {
    local IFS="$1"
    shift
    echo "$*"
}

# get the root path of the directory this file resides
# this enables this script to be called from any path
# https://gist.github.com/olegch/1730673
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

keywords=(
    "k8scommerce"
    "client gateway api"
)
keywords_json=$(printf '%s\n' "${keywords[@]}" | jq -R . | jq -s .)

# set the original and destination vars
orig=$ROOT/../../k8scommerce/docs/swagger/v1/client.json
dest=$ROOT/../projects/client-gateway-sdk/src/
# # npm i ng-openapi-gen -g

# remove the dist directory
rm -rf $ROOT/../dist

# generate for angular
openapi --input $orig --output $dest --client angular

# add the version number to the newly created package.json
perl -pi -e "BEGIN{undef $/;} s/\"version\": \"(\d+\.\d+\.\d+|)\",/\"version\": \"$version\",/smg" $ROOT/../package.json
perl -pi -e "BEGIN{undef $/;} s/\"version\": \"(\d+\.\d+\.\d+|)\",/\"version\": \"$version\",/smg" $ROOT/../projects/client-gateway-sdk/package.json

# remove the package-lock.json file
rm -rf $ROOT/../package-lock.json

# build the project
npm run build

# push to github
$ROOT/gitpush.sh k8scommerce client-gateway-sdk "update to version ${version}" "github.com"

# publish to npm
cd $ROOT/../dist/client-gateway-sdk && npm publish --access public && cd $ROOT

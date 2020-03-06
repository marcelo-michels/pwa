
#aws s3 rm s3://pwa.marcelomichels.com --recursive --profile awsmmcom

aws s3 sync . s3://pwa.marcelomichels.com --acl public-read --exclude '.git/*' --exclude 'node_modules/*' --profile awsmmcom

aws s3 cp s3://pwa.marcelomichels.com/ s3://pwa.marcelomichels.com/ --exclude "*" --include "*.js" --include "*.css" --include "*.png" --include "*.jpg" --recursive --metadata-directive REPLACE --expires 2034-01-01T00:00:00Z --acl public-read --cache-control max-age=700000,public --profile awsmmcom

aws cloudfront create-invalidation --distribution-id E2FTEUK2SHNVFX --paths '/*' --profile awsmmcom

# copy-and-replace-tokens

This action will copy a file and replace tokens (env variables surrounded by {}, eg {USER} is a token for the env variable USER).

## Inputs

There's two inputs available for this action.
* `source` - Defines the source file to copy and replace tokens in.
* `target` - Defines the output target file.

## Example
Example action:
```yaml
- name: Setting up config file
  uses: BlobDevelopment/copy-and-replace-tokens@v1
  with:
    source: 'config.yml.template'
    target: 'config.yml'
  env:
    MYSQL_HOST: mysql
    MYSQL_DATABASE: ${{ secrets.MYSQL_DATABASE }}
    MYSQL_USER: ${{ secrets.MYSQL_USER }}
    MYSQL_PASSWORD: ${{ secrets.MYSQL_PASSWORD }}
```

Example config.yml:
Add to a workflow if you wish to copy a file and replace tokens inside of it.

Example usage:
```yaml
- name: Setting up config
  uses: BlobDevelopment/copy-and-replace-tokens@v1
  with:
    source: 'config.yml.template'
    target: 'config.yml'
  env:
    MYSQL_HOST: mysql
    MYSQL_USER: ${{ secrets.MYSQL_USER }}
    MYSQL_PASSWORD: ${{ secrets.MYSQL_PASSWORD }}
    MYSQL_DATABASE: ${{ secrets.MYSQL_DATABASE }}
```

Example config.yml file:
```yaml
mysql:
  host: {MYSQL_HOST}
  port: 3306
  username: {MYSQL_USER}
  password: {MYSQL_PASSWORD}
  database: {MYSQL_DATABASE}
```

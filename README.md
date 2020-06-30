# copy-and-replace-tokens

## Inputs

There's two inputs available for this action.
* `source` - Defines the source file to copy and replace tokens in.
* `target` - Defines the output target file.

## Example
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

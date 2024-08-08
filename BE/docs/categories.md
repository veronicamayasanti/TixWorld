# Categories Speck API

## Get all categories
Method GET

http://localhost/api/v1/categories

Response body:
```json
{
    "data": [
        {
            "id":"3523435325",
            "name": "TixWorld"
        }
    ]
}
```

## Create Categories
Method POST

http://localhost/api/v1/cms/categories

Request body:
```json
{
  "name": "string"
}
```

Response body:
```json
{
    "data": 
        {
            "_id": 3424242,
            "name": "string"
        }
    
}
```
## Get one categories by id
Method GET

http://localhost/api/v1/cms/categories/:id

Response body:
```json
{
    "data": 
        {
            "_id": 3424242,
            "name": "string"
        }
    
}
```
## Update categories 
Method PUT

http://localhost/api/v1/cms/categories/:id

Request body:
```json
{
  "name": "string"
}
```

Response body:
```json
{
    "data": 
        {
            "_id": 3424242,
            "name": "string"
        }
    
}
```

## Delete categories 
Method DELETE

http://localhost/api/v1/cms/categories/:id

Response body:
```json
{
    "data": 
        {
            "_id": 3424242,
            "name": "string"
        }
    
}
```
# Design thoughts

## Entities

- Items
  - Id
  - Title
  - Description
  - Cost
  - Featured
  - Category
  - Reviews
- Categories
  - Id
  - Title
- Bundles
  - Id
  - Items
  - Discount
- Shopping cart
  - Items
- Users
  - Id
  - username
  - Facebook_id
  - password
  - admin
- Reviews
  - Id
  - Author
  - Text
  - Rating
- Orders
  - Id
  - Number
  - Items
    - item_id
    - item_title
    - item_cost
  - User
  - Cost
  - Fulfilled
  - Labels

## Features

Email
Facebook integration
Media uploads
